# Bravinci Website - Deployment Guide

## 🚀 Quick Start Deployment

Choose your preferred hosting platform and follow the instructions below.

---

## 📦 Vercel (Recommended)

Vercel is the official Next.js hosting platform and is recommended for best performance.

### Prerequisites
- GitHub account with repository access
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Bravinci website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live URL

5. **Custom Domain** (Optional)
   - In Vercel Project Settings
   - Go to "Domains"
   - Add your custom domain
   - Follow DNS configuration

---

## 🔧 Environment Variables

For Vercel, add these in Project Settings > Environment Variables:

```
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Email (Update in cta-section.tsx)
CONTACT_EMAIL=contact@bravinci.com

# API Endpoints (if using any)
NEXT_PUBLIC_API_URL=https://api.bravinci.com
```

---

## 💻 Other Platforms

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify auto-deploys on push to main branch

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "Create app"
   - Choose GitHub provider
   - Select repository

2. **Build Settings**
   - Amplify auto-detects Next.js
   - Configure environment variables if needed

3. **Deploy**
   - Click "Save and deploy"

### Self-Hosted (Node.js)

1. **Build Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Start Server**
   ```bash
   npm run start
   ```

3. **Reverse Proxy** (nginx example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔐 Pre-Deployment Checklist

- [ ] All text content is updated
- [ ] Company logo and images are added
- [ ] Contact information is current
- [ ] Links point to correct pages
- [ ] Social media links are added
- [ ] Analytics is configured (if using)
- [ ] SEO meta tags are updated
- [ ] Mobile responsiveness is tested
- [ ] All buttons work correctly
- [ ] Forms are functional
- [ ] Images are optimized
- [ ] No console errors in browser dev tools

---

## 📊 Performance Optimization

### Before Deployment

1. **Check Lighthouse Score**
   ```bash
   npm run build
   npm run start
   # Open Chrome DevTools > Lighthouse
   ```

2. **Optimize Images**
   - Ensure images are under 100KB
   - Use WebP format for better compression
   - Lazy load non-critical images

3. **Minimize Bundles**
   - Check bundle size: `npm run build`
   - Remove unused dependencies
   - Use code splitting

### Recommended Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔍 Testing Before Deployment

### Local Testing
```bash
# Development mode
npm run dev

# Production build locally
npm run build
npm run start
```

### Checklist
1. Test on mobile device
2. Test on tablet
3. Test on desktop
4. Test all navigation links
5. Test all buttons and forms
6. Check all images load
7. Verify no console errors
8. Test keyboard navigation
9. Test screen reader compatibility
10. Check page load speed

---

## 📱 Mobile Testing

### Using Chrome DevTools
1. Open DevTools (F12)
2. Click device toggle toolbar (Ctrl+Shift+M)
3. Test at various viewport sizes:
   - Mobile: 320px, 375px, 425px
   - Tablet: 768px, 1024px
   - Desktop: 1200px+

### Real Device Testing
- Test on actual mobile phone
- Test on actual tablet
- Use Chrome Remote Debugging
- Check touch interactions

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Performance Issues
- Check Lighthouse report
- Optimize images
- Remove unused dependencies
- Enable image optimization

### Deployment Issues
- Check build logs in Vercel/platform
- Verify environment variables
- Check Node.js version compatibility
- Review error messages carefully

---

## 📈 Post-Deployment

### Monitor Performance
- Set up Google Analytics
- Monitor page speed
- Track user engagement
- Set up error tracking (Sentry)

### Keep Site Updated
- Regular content updates
- Monitor for broken links
- Update security headers
- Keep dependencies updated

### SEO & Marketing
- Submit sitemap.xml to Google Search Console
- Add robots.txt configuration
- Set up email notifications for errors
- Configure analytics goals

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Every Deploy Checklist
- [ ] Tests pass
- [ ] No console errors
- [ ] All links work
- [ ] Images load correctly
- [ ] Forms are functional
- [ ] Analytics tracking works
- [ ] Performance is acceptable

---

## 💡 Tips for Success

1. **Use a CDN** - Serve images and static content from CDN
2. **Enable Caching** - Set appropriate cache headers
3. **Monitor Uptime** - Use uptime monitoring service
4. **Set up Alerts** - Get notified of issues
5. **Regular Backups** - Back up content and database if applicable
6. **Keep Updated** - Update Next.js and dependencies regularly
7. **Test Thoroughly** - Test before each deployment
8. **Use Version Control** - Track all changes in Git

---

## 🆘 Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Documentation](https://react.dev)

---

**Good luck with your Bravinci website deployment! 🎉**
