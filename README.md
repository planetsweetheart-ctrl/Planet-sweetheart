# Planet Sweetheart - Deployment Guide 🚀

## 🎯 QUICK DEPLOYMENT STEPS. 

### Step 1: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Upload the `static-deploy` folder contents:
   - `index.html`
   - `vercel.json`
4. Click "Deploy"
5. Your app will be live at: `your-project-name.vercel.app`

### Step 2: Add Custom Domains in Vercel
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add both domains:
   - `planetsweetheart.com`
   - `internetsweetheart.com`
3. Vercel will provide DNS instructions for each domain

## 🌐 DNS SETUP FOR NAMECHEAP

### For planetsweetheart.com:
1. Login to Namecheap
2. Go to Domain List → planetsweetheart.com → Manage
3. Advanced DNS → Add these records:

**Root Domain (@):**
- Type: `CNAME`
- Host: `@` 
- Value: `cname.vercel-dns.com.`
- TTL: `Automatic`

**WWW Subdomain:**
- Type: `CNAME`
- Host: `www`
- Value: `cname.vercel-dns.com.`
- TTL: `Automatic`

### For internetsweetheart.com:
**Same DNS setup as above - both domains will point to the same app**

## ⚡ ALTERNATIVE: Direct GitHub Deployment

If you prefer GitHub:
1. Create a new GitHub repository
2. Upload these files:
   - `index.html`
   - `vercel.json`
3. Connect the repo to Vercel
4. Auto-deploy on every push

## 🔧 DNS Records Summary

**What Vercel provides you:**
- CNAME target: `cname.vercel-dns.com.`
- Or A records (if they provide IP addresses instead)

**What you add in Namecheap:**
- @ → CNAME → `cname.vercel-dns.com.`
- www → CNAME → `cname.vercel-dns.com.`

## 📱 Features Included

✅ Responsive design (mobile + desktop)
✅ All social media links working
✅ Press coverage section with screenshots
✅ Ban counter with authentic styling  
✅ SEO optimized with meta tags
✅ Fast loading static HTML/CSS
✅ Professional Planet Sweetheart branding

## 🚀 LIVE IN 10 MINUTES!

1. **Upload to Vercel** (2 minutes)
2. **Add domains in Vercel** (2 minutes)  
3. **Update DNS in Namecheap** (5 minutes)
4. **Propagation time** (0-24 hours, usually instant)

Your Planet Sweetheart digital revolution will be LIVE! 🔥
