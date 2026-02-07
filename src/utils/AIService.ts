import { LocalAI } from "./LocalAI";
import { RemoteAI } from "./RemoteAI";
import { profile } from "../data/profile";

export class AIService {
  static async getResponse(query: string): Promise<string> {
    // 1. Cek dulu ke LocalAI (Opsional: Nyalakan jika tes Remote sudah berhasil)
    const local = LocalAI.process(query);
    if (local) {
      console.log("🤖 Menggunakan Jawaban LocalAI");
      return local;
    }

    // 2. Jika LocalAI tidak tahu, lari ke Hugging Face
    try {
      console.log("🌐 Menghubungi Hugging Face via RemoteAI...");
      const remote = await RemoteAI.fetchResponse(query); // profile sudah ada di RemoteAI
      if (remote) return remote;
    } catch (e) {
      console.error("❌ RemoteAI Gagal:", e);
    }

    // 3. Fallback terakhir jika semua gagal
    return "Maaf, saya sedang kehilangan koneksi ke otak AI saya. Bisa coba tanya hal lain tentang Wisnu?";
  }
}