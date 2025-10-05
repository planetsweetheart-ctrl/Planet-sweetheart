# Planet Sweetheart App 🌎💋

**Created by Ethan Scarcelli / Divine Mission Business Conglomerate LLC**

A satirical digital media experience built with Vibecode (React Native + Node.js), designed as a cinematic decoy portal to the censorship-proof fan universe known as **Planet Sweetheart**.

---

## ⚙️ Project Overview
This folder contains the **compiled web build** of the Planet Sweetheart app for Netlify deployment.

### Key Files:
- `Index.html` → Main entry point
- `assets/` → App media and compiled scripts
- `_redirects` → Routing configuration for SPA behavior
- `netlify.toml` → Netlify deployment configuration
- `metadata.json` → Vibecode export metadata

---

## 🚀 Deployment Guide

1. **Upload to GitHub:**
   - Create a new repository called `planet-sweetheart-app`.
   - Upload these files (or drag & drop via GitHub desktop).

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/).
   - Select **“Add new site → Import from GitHub.”**
   - Connect to your `planet-sweetheart-app` repo.
   - Set the **publish directory** to `/` (root).

3. **Optional Custom Domain:**
   - Connect your domain `planetsweetheart.com` under **Domain settings**.

---

## 💻 Local Preview
To view locally, open `Index.html` in your browser or use a local server:
```bash
npx serve .
