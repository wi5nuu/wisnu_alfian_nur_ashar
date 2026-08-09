# Setup AI Chatbot (Gratis!)

AI Chatbot di portfolio ini menggunakan **Hugging Face Inference API** yang 100% GRATIS!

## Model yang Digunakan
- **Qwen/Qwen2.5-72B-Instruct** - Model open-source terbaru yang powerful untuk conversation
- Gratis tanpa batas (rate limit dari Hugging Face berlaku)
- Performa setara dengan model komersial

## Cara Setup

### 1. Buat Akun Hugging Face (Gratis)
1. Kunjungi: https://huggingface.co/join
2. Daftar dengan email atau GitHub
3. Verifikasi email Anda

### 2. Dapatkan API Key (Gratis)
1. Login ke Hugging Face
2. Pergi ke: https://huggingface.co/settings/tokens
3. Klik **"New token"**
4. Beri nama token (misal: "Portfolio AI Chatbot")
5. Pilih **"Read"** access (cukup untuk inference)
6. Klik **"Generate token"**
7. Copy token yang dimulai dengan `hf_...`

### 3. Setup Environment Variables

#### Untuk Development (Local)
1. Copy file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit file `.env` dan isi dengan API key Anda:
   ```env
   HF_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ADMIN_TOKEN=your_secure_admin_token_here
   ```

3. **JANGAN commit file `.env` ke git!** (sudah ada di `.gitignore`)

#### Untuk Production (Vercel)
1. Pergi ke Dashboard Vercel project Anda
2. Settings → Environment Variables
3. Tambahkan variabel baru:
   - **Name**: `HF_API_KEY`
   - **Value**: `hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (API key Anda)
   - Environment: Production, Preview, Development (pilih semua)
4. Klik **Save**
5. Redeploy project Anda

### 4. Test AI Chatbot
1. Jalankan development server:
   ```bash
   npm run dev
   ```

2. Buka browser dan chat dengan AI di portfolio Anda
3. Jika pertama kali, model mungkin perlu 20-30 detik untuk "warm up"

## Troubleshooting

### Error: "AI service tidak tersedia"
- Pastikan `HF_API_KEY` sudah diset di environment variables
- Cek apakah API key benar dan valid

### Error: "AI sedang warming up"
- Ini normal untuk model gratis di Hugging Face
- Tunggu 20-30 detik dan coba lagi
- Setelah warm up, response akan cepat

### Model tidak merespons dengan baik
- Pastikan data di `src/data/profile.ts` dan `src/data/profile_id.ts` sudah lengkap
- AI mengambil semua data dari file-file tersebut

## Fitur AI Chatbot

✅ **Data Otomatis dari Profile**
- Mengambil semua data dari `profile.ts` dan `profile_id.ts`
- Otomatis update jika Anda ubah data profile
- Mendukung bilingual (Indonesia & English)

✅ **Keamanan**
- Rate limiting (20 request/menit per IP)
- Input validation (max 500 karakter)
- No hardcoded API keys

✅ **Gratis Selamanya**
- Menggunakan Hugging Face Inference API
- Tidak ada biaya bulanan
- Tidak perlu kartu kredit

## File yang Relevan
- `src/pages/api/chat.ts` - API endpoint untuk chatbot
- `src/components/AIChatBot.astro` - UI komponen chatbot
- `src/data/profile.ts` - Data profile (English)
- `src/data/profile_id.ts` - Data profile (Indonesia)

## Support
Jika ada masalah, silakan buka issue di GitHub repository.
