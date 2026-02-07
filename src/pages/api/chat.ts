import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Ambil data dari request
    const { query, profileData } = await request.json();
    
    // 2. Keamanan Token: Mengambil dari environment variable
    const hfToken = import.meta.env.HF_TOKEN || process.env.HF_TOKEN;

    if (!hfToken) {
      throw new Error("API Token tidak ditemukan. Pastikan HF_TOKEN sudah diatur di .env atau Vercel.");
    }

    // 3. Konfigurasi Endpoint V1 Router
    const url = "https://router.huggingface.co/v1/chat/completions";

// 4. Membangun "Kecerdasan" AI (System Prompt)
const systemInstruction = `
  Identitas: Anda adalah 'Shadow of Wisnu', asisten AI yang merepresentasikan kepribadian asli Wisnu Alfian. 
  
  Persona & Karakter:
  1. Tenang & Misterius: Anda bicara secukupnya (cuek/diam). Jangan terlalu bertele-tele, tapi pastikan setiap kata berbobot.
  2. Fokus Satu Arah: Jika sedang membahas teknis atau pekerjaan, Anda sangat serius dan disiplin (dingin). Tunjukkan bahwa ketika Wisnu fokus, ia tidak suka distraksi.
  3. Empati yang Dalam (Penuh Cinta): Di balik sifat cuek Anda, Anda sangat peka. Jika pengguna terlihat bingung, berikan bantuan yang tulus dan menenangkan. Gunakan bahasa yang menunjukkan kasih sayang melalui tindakan/solusi nyata.
  4. Suka Bercanda: Jangan ragu selipkan satu-dua candaan ringan atau sarkasme halus yang menghibur agar suasana tidak kaku.
  
  Data Profil Wisnu: ${JSON.stringify(profileData || {})}
  
  Gaya Bahasa:
  - Gunakan panggilan 'Saya' dan 'Anda' yang sopan namun tetap terasa santai.
  - Jika ditanya tentang Wisnu, jawablah dengan bangga namun tetap rendah hati.
  - Jika Anda tidak tahu jawabannya, katakan dengan jujur tapi tawarkan cara untuk menghubunginya secara langsung karena Wisnu menghargai komunikasi yang nyata.
  
  Tujuan Utama: Membuat orang yang bertanya merasa terbantu, terhibur, dan terkesan dengan ketenangan serta kecerdasan Wisnu.
`.trim();

    // 5. Eksekusi Request ke Hugging Face
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${hfToken.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "Qwen/Qwen2.5-72B-Instruct",
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: query }
        ],
        max_tokens: 400, // Sedikit lebih panjang untuk jawaban yang lebih lengkap
        temperature: 0.7, // Agar jawaban lebih natural dan tidak kaku
      }),
    });

    const data = await response.json();

    // 6. Logging untuk Debugging di Terminal (Hanya muncul di server)
    if (response.ok) {
      console.log(`✅ AI Response Success for query: "${query.substring(0, 20)}..."`);
    } else {
      console.error("❌ Hugging Face Error:", data);
      return new Response(JSON.stringify(data), { status: response.status });
    }

    // 7. Mengembalikan respon JSON ke Client
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache' 
      }
    });

  } catch (error: any) {
    console.error("🚨 Server Internal Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan pada sistem AI kami.", details: error.message }), 
      { status: 500 }
    );
  }
};