# 🎯 Deployment Checklist - Lighthouse 100/100

Complete this checklist to achieve 100/100 Lighthouse scores across all categories.

---

## Phase 1: Local Testing ✅

### Setup
- [ ] Clone latest code
- [ ] Run `npm install`
- [ ] Verify all files compile: `npm run build`

### Code Quality
- [ ] No console errors: `npm run preview` → DevTools Console is clean
- [ ] No ESLint warnings
- [ ] TypeScript compiles without errors
- [ ] All Astro components render correctly

**Verification Command:**
```bash
npm run build 2>&1 | grep -i error
# Should output: 0 errors
```

---

## Phase 2: Image Optimization (CRITICAL) ⚠️

### Generate WebP Images
```bash
npm install  # Installs sharp dependency
npm run optimize-images
```

### Verify Conversions
- [ ] `public/wisnu_alfian_nur_ashar.webp` exists
- [ ] `public/logo.webp` exists
- [ ] `public/projects/*.webp` files exist (3-5 files)
- [ ] All WebP files < 50% original size

**Verification Script:**
```bash
ls -lh public/*.webp public/projects/*.webp
# Example output:
# -rw-r--r--  18K wisnu_alfian_nur_ashar.webp
# -rw-r--r--   8K logo.webp
# -rw-r--r-- 200K hargakita.webp
```

### Update Image References (Optional)
While not required, recommended for best performance:
- [ ] Update `src/components/sections/About.astro` to use `<picture>` tags
- [ ] Update `src/components/sections/Projects.astro` to use `<picture>` tags
- [ ] Test image loading in browser

---

## Phase 3: Build Verification

### Production Build
```bash
npm run build
```

Check output for:
- [ ] Build completes successfully (no errors)
- [ ] `dist/` directory created
- [ ] All static assets in `dist/_astro/`
- [ ] CSS file < 50KB
- [ ] JS bundles optimized

**Expected Output Pattern:**
```
dist/
├── _astro/
│   ├── [hash].css (~35-45KB)
│   ├── pages/[hash].js
│   └── ...
├── projects/
├── id/
├── index.html
└── ...
```

### Local Preview
```bash
npm run preview
# Open http://localhost:4321 in browser
```

Verify:
- [ ] Page loads in < 2 seconds
- [ ] All images visible
- [ ] Dark mode works
- [ ] Language toggle works (ID/EN)
- [ ] Mobile responsive
- [ ] No JavaScript errors in DevTools Console

---

## Phase 4: Lighthouse Audit (Local)

### Chrome DevTools Audit
1. Open `http://localhost:4321` in Chrome
2. Press `F12` → Lighthouse tab
3. Configure:
   - Device: `Mobile` (test mobile first)
   - Network: `Slow 4G` (real-world conditions)
   - Storage: `Simulate cache storage`
4. Click "Analyze page load"
5. Wait for results (~60-90 seconds)

### Expected Scores
- [ ] **Performance: ≥ 95** (target: 98+)
- [ ] **Accessibility: ≥ 95** (target: 98+)
- [ ] **Best Practices: ≥ 95** (target: 100)
- [ ] **SEO: ≥ 95** (target: 100)

### Core Web Vitals Check
```
✓ LCP ≤ 2.5s (Largest Contentful Paint)
✓ FCP ≤ 1.8s (First Contentful Paint)
✓ CLS ≤ 0.1 (Cumulative Layout Shift)
✓ TBT ≤ 150ms (Total Blocking Time)
```

### Performance Metrics Detail
Check each metric:
- [ ] LCP Image: `/wisnu_alfian_nur_ashar.webp` (or .jpeg if WebP not used)
- [ ] Main Thread Work: < 3.5s total
- [ ] JavaScript execution: < 1s
- [ ] Layout shifts: Minimal (our CLS is already 0.005)

### Audit Warnings to Fix
- [ ] ✅ "Largest Contentful Paint Image" - Should be ~20KB after WebP
- [ ] ✅ "Reduce unused CSS" - Should be < 5% after build
- [ ] ✅ "Minify JavaScript" - Should show savings < 100KB
- [ ] ✅ "Use modern image formats" - WebP generated
- [ ] ✅ "Enable text compression" - Vercel handles this
- [ ] ✅ "Serve images with correct aspect ratio" - Width/height added

### Security Audit
- [ ] ✅ "Ensure CSP is effective against XSS" - PASS (headers added)
- [ ] ✅ "Use strong HSTS policy" - PASS (31536000s max-age)
- [ ] ✅ "Mitigate clickjacking with COOP" - PASS (same-origin)
- [ ] ✅ "No issues in DevTools Issues panel" - PASS

---

## Phase 5: Multi-Device Testing

### Desktop Testing
```bash
# In Chrome DevTools Lighthouse:
Device: Desktop
Network: Fast 3G (or No throttling)
```
- [ ] Performance ≥ 95
- [ ] All metrics green

### Mobile Testing (Important!)
```bash
# In Chrome DevTools Lighthouse:
Device: Mobile (Moto G Power)
Network: Slow 4G
Storage: Simulate cache storage
```
- [ ] Performance ≥ 95
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s
- [ ] CLS < 0.1

### Tablet Testing (Optional)
- [ ] Responsive design works
- [ ] Images scale correctly
- [ ] No layout issues

---

## Phase 6: SEO Validation

### Meta Tags
- [ ] `<title>` tag present and descriptive
- [ ] `<meta name="description">` set
- [ ] `<meta property="og:*">` tags complete
- [ ] `<meta name="twitter:*">` tags set
- [ ] `<link rel="canonical">` correct

### Structured Data
```bash
# Test with Google Rich Results Test
https://search.google.com/test/rich-results
```
- [ ] Organization schema valid
- [ ] Person schema valid
- [ ] WebSite schema valid

### Robots & Crawling
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `llms.txt` accessible at `/llms.txt` (NEW)
- [ ] No disallow for important pages
- [ ] Hreflang tags for translations

---

## Phase 7: Security Verification

### Headers Check
```bash
curl -I https://www.wisnualfiannurashar.my.id
```

Verify these headers present:
- [ ] `Strict-Transport-Security: max-age=31536000`
- [ ] `Content-Security-Policy: ...`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Cross-Origin-Opener-Policy: same-origin`
- [ ] `Cross-Origin-Embedder-Policy: require-corp`

### HTTPS
- [ ] All HTTP redirects to HTTPS
- [ ] Certificate valid
- [ ] No mixed content warnings

---

## Phase 8: Pre-Deployment Final Checks

### File Size Audit
```bash
du -sh dist/
du -sh dist/_astro/
ls -lh dist/_astro/ | sort -k5 -hr
```

Expected sizes:
- [ ] Total dist: < 5MB
- [ ] Largest JS file: < 500KB
- [ ] CSS files: < 50KB total
- [ ] Images: < 1.5MB total

### Performance Budget
- [ ] JavaScript: < 500KB total
- [ ] CSS: < 50KB total
- [ ] Images: < 2MB total
- [ ] HTML pages: < 100KB each

### Cache Strategy Verification
```bash
curl -I https://www.wisnualfiannurashar.my.id/_astro/pages/index-XXXX.js
# Should show: Cache-Control: public, max-age=31536000, immutable
```
- [ ] Versioned assets have 1-year cache
- [ ] HTML has no-cache
- [ ] Fonts have long cache

---

## Phase 9: Deployment

### Git Commit
```bash
git add .
git commit -m "perf: optimize for 100/100 lighthouse

- Optimize images to WebP format
- Minify JavaScript and CSS
- Remove unnecessary animations
- Add security headers (CSP, HSTS, COOP)
- Improve accessibility contrast
- Add LCP preload hints
- Add llms.txt for AI agents
- Configure optimal caching strategy"
```

### Push to Production
```bash
git push origin main
# Vercel auto-deploys
```

### Verify Deployment
- [ ] Vercel build succeeds
- [ ] No build errors in Vercel logs
- [ ] Site live at https://www.wisnualfiannurashar.my.id
- [ ] Home page loads in < 2s

---

## Phase 10: Production Lighthouse Audit

### Production Audit
Run Lighthouse on production site:
```
https://www.wisnualfiannurashar.my.id
```

### Expected Scores (Production)
- [ ] **Performance: 95-100** ✨
- [ ] **Accessibility: 95-100** ✨
- [ ] **Best Practices: 95-100** ✨
- [ ] **SEO: 95-100** ✨

### Real-World Metrics Check
Using [PageSpeed Insights](https://pagespeed.web.dev):
- [ ] LCP: Good (< 2.5s)
- [ ] FID: Good (< 100ms)  
- [ ] CLS: Good (< 0.1)

### Mobile vs Desktop
- [ ] Mobile Performance: ≥ 90
- [ ] Desktop Performance: ≥ 95

---

## Phase 11: Post-Deployment Verification

### 24-Hour Check
- [ ] All pages accessible
- [ ] Images loading from CDN
- [ ] No server errors in logs
- [ ] Cache working (second page view < 500ms)

### Weekly Check
- [ ] Monitor Core Web Vitals
- [ ] Check error rates
- [ ] Verify performance remains stable

---

## Troubleshooting Guide

### If Lighthouse Score < 95

#### Performance Issues
**LCP too high (> 2.5s)**
- Ensure WebP images generated with `npm run optimize-images`
- Check image file sizes: `ls -lh public/*.webp`
- Verify preload link in `src/layouts/Layout.astro`
- Check network throttling in Lighthouse settings

**TBT too high (> 150ms)**
- Verify JavaScript minification in build output
- Check no console.logs in production
- Ensure animations are optimized

**CLS > 0.1**
- Verify all images have width/height attributes
- Check no dynamic content injections
- Ensure fonts load with correct fallbacks

#### Security Headers Missing
**HSTS/CSP/COOP not present**
- Verify `vercel.json` changes are committed
- Rebuild and redeploy
- Check Vercel deployment logs
- Clear browser cache

#### SEO/Accessibility Issues
**Lighthouse reports contrast issues**
- Update text colors in `src/styles/global.css`
- Use higher opacity values for text
- Test with WCAG contrast checker
- Rebuild and test

**Missing meta tags**
- Verify `src/layouts/Layout.astro` has all meta tags
- Check language attribute on html element
- Verify canonical URL correct

### If Build Fails

```bash
# Clear cache and rebuild
rm -rf dist/ node_modules/.vite
npm run build

# Check for TypeScript errors
npm run astro check

# If still fails, check individual components
npm run build -- --verbose
```

---

## ✅ Final Sign-Off

Before declaring complete success:

- [ ] All Lighthouse scores ≥ 95 (target: all 100)
- [ ] Lighthouse audit passes on both desktop & mobile
- [ ] Core Web Vitals all "Good"
- [ ] Security headers verified
- [ ] Performance metrics within budget
- [ ] Site responsive on all devices
- [ ] No console errors or warnings
- [ ] All external links work
- [ ] Forms/interactions work correctly
- [ ] Accessibility features work (keyboard navigation, screen readers)

---

## 📊 Success Metrics

| Metric | Before | Target | Status |
|--------|--------|--------|--------|
| Lighthouse Performance | 53 | 100 | ⏳ |
| Lighthouse Accessibility | 95 | 100 | ⏳ |
| Lighthouse Best Practices | 92 | 100 | ⏳ |
| Lighthouse SEO | 2 | 100 | ⏳ |
| **Overall Score** | **60** | **100** | ⏳ |

---

## 📞 Questions or Issues?

1. **Check documentation:**
   - `OPTIMIZATION_SUMMARY.md` - Overview of changes
   - `PERFORMANCE_IMPROVEMENTS.md` - Detailed optimization guide

2. **Check build logs:**
   ```bash
   npm run build 2>&1 | tee build.log
   # Review build.log for errors
   ```

3. **Run local preview:**
   ```bash
   npm run preview
   # Test thoroughly before pushing
   ```

4. **Review Lighthouse results:**
   - Note any failing audits
   - Cross-reference with PERFORMANCE_IMPROVEMENTS.md
   - Apply corresponding fixes

---

**Target Completion Date:** After image optimization (usually 1-2 hours)
**Expected Lighthouse Score:** 100/100 across all categories ✨

Good luck! 🚀
