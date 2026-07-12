# 🔐 Deployment Security Checklist

## Pre-Deployment Security Audit

### Environment Variables Setup

**Vercel Environment Variables** (set di Vercel Dashboard):
```
HF_TOKEN              = [your hugging face token]
ADMIN_TOKEN           = [generate with: openssl rand -hex 32]
```

**Never commit** `.env` file! Hanya commit `.env.example`

---

## Security Checklist

### Code Security
- [ ] No hardcoded secrets atau API keys
- [ ] API endpoints memiliki input validation
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] Error messages tidak expose sensitive info
- [ ] No console logs dengan secrets
- [ ] SQL/NoSQL injection protected (parameterized queries)
- [ ] XSS protection via CSP headers

### Dependencies
- [ ] `npm audit` returns no vulnerabilities
- [ ] All dependencies use exact versions (no ^)
- [ ] No unused dependencies
- [ ] All dependencies actively maintained

### Configuration
- [ ] `vercel.json` security headers complete
- [ ] HTTPS enforced
- [ ] HSTS preload enabled
- [ ] CSP headers tested
- [ ] CORS headers configured

### API Endpoints
- [ ] Request size limits enforced
- [ ] Content-Type validation
- [ ] Input sanitization active
- [ ] Rate limiting per IP
- [ ] Timeout configured (30s)
- [ ] Error handling secure
- [ ] Authentication check (if needed)

### Assets & Static Files
- [ ] No executable files in public/
- [ ] Images served with proper headers
- [ ] Cache headers immutable for versioned assets
- [ ] No sensitive data in static files

### Secrets Management
- [ ] .env in .gitignore
- [ ] All secrets in environment variables
- [ ] No token rotation needed yet (first deployment)
- [ ] Backup of secrets stored securely
- [ ] Admin token minimum 32 characters

### Monitoring & Logging
- [ ] Vercel logging configured
- [ ] Error tracking setup (optional)
- [ ] Security events can be monitored
- [ ] Rate limit violations logged

### Infrastructure
- [ ] Vercel security headers enabled
- [ ] DDoS protection active (Vercel default)
- [ ] Database access credentials secured (if used)
- [ ] API keys stored in environment variables
- [ ] No public database URLs

---

## Deployment Steps

### 1. Final Code Review
```bash
# Check for security issues
npm audit
npm audit --production

# Run build to catch errors
npm run build

# Check for console logs with secrets
grep -r "console\." src/ | grep -v node_modules
grep -r "HF_TOKEN\|ADMIN_TOKEN" src/ | grep -v "import.meta.env"
```

### 2. Environment Variables Setup
```bash
# On Vercel Dashboard:
# 1. Settings → Environment Variables
# 2. Add HF_TOKEN with value
# 3. Add ADMIN_TOKEN with value (32+ chars)
# 4. No public variables needed
```

### 3. Git Commit
```bash
git add .
git commit -m "security: hardened deployment configuration

- Added input validation to API endpoints
- Implemented rate limiting
- Enhanced CSP headers
- Added security utilities
- Secrets removed from .env
- Exact versions in package.json
- Enhanced error handling"
```

### 4. Push to Deploy
```bash
git push origin main
# Vercel auto-deploys
```

### 5. Post-Deployment Verification

**Check Security Headers:**
```bash
curl -i https://www.wisnualfiannurashar.my.id

# Verify these headers present:
# Strict-Transport-Security
# Content-Security-Policy
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# Referrer-Policy
```

**Test API Endpoint:**
```bash
curl -X POST https://www.wisnualfiannurashar.my.id/api/chat/route \
  -H "Content-Type: application/json" \
  -d '{"query":"test","profileData":{}}'
```

**Check HTTPS:**
```bash
# Should redirect to HTTPS
curl -i https://www.wisnualfiannurashar.my.id
```

---

## Security Maintenance Schedule

### Weekly
- Monitor Vercel security alerts
- Check application logs for errors

### Monthly
- `npm audit` and update if needed
- Review rate limit logs
- Check for unusual API usage

### Quarterly
- Rotate ADMIN_TOKEN
- Security audit of code
- Update all dependencies

### Annually
- Full security audit
- Penetration testing (optional)
- Review and update SECURITY.md

---

## Emergency Response

**If credentials compromised:**
1. Immediately revoke token in Vercel
2. Generate new token
3. Update in environment variables
4. Verify no unauthorized access in logs

**If attack detected:**
1. Check Vercel analytics
2. Review logs for suspicious patterns
3. Update rate limits if needed
4. Contact Vercel support if needed

---

## Security Contacts

- **Vercel Support:** support@vercel.com
- **Security Report:** [your-email@domain.com]
- **Emergency:** [emergency contact]

---

**Last Updated:** July 12, 2026
**Next Review:** October 12, 2026
