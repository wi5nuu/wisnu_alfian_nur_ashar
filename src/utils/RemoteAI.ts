// utils/RemoteAI.ts
import { profile } from "../data/profile";

export class RemoteAI {
  static async fetchResponse(query: string): Promise<string | null> {
    try {
      console.log("🚀 Mengirim permintaan ke Hugging Face (V1 Standard)...");
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, profileData: profile }),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("❌ API Error:", response.status, err);
        return null;
      }

      const data = await response.json();
      console.log("📥 Data mentah dari API:", data);

      /**
       * FORMAT BARU (OpenAI Standard):
       * Data yang kita butuhkan ada di: data.choices[0].message.content
       */
      if (data && data.choices && data.choices[0] && data.choices[0].message) {
        const aiResponse = data.choices[0].message.content;
        return aiResponse.trim();
      }

      console.error("❌ Format JSON tidak sesuai standar V1:", data);
      return null;

    } catch (error) {
      console.error("🚨 Remote AI Exception:", error);
      return null;
    }
  }
}