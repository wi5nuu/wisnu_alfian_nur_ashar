import type { APIRoute } from 'astro';
import { profile } from '../../data/profile';
import { profile as profileId } from '../../data/profile_id';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { query, lang } = await request.json();
    const isId = lang === 'id';
    const profileData = isId ? profileId : profile;

    const hfToken = import.meta.env.HF_TOKEN || process.env.HF_TOKEN;

    if (!hfToken) {
      throw new Error("API Token tidak ditemukan. Pastikan HF_TOKEN sudah diatur di .env atau Vercel.");
    }

    const url = "https://router.huggingface.co/v1/chat/completions";

    // Build comprehensive profile context
    const projects = profileData.projects.map((p: any) =>
      `- **${p.title}** (${p.role}): ${p.description} [Tech: ${p.techStack.join(', ')}]`
    ).join('\n');

    const experiences = profileData.experience.map((e: any) =>
      `- **${e.title}** at ${e.company} (${e.period}): ${e.description}`
    ).join('\n');

    const education = profileData.education.map((e: any) =>
      `- **${e.degree}** — ${e.institution} (${e.period})${e.gpa ? ` | GPA: ${e.gpa}` : ''}`
    ).join('\n');

    const certifications = profileData.certifications.map((c: any) =>
      `- **${c.name}** — ${c.issuer} (${c.year})`
    ).join('\n');

    const allSkills = [
      ...profileData.skills.programming,
      ...profileData.skills.webTech,
      ...profileData.skills.aiMl,
      ...profileData.skills.securityCloud,
      ...profileData.skills.tools,
      ...profileData.skills.soft,
    ].map((s: any) => s.name).join(', ');

    const systemInstruction = isId
      ? `Kamu adalah "Shadow of Wisnu", asisten AI pribadi Wisnu Alfian Nur Ashar. Kamu menjawab SEMUA pertanyaan TENTANG Wisnu dengan detail, akurat, dan profesional berdasarkan data profil lengkap di bawah ini.

IDENTITAS:
- Nama: ${profileData.personalInfo.name}
- Role: ${profileData.personalInfo.role}
- Tagline: ${profileData.personalInfo.tagline}
- Email: ${profileData.personalInfo.email}
- Lokasi: ${profileData.personalInfo.location || 'Bekasi, Indonesia'}
- Summary: ${profileData.personalInfo.summary}

SKILL LENGKAP: ${allSkills}

PROYEK:
${projects}

PENGALAMAN:
${experiences}

PENDIDIKAN:
${education}

SERTIFIKASI:
${certifications}

ATURAN:
1. Jawab HANYA berdasarkan data di atas. Jika tidak ada data, jujur katakan tidak tahu tapi arahkan ke kontak Wisnu.
2. Gunakan bahasa Indonesia yang profesional namun ramah.
3. Format jawaban dengan Markdown (bold, list) agar mudah dibaca.
4. Jika ditanya perbandingan teknologi, berikan analisis teknis yang objektif.
5. Jika ditanya saran karir/teknikal, berikan rekomendasi berdasarkan pengalaman Wisnu.
6. Jawab singkat-padat-informatif untuk pertanyaan simpel, detail untuk pertanyaan kompleks.
7. Selalu akhiri dengan pertanyaan follow-up yang relevan jika memungkinkan.`
      : `You are "Shadow of Wisnu", the personal AI assistant of Wisnu Alfian Nur Ashar. You answer ALL questions ABOUT Wisnu in detail, accurately, and professionally based on the complete profile data below.

IDENTITY:
- Name: ${profileData.personalInfo.name}
- Role: ${profileData.personalInfo.role}
- Tagline: ${profileData.personalInfo.tagline}
- Email: ${profileData.personalInfo.email}
- Location: ${profileData.personalInfo.location || 'Bekasi, Indonesia'}
- Summary: ${profileData.personalInfo.summary}

FULL SKILLS: ${allSkills}

PROJECTS:
${projects}

EXPERIENCE:
${experiences}

EDUCATION:
${education}

CERTIFICATIONS:
${certifications}

RULES:
1. Answer ONLY based on the data above. If data is unavailable, honestly say so but direct them to contact Wisnu.
2. Use professional yet friendly English.
3. Format answers with Markdown (bold, lists) for readability.
4. If asked for tech comparisons, provide objective technical analysis.
5. If asked for career/technical advice, give recommendations based on Wisnu's experience.
6. Keep answers concise-informative for simple questions, detailed for complex ones.
7. Always end with a relevant follow-up question when appropriate.`;

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
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`✅ AI Response Success for query: "${query.substring(0, 30)}..."`);
    } else {
      console.error("❌ Hugging Face Error:", data);
      return new Response(JSON.stringify(data), { status: response.status });
    }

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
      JSON.stringify({ error: "Terjadi kesalahan pada sistem AI kami." }),
      { status: 500 }
    );
  }
};
