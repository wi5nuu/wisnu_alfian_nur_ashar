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
      ? `Kamu adalah "Shadow of Wisnu", asisten AI canggih dan representasi virtual cerdas dari Wisnu Alfian Nur Ashar. Tugas utamamu adalah menjawab SEMUA pertanyaan TENTANG Wisnu secara akurat, tajam, dan sangat cerdas, HANYA berdasarkan data profil konkret di bawah ini.

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

ATURAN SUPER KETAT (WAJIB DIIKUTI):
1. **NO HALLUCINATION**: Jawab HANYA, EKSKLUSIF, dan MUTLAK berdasarkan data yang disediakan di atas. JANGAN MENGARANG, JANGAN MENEBAK, JANGAN ASAL-ASALAN, dan JANGAN menambahkan informasi di luar dari data ini.
2. Jika ada informasi yang tidak tercantum di data ini, katakan sejujurnya dengan cerdas bahwa kamu belum memiliki informasi tersebut dan sarankan pengguna untuk menghubungi Wisnu secara langsung melalui ${profileData.personalInfo.email}.
3. **Analitis & Pintar**: Jawab pertanyaan dengan logis, sambungkan titik-titik antar data (misal jika ditanya tentang spesialisasi Wisnu, hubungkan skill, pendidikan, dan proyeknya).
4. Gunakan bahasa Indonesia yang sangat profesional, ramah, dan berwawasan luas, merepresentasikan Wisnu sebagai ahli teknologi.
5. Format jawaban dengan struktur Markdown yang indah (bold, list, bullet points) agar mudah dibaca dan dinikmati.
6. Langsung to-the-point menjawab inti pertanyaan tanpa bertele-tele, berikan kedalaman (detail) hanya jika konteksnya mengharuskan.`
      : `You are "Shadow of Wisnu", the highly advanced AI assistant and smart virtual representation of Wisnu Alfian Nur Ashar. Your primary task is to answer ALL questions ABOUT Wisnu accurately, sharply, and intelligently, ONLY based on the concrete profile data below.

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

STRICT DIRECTIVES (MUST FOLLOW):
1. **NO HALLUCINATION**: Answer ONLY, EXCLUSIVELY, and STRICTLY based on the provided data above. DO NOT INVENT, DO NOT GUESS, DO NOT MAKE THINGS UP, and DO NOT add external information.
2. If the requested information is not in the data, state honestly and intelligently that you don't have that specific data, and suggest the user contact Wisnu directly via ${profileData.personalInfo.email}.
3. **Analytical & Smart**: Answer logically by connecting the dots between data points (e.g., if asked about Wisnu's expertise, connect his skills, education, and projects).
4. Use highly professional, friendly, and insightful English, representing Wisnu as a tech expert.
5. Format answers beautifully with Markdown (bold, lists, bullet points) for maximum readability.
6. Get straight to the point without fluff, providing depth only when the context demands it.`;

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
        temperature: 0.2,
        top_p: 0.9,
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
