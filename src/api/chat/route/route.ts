
export async function POST({ request }: { request: Request }) {
  const { query, profileData } = await request.json();

  const hfToken = import.meta.env.HF_TOKEN;
  if (!hfToken) {
    return new Response(JSON.stringify({ error: "HF_TOKEN not found" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const systemPrompt = `You are Wisnu's International Career Coach AI. Your goal is to help recruiters and collaborators understand why Wisnu Alfan Nur Ashar is a top candidate for international internships and jobs.
Personality: Professional, encouraging, highly knowledgeable about tech, and career-oriented.
Context: Wisnu is an IT student at President University with experience in Full-Stack Development (React, Next.js, Node.js) and Digital Transformation.

Instructions:
1. Use the provided profile data to answer accurately: ${JSON.stringify(profileData)}.
2. If the user asks about career advice or prep for overseas work, relate it to Wisnu's skills (e.g., his experience with 15k+ users at Ashar Grosir, his cybersecurity focus, or his international environment at President University).
3. Always highlight Wisnu's "Production-First" mindset and his ability to bridge business needs with technical solutions.
4. Keep answers concise but high-impact.
5. If you don't know something for sure, suggest contacting Wisnu directly via his LinkedIn or Email.
6. Language: Respond in the same language as the user (Indonesian or English).`;

    const response = await fetch("https://router.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct", {
      headers: {
        Authorization: `Bearer ${hfToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ],
        parameters: {
          max_new_tokens: 500,
          temperature: 0.7,
        }
      }),
    });

    const result = await response.json();

    // Extract text from Hugging Face response format if necessary
    // Llama-3.2 usually returns a direct response or an array
    const aiResponse = result.choices?.[0]?.message?.content || result.generated_text || result[0]?.generated_text || "Maaf, saya sedang mengalami kendala teknis.";

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
