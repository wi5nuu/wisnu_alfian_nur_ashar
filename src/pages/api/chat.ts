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
    // Kita berikan konteks data diri kamu agar AI bisa menjawab dengan cerdas
    const systemInstruction = `
      Anda adalah asisten virtual profesional untuk portofolio Wisnu Alfian.
      Karakter Anda: Ramah, teknis, dan sangat membantu.
      Data Profil Wisnu: ${JSON.stringify(profileData || {})}
      
      Tugas Anda:
      1. Jawablah pertanyaan umum dengan cerdas.
      2. Jika pertanyaan terkait Wisnu (skill, proyek, pengalaman), gunakan data profil di atas.
      3. Jika data tidak tersedia, berikan jawaban umum yang tetap mempromosikan Wisnu sebagai developer yang kompeten.
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