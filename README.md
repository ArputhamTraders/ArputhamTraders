<div align="center">

<img src="assets/img/logo_icon.png" width="110" alt="Arputham Traders logo"/>

# ♻️ Arputham Traders

**We Collect. We Recycle. We Build a Better Tomorrow.**

Chennai's trusted scrap collector — a fast, static, zero-build website
for a real-world scrap collection & recycling business.

[![Live Site](https://img.shields.io/badge/live%20site-arputhamtraders.work.gd-1c6b3a?style=for-the-badge&logo=googlechrome&logoColor=white)](https://arputhamtraders.work.gd)
[![Made with HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20Vanilla%20JS-0c3320?style=for-the-badge&logo=html5&logoColor=white)](#-tech-stack)
[![Deploys to GitHub Pages](https://img.shields.io/badge/deploys%20to-GitHub%20Pages-a6c400?style=for-the-badge&logo=github&logoColor=0c3320)](#-deployment)
[![License](https://img.shields.io/badge/license-Proprietary-c9a227?style=for-the-badge)](#-license)

</div>

---

## 📍 About

**Arputham Traders** is a family-run scrap collection and recycling
business based in **Ashok Nagar, Chennai, Tamil Nadu**. We buy metal
scrap, copper, aluminium, e‑waste and industrial scrap from households,
offices, factories and warehouses — with doorstep pickup, accurate
on‑the‑spot weighing, and instant cash payment.

This repository is the source for our public website: a fast, dependency-free
static site with no build step, designed to deploy straight to GitHub
Pages (or Netlify) and serve well even on slower mobile connections.

| | |
|---|---|
| 📞 **Phone** | [90804 09073](tel:+919080409073) |
| 📧 **Email** | [connect@arputhamtraders.work.gd](mailto:connect@arputhamtraders.work.gd) |
| 📍 **Address** | 12/25 83rd Street, Ashok Nagar, Chennai, Tamil Nadu |
| 🕐 **Hours** | Mon – Sat, 9:00 AM – 7:00 PM |
| 🌐 **Website** | [arputhamtraders.work.gd](https://arputhamtraders.work.gd) |

---

## ✨ Features

- 🎨 **Custom brand system** — every color, font pairing and component
  pulled straight from the company's own marketing artwork (forest
  green, cash-lime, gold accents, cream paper background).
- 📱 **Fully responsive** — mobile nav, fluid type scale, adaptive grids.
- 🎬 **Scroll-reveal animation** — a lightweight vanilla-JS
  IntersectionObserver system (Framer Motion-style easing, no React
  build required).
- 🖼️ **Gallery page** — filterable photo/video grid with a built-in
  lightbox, backed by an `assets/media/` folder for real photos and
  clips of the yard, pickups and team.
- 📝 **Google Form–ready Connect page** — drop in a form embed URL and
  you have a working lead-capture pipeline in minutes.
- ⚖️ **India-ready legal page** — Privacy Policy & Terms and Conditions
  written for an Indian business (IT Act 2000 / SPDI Rules references,
  Consumer Protection Act note, Chennai jurisdiction).
- 🔎 **Local SEO built in** — Open Graph + Twitter Card tags, geo meta
  tags for Chennai/Tamil Nadu, and JSON-LD `RecyclingCenter` structured
  data for rich local search results.
- ⚡ **Zero build step** — no npm, no bundler, no framework. Edit HTML,
  push, done.

---

## 🗂️ Project Structure

```text
.
├── index.html              Home — hero, services, process, why-us, founder
├── about.html              About Us — story, values, who we serve
├── gallery.html            Gallery — photo/video grid + lightbox
├── connect.html            Connect Now — contact info + Google Form embed
├── legal.html              Privacy Policy & Terms and Conditions
├── README.md               You are here
└── assets/
    ├── css/
    │   └── style.css       Full brand system: colors, type, components,
    │                       responsive rules, scroll-reveal, gallery, lightbox
    ├── js/
    │   └── main.js         Nav toggle, scroll-reveal, active-link highlight,
    │                       gallery filter + lightbox logic
    ├── img/                Logo, founder photo, category photos, hero image,
    │                       OG social-share cover — sourced from the
    │                       company's own poster artwork
    └── media/              🎥 Drop your real photos & videos here
                            (see gallery.html for how each is wired in)
```

---

## 🛠️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | Semantic HTML5 | No templating engine needed for 5 pages |
| Styling | Hand-written CSS3 (custom properties) | Full control over the brand system, tiny payload |
| Type | `Barlow Condensed` + `Inter` (Google Fonts) | Bold industrial headlines, clean readable body |
| Interactivity | Vanilla JavaScript | Nav, scroll-reveal, gallery/lightbox — no framework overhead |
| Hosting | GitHub Pages / Netlify | Free, CDN-backed, plays nicely with a custom domain |
| Forms | Google Forms (embedded) | Zero backend, responses land straight in a spreadsheet |
| Email | ImprovMX | Free forwarding from `@arputhamtraders.work.gd` to Gmail |

---

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Arputham Traders website"
git branch -M main
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```
Then: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

To serve it at `arputhamtraders.work.gd` instead of `<owner>.github.io`,
add a `CNAME` file at the repo root containing just:
```text
arputhamtraders.work.gd
```
commit & push, set the same value under **Settings → Pages → Custom
domain**, point your DNS A records at GitHub's Pages IPs, then tick
**Enforce HTTPS** once it verifies.

> **Using an organization repo?** Make sure **Settings → Actions →
> General** allows Actions to run — GitHub Pages deploys through an
> Actions workflow behind the scenes even for plain "deploy from a
> branch" sites, so a disabled Actions policy will silently stop new
> pushes from going live.

### Netlify (alternative)
Connect the repo at [app.netlify.com](https://app.netlify.com), or drag
the folder into Netlify Drop. For the apex domain, add an **A record**
pointing at Netlify's load balancer IP (`75.2.60.5`) in your DNS panel.

---

## ✅ Before You Publish — Checklist

- [ ] **Google Form** — in `connect.html`, replace
      `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your form's real embed URL
      (Google Forms → Send → `<>` → copy the `iframe` `src`), then
      remove the placeholder block and the iframe's `hidden` attribute.
- [ ] **Google Search Console** — verify the site and uncomment the
      `google-site-verification` meta tag in `index.html`.
- [ ] **Google Business Profile** — set one up at
      [business.google.com](https://business.google.com) for local map
      rankings; add the profile URL to `index.html`'s JSON-LD `sameAs`.
- [ ] **Gallery media** — drop real photos/videos into `assets/media/`
      and wire them into `gallery.html` (pattern is documented inline).
- [ ] **Domain in meta tags** — if you move off `arputhamtraders.work.gd`
      onto a paid domain, update every `og:url`, `canonical`, and
      JSON-LD URL in `index.html` to match.

---

## 📄 License

© Arputham Traders. All rights reserved. This code is provided for
Arputham Traders' own business use; it is not licensed for reuse by
other parties without permission.

---

<div align="center">

**Got scrap lying around?** [Connect with us](https://arputhamtraders.work.gd/connect.html) ·
📞 [90804 09073](tel:+919080409073)

</div>
