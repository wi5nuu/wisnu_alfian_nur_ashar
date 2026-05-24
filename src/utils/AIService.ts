import { LocalAI } from "./LocalAI";
import { RemoteAI } from "./RemoteAI";

/**
 * AIService v4.0 — Smart Fallback Chain + Fuzzy Intent Detection
 *
 * Flow: LocalAI (instant) → RemoteAPI (smart) → Smart Default (graceful)
 *
 * Upgrades:
 * - Fuzzy keyword matching with weighted scoring
 * - Semantic alias expansion
 * - Conversation topic tracking
 * - Automatic fallback to HuggingFace when LocalAI can't answer
 * - Multilingual query detection (en/id)
 */

interface ConversationEntry {
  intent: string;
  query: string;
  timestamp: number;
  source: 'local' | 'remote' | 'fallback';
}

export class AIService {
  private static conversationHistory: ConversationEntry[] = [];
  private static readonly MAX_HISTORY = 5;
  private static queryCount = 0;
  private static fallbackCount = 0;
  private static remoteCount = 0;
  private static currentTopic: string | null = null;
  private static detectedLang: 'en' | 'id' = 'en';

  /**
   * Detect language from query
   */
  private static detectLanguage(query: string): 'en' | 'id' {
    const idWords = ['apa', 'siapa', 'bagaimana', 'mengapa', 'kapan', 'dimana', 'tolong', 'bisa', 'saya', 'kamu', 'yang', 'dengan', 'untuk', 'tidak', 'iya', 'saja', 'sudah', 'belum', 'juga', 'atau', 'tapi', 'karena', 'jadi', 'nah', 'loh', 'kok', 'dong', 'kan', 'nya', 'sih', 'dah', 'gimana', 'gimana', 'kenapa', 'mau', 'gini', 'gitu'];
    const q = query.toLowerCase();
    const words = q.split(/\s+/);
    let idScore = 0;
    for (const w of words) {
      if (idWords.includes(w)) idScore++;
    }
    return idScore >= 2 ? 'id' : 'en';
  }

  /**
   * Fuzzy intent detection with weighted keyword scoring
   * Returns { intent, score } — higher score = more confident
   */
  private static detectIntentFuzzy(query: string): { intent: string; score: number } {
    const q = query.toLowerCase().trim();

    interface IntentPattern {
      intent: string;
      keywords: string[];
      weight: number;
    }

    const patterns: IntentPattern[] = [
      // Projects
      { intent: 'project', keywords: ['project', 'proyek', 'portfolio', 'portofolio', 'app', 'application', 'website', 'web', 'platform', 'build', 'buat', 'develop', 'colonyai', 'ashar', 'grosir', 'fkma', 'lexcorpus', 'puma', 'risk', 'firewall', 'cms', 'ecommerce', 'e-commerce', 'parfum', 'perfume', 'human'], weight: 3 },

      // Skills
      { intent: 'skill', keywords: ['skill', 'keahlian', 'ability', 'bisa', 'kemampuan', 'tech stack', 'teknologi', 'framework', 'library', 'language', 'bahasa', 'programming', 'coding', 'react', 'next', 'typescript', 'javascript', 'python', 'node', 'tailwind', 'css', 'html', 'database', 'sql', 'nosql', 'supabase', 'docker', 'aws', 'cloud', 'frontend', 'backend', 'fullstack', 'full-stack'], weight: 3 },

      // Education
      { intent: 'education', keywords: ['education', 'pendidikan', 'university', 'kampus', 'college', 'school', 'sekolah', 'degree', 'jurusan', 'major', 'gpa', 'study', 'kuliah', 'learned', 'belajar', 'president', 'as\'adiyah', 'sengkang', 'tarakan'], weight: 3 },

      // Experience
      { intent: 'experience', keywords: ['experience', 'pengalaman', 'work', 'kerja', 'career', 'karir', 'job', 'pekerjaan', 'intern', 'internship', 'magang', 'company', 'perusahaan', 'syntecxhub', 'pufa', 'employment'], weight: 3 },

      // Certification
      { intent: 'certification', keywords: ['certification', 'sertifikasi', 'sertifikat', 'certificate', 'certified', 'course', 'kursus', 'training', 'pelatihan', 'exam', 'ujian', 'badge', 'credential'], weight: 3 },

      // Contact
      { intent: 'contact', keywords: ['contact', 'kontak', 'email', 'reach', 'hubungi', 'phone', 'telepon', 'whatsapp', 'linkedin', 'github', 'social', 'media', 'twitter', 'instagram', 'address', 'alamat', 'connecting', 'network'], weight: 2 },

      // Profile
      { intent: 'profile', keywords: ['who', 'siapa', 'profile', 'profil', 'about', 'tentang', 'introduce', 'nama', 'name', 'identity', 'identitas', 'yourself', 'sendiri', 'wisnu'], weight: 2 },

      // Personality
      { intent: 'personality', keywords: ['personality', 'kepribadian', 'karakter', 'sifat', 'attitude', 'gimana orangnya', 'what kind', 'describe', 'trait', 'values', 'value', 'prinsip'], weight: 2 },

      // Hobbies
      { intent: 'hobbies', keywords: ['hobby', 'hobi', 'fun', 'hiburan', 'game', 'gaming', 'play', 'main', 'anime', 'movie', 'film', 'music', 'musik', 'read', 'baca', 'sport', 'olahraga', 'free time', 'waktu luang', 'interest', 'minat'], weight: 2 },

      // Greetings
      { intent: 'greeting', keywords: ['hi', 'hello', 'hey', 'hai', 'halo', 'morning', 'afternoon', 'evening', 'night', 'pagi', 'siang', 'sore', 'malam', 'selamat', 'assalamualaikum', 'what\'s up', 'sup', 'yo', 'hola', 'howdy'], weight: 1 },

      // Thanks
      { intent: 'thanks', keywords: ['thank', 'thanks', 'makasih', 'terima kasih', 'thx', 'ty', 'appreciate', 'grateful', 'terima kasih banyak'], weight: 1 },

      // Small talk
      { intent: 'smalltalk', keywords: ['how are', 'kabar', 'whats up', 'how do you', 'kamu gimana', 'feeling', 'condition', 'capek', 'lelah', 'senang', 'sedih', 'happy', 'sad'], weight: 1 },

      // Organization
      { intent: 'organization', keywords: ['organization', 'organisasi', 'community', 'komunitas', 'club', 'club', 'volunteer', 'sukarela', 'event', 'acara', 'leadership', 'kepemimpinan', 'committee', 'panitia'], weight: 2 },

      // Security
      { intent: 'security', keywords: ['security', 'keamanan', 'cyber', 'hack', 'hacking', 'exploit', 'vulnerability', 'vuln', 'pentest', 'penetration', 'password', 'encrypt', 'firewall', 'xss', 'sql injection', 'csrf', 'ddos', 'owasp'], weight: 3 },

      // AI / ML
      { intent: 'ai', keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'neural', 'model', 'training', 'yolo', 'opencv', 'hugging', 'computer vision', 'nlp', 'llm', 'gpt', 'gemini'], weight: 3 },

      // Career goals
      { intent: 'career', keywords: ['career goal', 'tujuan karir', 'future', 'masa depan', 'want', 'ingin', 'aspire', 'cita', 'ambition', 'ambisi', 'dream', 'mimpi', 'plan', 'rencana', 'target'], weight: 2 },

      // Comparison / recommendation
      { intent: 'comparison', keywords: ['compare', 'banding', 'vs', 'versus', 'difference', 'beda', 'better', 'lebih baik', 'recommend', 'rekomendasi', 'suggest', 'saran', 'choose', 'pilih', 'which', 'mana'], weight: 2 },

      // Salary / rate
      { intent: 'salary', keywords: ['salary', 'gaji', 'rate', 'price', 'harga', 'fee', 'biaya', 'pay', 'bayar', 'budget', 'cost', 'charged', 'charge'], weight: 2 },

      // Overview / CV
      { intent: 'overview', keywords: ['semua', 'everything', 'semua tentang', 'tell me about', 'ceritakan', 'full', 'lengkap', 'cv', 'resume', 'summary', 'ringkasan', 'overview'], weight: 2 },
    ];

    let bestIntent = 'general';
    let bestScore = 0;

    for (const pattern of patterns) {
      let score = 0;
      for (const keyword of pattern.keywords) {
        if (q.includes(keyword)) {
          score += pattern.weight;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestIntent = pattern.intent;
      }
    }

    // Follow-up detection: if low confidence but we have a recent topic
    if (bestScore < 2 && this.currentTopic) {
      // Check if this might be a pronoun-based follow-up
      const followUpSignals = ['it', 'that', 'this', 'those', 'them', 'more', 'detail', 'jelasan', 'lanjut', 'also', 'too', 'juga', 'lagi'];
      for (const sig of followUpSignals) {
        if (q.includes(sig) || q.split(/\s+/).length <= 3) {
          return { intent: this.currentTopic, score: 2 };
        }
      }
    }

    return { intent: bestIntent, score: bestScore };
  }

  /**
   * Main entry: Smart fallback chain
   * 1. Try LocalAI with fuzzy intent (instant)
   * 2. If LocalAI returns fallback → try RemoteAI
   * 3. If RemoteAI fails → return smart default
   */
  static async getResponse(query: string): Promise<string> {
    this.queryCount++;
    const startTime = Date.now();
    const lang = this.detectLanguage(query);
    this.detectedLang = lang;

    // Step 1: Detect intent with fuzzy scoring
    const { intent, score } = this.detectIntentFuzzy(query);

    // Update topic tracker
    if (intent !== 'greeting' && intent !== 'thanks' && intent !== 'smalltalk') {
      this.currentTopic = intent;
    }

    // Step 2: Try LocalAI first
    const localResponse = LocalAI.process(query, this.currentTopic || intent);

    // Check if LocalAI gave a real answer or a fallback
    const isLocalFallback = !localResponse ||
      localResponse.includes("Maaf, saya belum memiliki informasi") ||
      localResponse.includes("I'm sorry, I don't have specific information") ||
      localResponse.includes("Saya belum menemukan informasi spesifik") ||
      localResponse.includes("I couldn't find specific information");

    if (!isLocalFallback) {
      this.logQuery(query, intent, 'local', startTime);
      this.addToHistory(query, intent, 'local');
      return localResponse;
    }

    // Step 3: Fallback → try RemoteAI (HuggingFace)
    this.remoteCount++;
    try {
      const remoteResponse = await RemoteAI.fetchResponse(query);
      if (remoteResponse && remoteResponse.trim().length > 20) {
        this.logQuery(query, intent, 'remote', startTime);
        this.addToHistory(query, intent, 'remote');
        return remoteResponse;
      }
    } catch (e) {
      console.log("[AI] RemoteAI unavailable, using smart fallback");
    }

    // Step 4: Smart default fallback
    this.fallbackCount++;
    this.logQuery(query, intent, 'fallback', startTime);
    this.addToHistory(query, intent, 'fallback');

    if (lang === 'id') {
      return `Maaf, saya belum menemukan informasi spesifik tentang itu dalam database saya. 😔

Wisnu menghargai komunikasi langsung — untuk pertanyaan lebih detail, silakan hubungi Wisnu via email di **wisnualfian117@gmail.com**.

Beberapa hal yang bisa saya bantu:
📂 Proyek & portfolio
💻 Keahlian teknis
🎓 Pendidikan & sertifikasi
💼 Pengalaman kerja
🤝 Kontak & sosial media`;
    }
    return `Sorry, I couldn't find specific information about that in my database. 😔

Wisnu appreciates direct communication — for more detailed questions, please reach out via email at **wisnualfian117@gmail.com**.

Here's what I can help with:
📂 Projects & portfolio
💻 Technical skills
🎓 Education & certifications
💼 Work experience
🤝 Contact & social media`;
  }

  private static addToHistory(query: string, intent: string, source: 'local' | 'remote' | 'fallback') {
    this.conversationHistory.push({ intent, query, timestamp: Date.now(), source });
    if (this.conversationHistory.length > this.MAX_HISTORY) {
      this.conversationHistory.shift();
    }
  }

  private static logQuery(query: string, intent: string, source: 'local' | 'remote' | 'fallback', startTime: number) {
    const time = Date.now() - startTime;
    const icon = source === 'local' ? '📚' : source === 'remote' ? '🌐' : '💬';
    console.log(`[AI] ${icon} ${source.toUpperCase()} | intent=${intent} | ${time}ms | "${query.substring(0, 40)}..."`);
  }

  static getStats() {
    return {
      totalQueries: this.queryCount,
      remoteCount: this.remoteCount,
      fallbackCount: this.fallbackCount,
      fallbackRate: this.queryCount > 0 ? ((this.fallbackCount / this.queryCount) * 100).toFixed(1) + "%" : "0%",
      historyDepth: this.conversationHistory.length,
      currentTopic: this.currentTopic,
      history: this.conversationHistory.map(e => `${e.intent}(${e.source})`)
    };
  }
}
