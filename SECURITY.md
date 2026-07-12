# 🔐 Security Policy

## Reporting Security Vulnerabilities

Jika Anda menemukan security vulnerability, **JANGAN** membuat public issue. Silakan email ke: [your-email@domain.com]

Berikan:
- Deskripsi vulnerability
- Langkah reproduksi
- Potential impact
- Suggested fix (jika ada)

Kami akan merespons dalam 48 jam.

---

## Security Best Practices

### Environment Variables
- ✅ `.env` files JANGAN di-commit ke git
- ✅ Semua secrets harus di Vercel Environment Variables
- ✅ Use `.env.example` sebagai template
- ✅ Minimum 32 karakter untuk ADMIN_TOKEN
- ✅ Rotate tokens secara berkala (quarterly)

### Dependencies
- ✅ Exact versions dalam package.json (no ^)
- ✅ Run `npm audit` sebelum deployment
- ✅ Update dependencies monthly
- ✅ Monitor untuk security advisories

### Headers & CSP
- ✅ Strict Content-Security-Policy aktif
- ✅ HSTS preload enabled
- ✅ CORS properly configured
- ✅ No mixed content allowed
- ✅ Frame ancestors: DENY

### API Endpoints
- ✅ Rate limiting implemented
- ✅ Input validation required
- ✅ No sensitive data in logs
- ✅ API responses sanitized
- ✅ Authentication check on admin endpoints

### Authentication
- ✅ ADMIN_TOKEN dalam environment variables
- ✅ Token validation on every request
- ✅ Never hardcode tokens
- ✅ Log security events
- ✅ Implement rate limiting per IP

### Image & Asset Security
- ✅ All images served from trusted origins
- ✅ WebP format reduces attack surface
- ✅ Cache headers properly set
- ✅ No executable files in public/
- ✅ SVGs sanitized

### OWASP Top 10 Mitigation

1. **Injection** - Parameterized queries, input validation
2. **Broken Authentication** - Token-based auth, secure storage
3. **Sensitive Data Exposure** - HTTPS only, encryption at rest
4. **XML External Entities** - No XML parsing
5. **Broken Access Control** - Role-based access control
6. **Security Misconfiguration** - Hardened headers, minimal deps
7. **XSS** - CSP headers, output encoding
8. **Insecure Deserialization** - No untrusted data parsing
9. **Using Components with Known Vulnerabilities** - Regular audits
10. **Insufficient Logging** - Security events logged

---

## Deployment Checklist

- [ ] `.env` tidak ter-commit
- [ ] `npm audit` clean
- [ ] Dependencies exact versions
- [ ] Security headers configured
- [ ] Rate limiting active
- [ ] HTTPS enforced
- [ ] HSTS preload enabled
- [ ] CSP headers tested
- [ ] No console logs with secrets
- [ ] Secrets di Vercel Environment Variables

---

## Ongoing Monitoring

- Monthly: `npm audit fix`
- Weekly: Check Vercel security alerts
- Quarterly: Rotate auth tokens
- Annual: Security audit/penetration testing

---

**Last Updated:** July 12, 2026
**Version:** 1.0
