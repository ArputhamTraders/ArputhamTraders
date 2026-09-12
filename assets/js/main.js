/* ==========================================================================
   Arputham Traders — site behaviour
   Vanilla JS. Provides a small IntersectionObserver-based reveal system
   (same easing curve/spirit as Framer Motion's whileInView) so the static
   site doesn't need a React build step just for scroll-in animation.
   ========================================================================== */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Highlight current page in nav
  var here = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-links a[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page") === here) a.classList.add("active");
  });

  // Scroll reveal
  var items = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && items.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el, i) {
      el.style.setProperty("--i", i % 8);
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Header shadow after scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 6px 18px rgba(12,51,32,0.08)" : "none";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Legal page: highlight active section in side nav while scrolling
  var legalLinks = document.querySelectorAll(".legal-nav a[href^='#']");
  if (legalLinks.length) {
    var sections = Array.prototype.map.call(legalLinks, function (a) {
      return document.querySelector(a.getAttribute("href"));
    }).filter(Boolean);
    var setActive = function () {
      var pos = window.scrollY + 140;
      var current = sections[0];
      sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
      legalLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current.id);
      });
    };
    document.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

/* ---------- Gallery lightbox + filter (only runs if .gallery-grid exists) ---------- */
(function () {
  "use strict";
  var grid = document.querySelector(".gallery-grid");
  if (!grid) return;

  var lightbox = document.querySelector(".lightbox");
  var lightboxInner = document.querySelector(".lightbox-inner");

  grid.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var full = item.getAttribute("data-full") || item.querySelector("img,video").getAttribute("src");
      var isVideo = item.getAttribute("data-type") === "video";
      var caption = item.getAttribute("data-caption") || "";
      lightboxInner.innerHTML =
        (isVideo
          ? '<video src="' + full + '" controls autoplay playsinline></video>'
          : '<img src="' + full + '" alt="">') +
        '<button class="lightbox-close" aria-label="Close">&times;</button>' +
        (caption ? '<p class="lightbox-cap">' + caption + '</p>' : "");
      lightbox.classList.add("open");
      lightboxInner.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxInner.innerHTML = "";
  }
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // Filter buttons
  var buttons = document.querySelectorAll(".gallery-filter button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var filter = btn.getAttribute("data-filter");
      grid.querySelectorAll(".gallery-item").forEach(function (item) {
        var match = filter === "all" || item.getAttribute("data-category") === filter;
        item.style.display = match ? "" : "none";
      });
    });
  });
})();
