import { LocalAI } from "./LocalAI";

/**
 * AIService - Enhanced Conversational Orchestrator
 * Version 3.0 - Advanced Context Memory & Intent Detection
 * 
 * Features:
 * - Rich context objects with timestamps
 * - Query-based intent detection (before response)
 * - Response-based intent refinement (after response)
 * - Multi-turn conversation support (last 5 interactions)
 * - Structured analytics logging
 * - Smart follow-up detection
 */

interface ConversationEntry {
  intent: string;
  query: string;
  timestamp: number;
}

export class AIService {
  private static conversationHistory: ConversationEntry[] = [];
  private static readonly MAX_HISTORY = 5;
  private static queryCount = 0;
  private static fallbackCount = 0;

  /**
   * Detect intent from the query BEFORE processing
   * This helps LocalAI provide context-aware responses
   */
  private static detectQueryIntent(query: string): string {
    const q = query.toLowerCase();

    // Professional intents
    if (/proyek|project|portofolio|portfolio|karya|app|website|lexcorpus|ashar grosir|fkma/i.test(q)) return "project";
    if (/skill|keahlian|bisa apa|kemampuan|tech stack|teknologi|react|typescript|node/i.test(q)) return "skill";
    if (/pendidikan|education|kuliah|kampus|university|sekolah|jurusan/i.test(q)) return "education";
    if (/sertifikasi|certificate|certification|sertifikat|course/i.test(q)) return "certification";
    if (/pengalaman|experience|kerja|work|karir|career|pufa|puma|fkma/i.test(q)) return "experience";
    if (/kontak|contact|email|hubungi|linkedin|github|reach/i.test(q)) return "contact";
    if (/profil|siapa|about|wisnu|nama|who|identitas/i.test(q)) return "profile";
    if (/organisasi|organization|komunitas|aktif/i.test(q)) return "organization";

    // Social intents
    if (/hai|halo|hello|hi|hey|morning|selamat/i.test(q)) return "greeting";
    if (/kabar|how are|feeling|perasaan/i.test(q)) return "smalltalk";
    if (/suka|cinta|love|naksir|pacar|single|date/i.test(q)) return "flirty";
    if (/semangat|hebat|keren|amazing|proud|good luck/i.test(q)) return "compliment";

    // Advanced intents
    if (/hack|password|sql|xss|exploit|csrf|brute force|ddos/i.test(q)) return "security";
    if (/depresi|anxiety|stress|burnout|hopeless|mati|bunuh/i.test(q)) return "mental_health";
    if (/ceritakan semua|tell me everything|profil lengkap|complete/i.test(q)) return "overview";

    return "general";
  }

  /**
   * Detect intent from the AI response (post-processing refinement)
   */
  private static detectResponseIntent(response: string): string {
    const r = response.toLowerCase();
    if (r.includes("proyek") || r.includes("project") || r.includes("karya")) return "project";
    if (r.includes("skill") || r.includes("keahlian") || r.includes("teknologi") || r.includes("tech stack")) return "skill";
    if (r.includes("pendidikan") || r.includes("education") || r.includes("kuliah") || r.includes("sekolah")) return "education";
    if (r.includes("profil") || r.includes("siapa") || r.includes("about") || r.includes("asisten ai")) return "profile";
    if (r.includes("kontak") || r.includes("email") || r.includes("hubungi") || r.includes("reach out")) return "contact";
    if (r.includes("sertifikasi") || r.includes("certification") || r.includes("certificate")) return "certification";
    if (r.includes("pengalaman") || r.includes("experience") || r.includes("role")) return "experience";
    if (r.includes("organisasi") || r.includes("organization")) return "organization";
    return "";
  }

  /**
   * Get the best available intent context for follow-up questions
   */
  private static getLastRelevantIntent(): string | undefined {
    if (this.conversationHistory.length === 0) return undefined;

    // Look through recent history for the most relevant professional intent
    for (let i = this.conversationHistory.length - 1; i >= 0; i--) {
      const entry = this.conversationHistory[i];
      const age = Date.now() - entry.timestamp;

      // Only consider intents from last 5 minutes
      if (age > 300000) break;

      // Professional intents are most useful for context
      if (["project", "skill", "education", "contact", "profile", "experience", "certification", "organization"].includes(entry.intent)) {
        return entry.intent;
      }
    }

    return this.conversationHistory[this.conversationHistory.length - 1]?.intent;
  }

  static async getResponse(query: string): Promise<string> {
    this.queryCount++;
    const startTime = Date.now();

    // 1. Pre-detect intent from query
    const queryIntent = this.detectQueryIntent(query);

    // 2. Get last relevant intent for context
    const lastIntent = this.getLastRelevantIntent();

    // 3. Process with LocalAI
    const response = LocalAI.process(query, lastIntent);

    // 4. Post-detect intent from response (refine)
    let finalIntent = queryIntent;
    if (response) {
      const responseIntent = this.detectResponseIntent(response);
      if (responseIntent) finalIntent = responseIntent; // Response-based is more accurate
    }

    // 5. Store in conversation history
    if (finalIntent && finalIntent !== "general") {
      this.conversationHistory.push({
        intent: finalIntent,
        query: query,
        timestamp: Date.now()
      });

      // Trim history to max size
      while (this.conversationHistory.length > this.MAX_HISTORY) {
        this.conversationHistory.shift();
      }
    }

    // 6. Analytics logging
    const responseTime = Date.now() - startTime;
    const isFallback = response?.includes("Maaf, saya belum memiliki informasi") ||
      response?.includes("I'm sorry, I don't have specific information") ||
      response?.includes("Saya belum menemukan informasi spesifik") ||
      response?.includes("I couldn't find specific information");

    if (isFallback) {
      this.fallbackCount++;
      console.log(`[AI-LOG] ❓ Unknown Query: "${query}" | Context: ${lastIntent || "none"} | Time: ${responseTime}ms | Fallback Rate: ${((this.fallbackCount / this.queryCount) * 100).toFixed(1)}%`);
    } else {
      console.log(`[AI-LOG] ✅ Handled: "${query}" | Intent: ${finalIntent} | Context: ${lastIntent || "none"} | Time: ${responseTime}ms`);
    }

    return response || "Maaf, saya sedang kehilangan koneksi ke otak AI saya. Bisa coba tanya hal lain tentang Wisnu?";
  }

  /**
   * Get analytics data (for debugging/monitoring)
   */
  static getStats() {
    return {
      totalQueries: this.queryCount,
      fallbackCount: this.fallbackCount,
      fallbackRate: this.queryCount > 0 ? ((this.fallbackCount / this.queryCount) * 100).toFixed(1) + "%" : "0%",
      historyDepth: this.conversationHistory.length,
      lastIntents: this.conversationHistory.map(e => e.intent)
    };
  }
}