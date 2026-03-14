# Junk "IT" Hauling LLC — Website

Static website for Junk IT Hauling LLC, Sacramento CA.

## Project Structure

```
junk-it-hauling/
├── index.html       # Main page
├── style.css        # All styles
├── script.js        # Mobile nav + smooth scroll
├── images/
│   ├── logo.png     # Company logo
│   └── hero.jpg     # Hero/about photo
└── README.md
```

## Local Development

Just open `index.html` in a browser — no build step needed.

For live reloading during edits, use VS Code's Live Server extension or:
```bash
npx serve .
```

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project** → **Connect to Git**
4. Select this repo
5. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
6. Click **Save and Deploy**

Every push to `main` will auto-deploy.

## Custom Domain (junk-it-hauling.com)

After deploying to Cloudflare Pages:
1. Go to your project → **Custom domains**
2. Add `junk-it-hauling.com`
3. Cloudflare will walk you through DNS setup
4. SSL is automatic and free

## Updating Content

| What to change | Where |
|---|---|
| Phone / email / hours | `index.html` — search for `9165127035` |
| Services | `index.html` — `.services-grid` section |
| Service area cities | `index.html` — `.area-tags` section |
| Colors | `style.css` — `:root` variables at top |
| Logo | Replace `images/logo.png` |
| Hero photo | Replace `images/hero.jpg` |

## Pushing to Both Gitea and GitHub

```bash
# Add both remotes
git remote add origin https://github.com/YOUR_USERNAME/junk-it-hauling.git
git remote add gitea https://YOUR_GITEA/YOUR_USERNAME/junk-it-hauling.git

# Push to both at once
git push origin main
git push gitea main

# Or set up a push-to-both alias in .git/config:
# [remote "all"]
#   url = https://github.com/YOUR_USERNAME/junk-it-hauling.git
#   url = https://YOUR_GITEA/YOUR_USERNAME/junk-it-hauling.git
# Then: git push all main
```
