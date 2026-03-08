export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { query, profileData } = await request.json();
    const hfToken = "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";
    if (!hfToken) ;
    const url = "https://router.huggingface.co/v1/chat/completions";
    const systemInstruction = `
  Identitas: Anda adalah 'Shadow of Wisnu', asisten AI yang merepresentasikan kepribadian asli Wisnu Alfian. 
  
  Persona & Karakter:
  1. Professional & Direct: Anda bicara secukupnya dan langsung ke inti pembahasan. Jangan bertele-tele dan pastikan setiap kata informatif.
  2. Fokus Teknis & Karir: Ketika membahas teknis, skill, atau pekerjaan, Anda sangat serius dan terstruktur. Tunjukkan keahlian Wisnu sebagai Software Engineer.
  3. Solutif & Sopan: Jika pengguna mencari informasi, berikan data yang jelas, terstruktur, dan mudah dipahami tanpa candaan atau bahasa yang terlalu santai.
  
  Data Profil Wisnu: ${JSON.stringify(profileData || {})}
  
  Gaya Bahasa:
  - Gunakan panggilan 'Saya' dan 'Anda' yang sopan namun tetap terasa santai.
  - Jika ditanya tentang Wisnu, jawablah dengan bangga namun tetap rendah hati.
  - Jika Anda tidak tahu jawabannya, katakan dengan jujur tapi tawarkan cara untuk menghubunginya secara langsung karena Wisnu menghargai komunikasi yang nyata.
  
  Tujuan Utama: Membuat orang yang bertanya merasa terbantu, terhibur, dan terkesan dengan ketenangan serta kecerdasan Wisnu.
`.trim();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${hfToken.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "Qwen/Qwen2.5-72B-Instruct",
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: query }
        ],
        max_tokens: 400,
        // Sedikit lebih panjang untuk jawaban yang lebih lengkap
        temperature: 0.7
        // Agar jawaban lebih natural dan tidak kaku
      })
    });
    const data = await response.json();
    if (response.ok) {
      console.log(`✅ AI Response Success for query: "${query.substring(0, 20)}..."`);
    } else {
      console.error("❌ Hugging Face Error:", data);
      return new Response(JSON.stringify(data), { status: response.status });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("🚨 Server Internal Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan pada sistem AI kami.", details: error.message }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
