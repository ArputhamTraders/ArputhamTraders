# Arputham Traders — Website

A static 4-page marketing site (Home, About, Connect Now, Privacy &amp; Terms)
for Arputham Traders, a Chennai-based scrap collection and recycling
business. Pure HTML/CSS/vanilla JS — no build step, deploys straight to
GitHub Pages.

## Structure
```
index.html      Home
about.html      About Us
connect.html    Connect Now (Google Form placeholder + direct contact)
legal.html      Privacy Policy & Terms and Conditions
assets/css/     style.css  — brand system (colors, type, components)
assets/js/      main.js    — nav toggle, scroll-reveal, active link
assets/img/     logo, founder photo, category photos, hero image
                (all cropped from the company's own marketing artwork)
```

## Before you publish
1. **Google Form** — open `connect.html`, find the `gform-placeholder`
   block and the `<iframe class="gform-embed" ...>` right after it.
   Replace `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your form's embed URL,
   delete the placeholder `<div>`, and remove the `hidden` attribute from
   the iframe.
2. **Contact details** — phone, email and address are already filled in
   from the company's marketing material. Update them in all four HTML
   files (footer + relevant sections) if they change.
3. **Domain** — this repo is set up to be served at
   `arputhamtraders.work.gd` via GitHub Pages + a custom domain (see the
   deployment guide the assistant provided in chat, or the summary
   below).

## Quick deploy (GitHub Pages)
```bash
git init
git add .
git commit -m "Arputham Traders website"
git branch -M main
git remote add origin https://github.com/<your-username>/arputham-traders.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from a branch → main / (root)**.

To use the free `arputhamtraders.work.gd` domain instead of
`<username>.github.io`, add a file named `CNAME` (no extension)
containing exactly:
```
arputhamtraders.work.gd
```
at the repo root, commit it, then set the same value under
**Settings → Pages → Custom domain**, and add the DNS records described
in the chat guide at DNSExit. Once DNS propagates, tick **Enforce HTTPS**
in the Pages settings.
