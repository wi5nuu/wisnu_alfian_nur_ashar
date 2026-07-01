interface Donation {
  id: string;
  name: string;
  qty: number;
  method: string;
  message: string;
  timestamp: number;
  confirmed: boolean;
}

let inMemoryStore: Donation[] = [];

let kvAvailable: boolean | null = null;

async function checkKV(): Promise<boolean> {
  if (kvAvailable !== null) return kvAvailable;
  try {
    const { kv } = await import('@vercel/kv');
    await kv.ping();
    kvAvailable = true;
  } catch {
    kvAvailable = false;
  }
  return kvAvailable;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

export async function createDonation(data: Omit<Donation, 'id' | 'confirmed' | 'timestamp'>): Promise<Donation> {
  const donation: Donation = {
    id: generateId(),
    name: data.name,
    qty: data.qty,
    method: data.method,
    message: data.message,
    timestamp: Date.now(),
    confirmed: false,
  };

  if (await checkKV()) {
    const { kv } = await import('@vercel/kv');
    await kv.lpush('donations', donation);
  }

  inMemoryStore.push(donation);
  return donation;
}

export async function getDonations(onlyConfirmed: boolean = false): Promise<Donation[]> {
  let donations: Donation[] = [];

  if (await checkKV()) {
    const { kv } = await import('@vercel/kv');
    donations = (await kv.lrange('donations', 0, -1)) as Donation[];
  } else {
    donations = [...inMemoryStore];
  }

  if (onlyConfirmed) {
    return donations.filter(d => d.confirmed).sort((a, b) => b.timestamp - a.timestamp);
  }

  return donations.sort((a, b) => b.timestamp - a.timestamp);
}

export async function confirmDonation(id: string): Promise<Donation | null> {
  if (await checkKV()) {
    const { kv } = await import('@vercel/kv');
    const donations = (await kv.lrange('donations', 0, -1)) as Donation[];
    const idx = donations.findIndex(d => d.id === id);
    if (idx === -1) return null;
    donations[idx].confirmed = true;
    await kv.del('donations');
    if (donations.length > 0) {
      await kv.lpush('donations', ...donations);
    }
    inMemoryStore = donations;
    return donations[idx];
  }

  const idx = inMemoryStore.findIndex(d => d.id === id);
  if (idx === -1) return null;
  inMemoryStore[idx].confirmed = true;
  return inMemoryStore[idx];
}

export async function getDonationStats(): Promise<{ total: number; pending: number; confirmed: number; totalDonuts: number }> {
  const donations = await getDonations();
  return {
    total: donations.length,
    pending: donations.filter(d => !d.confirmed).length,
    confirmed: donations.filter(d => d.confirmed).length,
    totalDonuts: donations.reduce((sum, d) => sum + d.qty, 0),
  };
}