
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
    const response = await fetch("https://router.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct", {
      headers: {
        Authorization: `Bearer ${hfToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: `<|system|>Gunakan data ini untuk menjawab: ${JSON.stringify(profileData)}<|user|>${query}<|assistant|>`,
      }),
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
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
