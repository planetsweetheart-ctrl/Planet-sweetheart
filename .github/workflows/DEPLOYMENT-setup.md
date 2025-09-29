# 🚀 Planet Sweetheart - Netlify Auto-Deployment Guide

This document walks you through deploying the Planet Sweetheart app automatically via GitHub Actions and Netlify.

---

## ✅ Files to Include in Repo Root

Make sure these files are committed to your GitHub repo:

- `netlify.toml`
- `.github/workflows/deploy-netlify.yml`
- `DEPLOYMENT-SETUP.md` (this file)
- `verify-deployment.js` (optional post-deploy validation)

---

## 🔐 GitHub Secrets Configuration

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** twice to add:
   - `NETLIFY_AUTH_TOKEN`: Get from [Netlify User Settings](https://app.netlify.com/user/applications#personal-access-tokens)
   - `NETLIFY_SITE_ID`: Your site’s unique Netlify ID (e.g., `superlative-fudge-ad7f51`)

---

## 🌐 Netlify Setup Steps

1. Log into [Netlify](https://app.netlify.com/)
2. Go to your site → **Site settings**
3. Click **Domain management** → **Add custom domain**
4. Add `planetsweetheart.com`
5. Update DNS records as instructed by Netlify

---

## 📦 Build Instructions (Already Configured)

GitHub Actions will:

- Install dependencies
- Run your build script (assumes `npm run build` creates `/dist`)
- Deploy the contents of `/dist` to Netlify

---

## ✅ Optional Post-Deploy Check

Use `verify-deployment.js` to confirm your site deployed properly (details in that file).

---

## 🤝 Need Help?

Ping [@planetsweetheart-ctrl](https://github.com/planetsweetheart-ctrl) or refer to this doc if anything breaks. This setup is 100% portable.

---

📦 Brought to you by VibeCode AI 💫  
