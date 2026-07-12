# 🔑 Setup Vercel Environment Variables

## Quick Setup Guide

### Step 1: Generate Admin Token

Open terminal dan jalankan:

```bash
# Windows PowerShell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Random -InputObject (65..90+97..122+48..57 | ForEach-Object {[char]$_}) -Count 32 -SetSeed (Get-Date).Ticks | Join-String)))

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or use OpenSSL (if installed)
openssl rand -hex 32
```

Copy output ini - ini adalah ADMIN_TOKEN Anda.

### Step 2: Get Hugging Face Token

1. Buka https://huggingface.co/settings/tokens
2. Login dengan akun Anda
3. Create new token (atau gunakan yang existing)
4. Copy tokennya

### Step 3: Set Environment Variables di Vercel

1. Buka https://vercel.com/dashboard
2. Select project: `wisnu-portfolio`
3. Klik **Settings** (gear icon)
4. Klik **Environment Variables**
5. Tambah 2 variables:

#### Variable 1:
```
Name:  HF_TOKEN
Value: [paste token dari Hugging Face]
```

#### Variable 2:
```
Name:  ADMIN_TOKEN
Value: [paste hasil dari Step 1 - 32 character hex string]
```

6. Klik **Save**

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** pada latest deployment
3. Wait untuk deployment selesai

---

## Verify Setup

### Test API Endpoint

```bash
curl -X POST https://www.wisnualfiannurashar.my.id/api/chat/route \
  -H "Content-Type: application/json" \
  -d '{"query":"Hello","profileData":{}}'
```

### Check Headers

```bash
curl -i https://www.wisnualfiannurashar.my.id | grep -E "Strict-Transport|Content-Security|X-Frame"
```

---

## Security Notes

⚠️ **IMPORTANT:**

- ❌ Jangan commit `.env` file ke Git
- ❌ Jangan share ADMIN_TOKEN dengan siapapun
- ✅ Hanya set di Vercel Dashboard
- ✅ Rotate token quarterly
- ✅ Keep HF_TOKEN safe

---

## Troubleshooting

**API returns 503 error?**
- Verify HF_TOKEN is set correctly
- Check Hugging Face account has quota
- Test token on HuggingFace API directly

**ADMIN_TOKEN not working?**
- Check it's exactly 32+ characters
- Verify no spaces or special chars at start/end
- Redeploy after changing

**Environment variables not showing?**
- Refresh page (Ctrl+F5)
- Check you're in correct project
- Verify Settings tab permissions

---

## Rotating Tokens (Quarterly)

### Step 1: Generate New Token

```bash
# Generate new ADMIN_TOKEN
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 2: Update in Vercel

1. Settings → Environment Variables
2. Edit `ADMIN_TOKEN` 
3. Paste new token
4. Save

### Step 3: Redeploy

1. Deployments tab
2. Click Redeploy
3. Verify deployment successful

---

## Reference Files

For more details:
- `SECURITY.md` - Security policy
- `SECURITY_CHECKLIST.md` - Full checklist
- `DEPLOYMENT_SECURITY.md` - Detailed deployment guide
- `SECURITY_COMPLETE.md` - Security overview

---

**Last Updated:** July 12, 2026
