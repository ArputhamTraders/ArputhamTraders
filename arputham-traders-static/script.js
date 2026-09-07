const PHONE = "9080409073";
const EMAIL = "contact@arputhamtraders.work.gd";
const ADDRESS = "12/25 83rd Street, Ashok Nagar, Chennai";
const MEDIA = "media/";

const icon = (name, size = 20) => {
  const paths = {
    recycle: `<path d="m7 19-3-3 3-3"/><path d="M4 16h8a4 4 0 0 0 3.46-2L17 11"/><path d="m17 5 3 3-3 3"/><path d="M20 8h-8a4 4 0 0 0-3.46 2L7 13"/><path d="m12 3 2.5 4.5"/><path d="m12 21-2.5-4.5"/>`,
    phone: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>`,
    arrowRight: `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`,
    arrowDown: `<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>`,
    arrowUp: `<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>`,
    menu: `<path d="M4 6h16M4 12h16M4 18h16"/>`,
    close: `<path d="m6 6 12 12M18 6 6 18"/>`,
    check: `<path d="m5 12 4 4L19 6"/>`,
    truck: `<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>`,
    scale: `<path d="M12 3v18M5 7h14M7 7 3 14a4 4 0 0 0 8 0L7 7Zm10 0-4 7a4 4 0 0 0 8 0l-4-7ZM5 21h14"/>`,
    leaf: `<path d="M20 4c-7.5 0-13 3.5-13 9 0 3.3 2.7 6 6 6 5.5 0 7-7.5 7-15Z"/><path d="M4 20c3.5-4.5 7-7 12-9"/>`,
    zap: `<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>`,
    factory: `<path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16M8 20v-4h3v4M16 20v-4h3v4"/>`,
    building: `<path d="M3 21h18M5 21V5l7-3 7 3v16M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/>`,
    shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>`,
    dollar: `<circle cx="12" cy="12" r="9"/><path d="M12 6v12M15 9.5c0-1-1.34-1.5-3-1.5s-3 .5-3 1.5 1.34 1.5 3 1.5 3 .5 3 1.5-1.34 1.5-3 1.5-3-.5-3-1.5"/>`,
    map: `<path d="m9 18 6 3V6l-6-3-6 3v15l6-3Zm0 0V3m6 3 6-3v15l-6 3"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
    mail: `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>`,
    file: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>`,
    badge: `<path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/>`,
    spark: `<path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z"/>`,
    play: `<circle cx="12" cy="12" r="9"/><path d="m10 8 5 4-5 4V8Z"/>`,
    info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>`,
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.info}</svg>`;
};

const asset = (name) => `${MEDIA}${name}`;
const galleryItems = [
  { src: asset("IMG_9189_1788793789231.PNG"), title: "The Arputham promise", type: "Brand poster", size: "large", kind: "image" },
  { src: asset("ChatGPT_Image_Aug_28,_2026,_09_31_51_PM_1788793810594.png"), title: "Clear your space", type: "Collection in motion", size: "tall", kind: "image" },
  { src: asset("ChatGPT_Image_Aug_26,_2026,_12_30_41_AM_1788793810597.png"), title: "Scrap becomes resource", type: "Our point of view", size: "wide", kind: "image" },
  { src: asset("ChatGPT_Image_Aug_30,_2026,_11_46_51_PM_1788793810595.png"), title: "Serving Chennai", type: "Tamil / English", size: "standard", kind: "image" },
  { src: asset("ChatGPT_Image_Sep_1,_2026,_01_03_37_PM_1788793810596.png"), title: "A trusted local face", type: "From our family", size: "standard", kind: "image" },
];

const categories = [
  ["Ferrous metal", "Iron, steel & mixed metal", "factory"],
  ["Copper", "Wire, cable & bright copper", "zap"],
  ["Aluminium", "Profiles, sheets & cans", "recycle"],
  ["E-waste", "Boards, appliances & devices", "shield"],
  ["Industrial scrap", "Machinery, tools & clear-outs", "building"],
];

const isFilePage = () => window.location.protocol === "file:";

const route = () => {
  if (isFilePage()) {
    const hashRoute = window.location.hash.replace(/^#/, "").replace(/\/+$/, "");
    return hashRoute === "about" ? "/about" : hashRoute === "privacy" ? "/privacy" : "/";
  }
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path.endsWith("/about") ? "/about" : path.endsWith("/privacy") ? "/privacy" : path === "/" ? "/" : "/404";
};

const routeHref = (path) => {
  if (isFilePage()) return path === "/" ? "#" : `#${path.slice(1)}`;
  const current = window.location.pathname;
  const base = current.includes("/about") ? current.slice(0, current.lastIndexOf("/about")) : current.includes("/privacy") ? current.slice(0, current.lastIndexOf("/privacy")) : current === "/" ? "" : current.replace(/\/+$/, "");
  return `${base}${path === "/" ? "/" : path}`;
};

const link = (label, path, className = "") => `<a href="${routeHref(path)}" data-route="${path}" class="${className}">${label}</a>`;

function header() {
  return `<header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="${routeHref("/")}" data-route="/" aria-label="Arputham Traders home">
        <span class="logo-mark">${icon("recycle", 25)}</span>
        <span><span class="logo-name">ARPUTHAM</span><span class="logo-sub">TRADERS</span></span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        ${link("Home", "/")}
        ${link("About us", "/about")}
        <a href="#services">What we collect</a>
        <a href="#gallery">Gallery</a>
      </nav>
      <div class="header-actions">
        <a class="header-call" href="tel:+91${PHONE}">${icon("phone", 15)} ${PHONE}</a>
        <a class="button primary" href="#contact">Connect now ${icon("arrowRight", 16)}</a>
      </div>
      <button class="mobile-menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>${icon("menu", 24)}</button>
    </div>
    <nav class="mobile-menu" aria-label="Mobile navigation" data-mobile-menu>
      ${link("Home", "/", "mobile-route")}
      ${link("About us", "/about", "mobile-route")}
      <a href="#services">What we collect</a>
      <a href="#gallery">Gallery</a>
      <a class="mobile-call" href="tel:+91${PHONE}">${icon("phone", 16)} Call ${PHONE}</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="logo" href="${routeHref("/")}" data-route="/">
          <span class="logo-mark">${icon("recycle", 25)}</span>
          <span><span class="logo-name">ARPUTHAM</span><span class="logo-sub">TRADERS</span></span>
        </a>
        <p class="footer-copy">A Chennai scrap collection partner built on faith, integrity and service. We clear space, recover value and keep useful material in motion.</p>
        <a class="footer-phone" href="tel:+91${PHONE}">${icon("phone", 18)} ${PHONE}</a>
      </div>
      <div>
        <div class="footer-label">Explore</div>
        <div class="footer-links">${link("Home", "/")}${link("About Arputham", "/about")}<a href="#gallery">Gallery</a>${link("Privacy & terms", "/privacy")}</div>
      </div>
      <div>
        <div class="footer-label">Find us</div>
        <div class="footer-find">${icon("map", 16)} <span>${ADDRESS}</span></div>
        <div class="footer-find">${icon("clock", 16)} <span>Monday to Saturday · 9am–6pm</span></div>
      </div>
    </div>
    <div class="footer-meta container"><span>© ${new Date().getFullYear()} Arputham Traders. All rights reserved.</span><span>We collect. We recycle. We build a better tomorrow.</span></div>
  </footer>`;
}

function shell(content) {
  return `<div class="site-noise">${header()}${content}${footer()}<div class="lightbox" data-lightbox hidden><div class="lightbox-content" data-lightbox-content></div></div></div>`;
}

function button(label, href = "#contact", type = "primary", iconName = "arrowRight") {
  const routeMap = { "/": "/", "#": "/", "/about": "/about", "#about": "/about", "/privacy": "/privacy", "#privacy": "/privacy" };
  const routeAttribute = routeMap[href] ? ` data-route="${routeMap[href]}"` : "";
  return `<a class="button ${type}" href="${href}"${routeAttribute}>${label} ${icon(iconName, 16)}</a>`;
}

function hero() {
  return `<section class="hero paper-grid">
    <div class="container hero-grid">
      <div class="reveal">
        <div class="hero-kicker"><span class="eyebrow">Chennai · Scrap collection & recycling</span></div>
        <h1>Clear your space.<br><span class="accent">Keep the value.</span></h1>
        <p class="hero-copy">Reliable doorstep pickup for homes, offices, factories and commercial spaces across Chennai. Your scrap is weighed fairly, paid promptly and given its next useful life.</p>
        <div class="hero-actions">${button("Connect for a pickup", "#contact", "primary", "arrowDown")}<a class="direct-call" href="tel:+91${PHONE}">${icon("phone", 16)} Call directly</a></div>
        <div class="hero-proof"><span><b class="check">${icon("check", 15)}</b> Fair price promise</span><span><b class="check">${icon("check", 15)}</b> Accurate weighing</span><span><b class="check">${icon("check", 15)}</b> Responsible recycling</span></div>
      </div>
      <div class="poster-wrap reveal">
        <div class="poster-frame"><img src="${asset("IMG_9189_1788793789231.PNG")}" alt="Arputham Traders scrap collection poster showing recycling and Chennai service" width="683" height="1024"><div class="poster-caption">Faith · Integrity · Service</div></div>
        <div class="float-note"><span class="float-note-icon">${icon("recycle", 20)}</span><p>Less waste.<br><span>More value.</span></p></div>
      </div>
    </div>
  </section>`;
}

function trustStrip() {
  const items = [["truck", "Doorstep pickup"], ["scale", "Accurate weighing"], ["dollar", "Instant payment"], ["leaf", "Clean earth"]];
  return `<section class="trust-strip"><div class="container trust-grid">${items.map(([i, label]) => `<div class="trust-item">${`<span class="round-icon">${icon(i, 19)}</span>`}<span>${label}</span></div>`).join("")}</div></section>`;
}

function services() {
  return `<section id="services" class="section"><div class="container services-grid">
    <div class="services-intro reveal"><div class="eyebrow">What we collect</div><div class="section-heading"><h2>Every material has a <span class="accent">next chapter.</span></h2></div><p>From a single appliance to a full industrial clear-out, we sort, weigh and channel materials to trusted recycling partners.</p>${button("How we work", routeHref("/about"), "outline")}</div>
    <div class="category-grid">${categories.map(([label, detail, iconName], index) => `<article class="category-card reveal"><div class="category-top"><span class="category-icon">${icon(iconName, 23)}</span><span class="category-number">0${index + 1}</span></div><div class="category-copy"><h3>${label}</h3><p>${detail}</p></div><span class="arrow-circle">${icon("arrowUp", 15)}</span></article>`).join("")}</div>
  </div></section>`;
}

function process() {
  const steps = [["01", "Tell us what you have", "Call or connect with a few details about your material and location.", "phone"], ["02", "We arrange pickup", "We agree on a convenient time and arrive ready to sort and load.", "truck"], ["03", "Weigh it fairly", "Transparent weighing and a clear conversation about the value.", "scale"], ["04", "Value moves forward", "You get paid promptly; material goes to responsible recycling channels.", "recycle"]];
  return `<section class="section process"><div class="container"><div class="process-top"><div><div class="eyebrow">Simple by design</div><div class="section-heading"><h2>Good service should feel <span class="display">straightforward.</span></h2></div></div><p>A clear, respectful process from your first call to the final handover.</p></div><div class="process-grid">${steps.map(([number, title, copy, iconName]) => `<div class="process-step reveal"><div class="process-meta"><span>${number}</span>${icon(iconName, 20)}</div><h3>${title}</h3><p>${copy}</p></div>`).join("")}</div></div></section>`;
}

function gallery() {
  return `<section id="gallery" class="section gallery"><div class="container"><div class="gallery-top"><div><div class="eyebrow">From the Arputham archive</div><div class="section-heading"><h2>A little more <span class="accent">character.</span></h2></div></div><p>Posters, people and reminders of the better tomorrow we are building in Chennai.</p></div><div class="gallery-grid">${galleryItems.map((item, index) => `<button class="gallery-item ${item.size} reveal" type="button" data-gallery-index="${index}" aria-label="Open ${item.title}">${item.kind === "video" ? `<video src="${item.src}" muted playsinline preload="metadata"></video><span class="video-badge">${icon("play", 18)}</span>` : `<img src="${item.src}" alt="${item.title} — Arputham Traders" loading="lazy">`}<span class="gallery-caption"><strong>${item.title}</strong><span>${item.type}</span></span></button>`).join("")}</div><div class="media-note">${icon("spark", 16)}<span><strong>Media note:</strong> this archive is ready to grow. Add future customer photos or short videos to <span class="mono">public/media/</span> and update the gallery list.</span></div></div></section>`;
}

function contact() {
  return `<section id="contact" class="section contact"><div class="container contact-grid"><div class="reveal"><div class="eyebrow light">Connect now</div><h2>Let’s give your scrap a <span class="accent">better destination.</span></h2><p class="contact-copy">Tell us what needs clearing. Our team will get back to you with the next practical step.</p><div class="contact-actions"><a class="button primary" href="tel:+91${PHONE}">${icon("phone", 16)} ${PHONE}</a><a class="button outline" href="mailto:${EMAIL}">${icon("mail", 16)} Email us</a></div><p class="address">${icon("map", 17)} <span>${ADDRESS}</span></p></div><div class="inquiry-card reveal"><div class="inquiry-head"><div><div class="eyebrow">Future inquiry form</div><h3>Share a few details</h3></div>${icon("file", 26)}</div><div class="inquiry-box"><div class="inquiry-icon">${icon("mail", 20)}</div><strong>A Google Form will live here soon.</strong><p>For now, call or email us directly. We have intentionally left this space ready for the official inquiry flow.</p><span class="pending">${icon("clock", 14)} Form link pending</span></div><div class="inquiry-tip">${icon("badge", 16)}<span>Include your location, approximate scrap type and preferred pickup window when you contact us.</span></div></div></div></section>`;
}

function home() {
  return `<main>${hero()}${trustStrip()}${services()}${process()}${gallery()}${contact()}</main>`;
}

function about() {
  return `<main><section class="paper-grid page-hero about-hero"><div class="container about-hero-inner"><div class="reveal"><div class="eyebrow">About Arputham Traders</div><h1>Practical work.<br><span class="accent">A lasting difference.</span></h1></div><p class="page-lead reveal">We are a Chennai scrap collection and recycling company helping people and businesses turn unused material into useful value.</p></div></section><section class="values-section"><div class="container values-grid"><div class="founder-wrap reveal"><img src="${asset("daddy__1788793810596.jpeg")}" alt="Arputham Traders founder" width="808" height="1024"></div><div class="reveal"><div class="eyebrow light">What we stand for</div><blockquote class="values-quote">“The right way to do business is to leave people, places and materials better than we found them.”</blockquote><div class="values-list"><div><span>Faith</span><p>Be dependable in every promise.</p></div><div><span>Integrity</span><p>Make the numbers and process clear.</p></div><div><span>Service</span><p>Show up with respect and purpose.</p></div></div></div></div></section><section class="section about-details"><div class="container details-grid"><div class="reveal"><div class="eyebrow">Built for real clear-outs</div><h2>From one home to a full facility.</h2></div><div class="detail-cards">${[["Corporate scrap solutions", "Reliable service for offices, factories, industries, warehouses and commercial spaces.", "building"], ["Responsible recovery", "We separate what can be reused, recycled and redirected with care.", "recycle"], ["Fair, transparent value", "Accurate weighing and straightforward communication at every pickup.", "scale"], ["Chennai, close by", ADDRESS, "map"]].map(([title, text, iconName]) => `<div class="detail-card reveal">${icon(iconName, 22)}<h3>${title}</h3><p>${text}</p></div>`).join("")}</div></div></section>${contact()}</main>`;
}

function privacy() {
  return `<main><section class="paper-grid page-hero privacy-hero"><div class="container privacy-inner reveal"><div class="eyebrow">Information notice</div><h1>Privacy & <span class="accent">terms.</span></h1><p class="page-lead">A clear, plain-language starting point for how Arputham Traders handles website enquiries and service conversations.</p></div></section><article class="privacy-article"><div class="privacy-inner"><div class="notice">${icon("shield", 20)}<br><strong>Important:</strong> This is an informational template, not legal advice. Please have these terms reviewed and adapted by qualified legal counsel before publication.</div><div class="legal-copy"><h2>Privacy notice</h2><p>Arputham Traders may receive personal information when you call, email or otherwise contact us about scrap collection. This may include your name, phone number, email address, location, material details and preferred pickup time.</p><h3>How we use information</h3><p>We use enquiry details to respond to requests, coordinate collection, communicate about service availability and maintain basic business records. We do not sell personal information.</p><h3>Sharing and retention</h3><p>Information may be shared with service providers or team members only when reasonably necessary to arrange a requested service, maintain our website or comply with law. We retain information only for as long as needed for these purposes and ordinary business obligations.</p><h3>Your choices</h3><p>You may ask us to correct, update or delete information you have shared, subject to legal or operational requirements. Contact us at <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:+91${PHONE}">${PHONE}</a>.</p><h2>Terms of use</h2><p>This website provides general information about Arputham Traders and is not a binding quote, valuation or guarantee of collection. Final acceptance, pricing, weighing, payment and material handling are confirmed directly with our team.</p><h3>Responsible use</h3><p>Please provide accurate information and ensure you have authority to offer material for collection. Do not submit confidential, unlawful or hazardous material information through an informal enquiry.</p><h3>Updates</h3><p>We may update this notice as our services, website or legal obligations change. The latest version will be published on this page.</p></div></div></article></main>`;
}

const pageMeta = {
  "/": ["Arputham Traders | Scrap Collection in Chennai", "Arputham Traders provides trusted scrap collection and recycling in Chennai for homes, offices, factories and commercial spaces."],
  "/about": ["About Arputham Traders | Chennai Recycling", "Learn about Arputham Traders, a Chennai scrap collection partner guided by faith, integrity and service."],
  "/privacy": ["Privacy & Terms | Arputham Traders", "Read the informational privacy notice and terms of use for the Arputham Traders website."],
};

function setMeta(currentRoute) {
  const [title, description] = pageMeta[currentRoute] || pageMeta["/"];
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", description);
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", title);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", description);
}

function mount() {
  const currentRoute = route();
  const page = currentRoute === "/" ? home() : currentRoute === "/about" ? about() : currentRoute === "/privacy" ? privacy() : `<main class="not-found"><div class="eyebrow">Page not found</div><h1>That page has moved.</h1>${button("Back home", routeHref("/"), "primary", "arrowRight")}</main>`;
  document.querySelector("#app").innerHTML = shell(page);
  setMeta(currentRoute);
  window.scrollTo(0, 0);
  bindInteractions();
}

function bindInteractions() {
  document.querySelectorAll("[data-route]").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const destination = anchor.dataset.route;
      if (!destination) return;
      event.preventDefault();
      history.pushState({}, "", routeHref(destination));
      mount();
    });
  });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  menuButton?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuButton.innerHTML = icon(open ? "close" : "menu", 24);
  });
  document.querySelectorAll(".mobile-menu a").forEach((anchor) => anchor.addEventListener("click", () => mobileMenu.classList.remove("is-open")));

  const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll(".reveal").forEach((element) => observer ? observer.observe(element) : element.classList.add("is-visible"));

  const lightbox = document.querySelector("[data-lightbox]");
  const content = document.querySelector("[data-lightbox-content]");
  const closeLightbox = () => { lightbox.hidden = true; document.body.classList.remove("is-locked"); content.innerHTML = ""; };
  document.querySelectorAll("[data-gallery-index]").forEach((button) => button.addEventListener("click", () => {
    const item = galleryItems[Number(button.dataset.galleryIndex)];
    content.innerHTML = `${item.kind === "video" ? `<video src="${item.src}" controls autoplay playsinline></video>` : `<img src="${item.src}" alt="${item.title}">`}<button class="lightbox-close" type="button" aria-label="Close gallery">${icon("close", 17)}</button>`;
    lightbox.hidden = false;
    document.body.classList.add("is-locked");
    content.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  }));
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox(); }, { once: true });
}

window.addEventListener("popstate", mount);
mount();