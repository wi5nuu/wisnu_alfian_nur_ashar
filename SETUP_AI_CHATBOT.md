# Setup AI Chatbot

AI Chatbot di portfolio ini menggunakan **OpenRouter API** yang memberikan akses ke berbagai model AI.

## Model yang Digunakan
- **Llama 3.1 8B Instruct (Free)** - Model open-source dari Meta yang powerful
- Gratis untuk model dengan tag `:free`
- Akses ke 100+ model AI (GPT-4, Claude, Gemini, dll) dengan upgrade

## Cara Setup

### 1. Buat Akun OpenRouter
1. Kunjungi: https://openrouter.ai
2. Klik **"Sign In"** atau **"Get Started"**
3. Login dengan Google, GitHub, atau email

### 2. Dapatkan API Key
1. Login ke OpenRouter
2. Pergi ke: https://openrouter.ai/settings/keys
3. Klik **"Create Key"**
4. Beri nama key (misal: "Portfolio AI Chatbot")
5. Copy API key yang dimulai dengan `sk-or-v1-...`

### 3. (Opsional) Top Up Credits
- Model dengan tag `:free` tidak memerlukan credits
- Untuk model premium (GPT-4, Claude), top up di: https://openrouter.ai/credits

### 4. Setup Environment Variables

#### Untuk Development (Local)
1. Copy file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit file `.env` dan isi dengan API key Anda:
   ```env
   OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   OPENROUTER_MODEL=meta-llama/llama-3.1-8b-instruct:free
   OPENROUTER_REFERER=https://wisnualfian.vercel.app
   OPENROUTER_TITLE=Wisnu Portfolio AI
   ```

3. **JANGAN commit file `.env` ke git!** (sudah ada di `.gitignore`)

#### Untuk Production (Vercel)
1. Pergi ke Dashboard Vercel project Anda
2. Settings → Environment Variables
3. Tambahkan variabel berikut:
   - **OPENROUTER_API_KEY**: `sk-or-v1-...` (API key Anda)
   - **OPENROUTER_MODEL**: `meta-llama/llama-3.1-8b-instruct:free`
   - **OPENROUTER_REFERER**: `https://wisnualfian.vercel.app`
   - **OPENROUTER_TITLE**: `Wisnu Portfolio AI`
4. Klik **Save**
5. Redeploy project Anda

### 5. Test AI Chatbot
1. Jalankan development server:
   ```bash
   npm run dev
   ```

2. Buka browser di `http://localhost:4321`
3. Klik tombol AI Chat dan kirim pesan

## Troubleshooting

### Error: "AI service tidak tersedia"
- Pastikan `OPENROUTER_API_KEY` sudah diset di environment variables
- Cek apakah API key valid di https://openrouter.ai/settings/keys

### Error: "Insufficient credits"
- Model `:free` tidak memerlukan credits
- Jika menggunakan model premium, top up di https://openrouter.ai/credits

### Model tidak merespons dengan baik
- Pastikan data di `src/data/profile.ts` dan `src/data/profile_id.ts` sudah lengkap
- AI mengambil semua data dari file-file tersebut
- Coba ganti model di `OPENROUTER_MODEL` (lihat daftar model di OpenRouter)

## Pilihan Model

OpenRouter menyediakan banyak pilihan model:

### Model Gratis (Recommended)
- `meta-llama/llama-3.1-8b-instruct:free` - Default, bagus untuk conversation
- `google/gemma-2-9b-it:free` - Google Gemma 2
- `mistralai/mistral-7b-instruct:free` - Mistral 7B

### Model Premium (Perlu Credits)
- `anthropic/claude-3.5-sonnet` - Claude 3.5 Sonnet (paling bagus)
- `openai/gpt-4o` - GPT-4 Omni
- `google/gemini-pro-1.5` - Gemini Pro 1.5

Lihat daftar lengkap: https://openrouter.ai/models

## Fitur AI Chatbot

✅ **Data Otomatis dari Profile**
- Mengambil semua data dari `profile.ts` dan `profile_id.ts`
- Otomatis update jika Anda ubah data profile
- Mendukung bilingual (Indonesia & English)

✅ **Keamanan**
- Rate limiting (20 request/menit per IP)
- Input validation (max 500 karakter)
- No hardcoded API keys

✅ **Fleksibilitas Model**
- Gunakan model gratis atau premium
- Mudah ganti model via environment variable
- Akses ke 100+ model AI

## File yang Relevan
- `src/pages/api/chat.ts` - API endpoint untuk chatbot
- `src/components/AIChatBot.astro` - UI komponen chatbot
- `src/data/profile.ts` - Data profile (English)
- `src/data/profile_id.ts` - Data profile (Indonesia)

## Support
Jika ada masalah, silakan buka issue di GitHub repository.
