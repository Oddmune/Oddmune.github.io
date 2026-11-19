/* =====================================================================
   SITE SETTINGS — edit your name, role and links HERE (one place only).
   The header and footer on every page are built from these values.
   ===================================================================== */
const SITE = {
  name: "Mingyeom Song",
  role: "Technical Designer",
  email: "oddmune@gmail.com",
  resume: "assets/docs/MingyeomSong_Resume.pdf",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mingyeom-song-7aa125350/", icon: "linkedin" },
    { label: "GitHub",   url: "https://github.com/oddmune",                          icon: "github" },
    { label: "itch.io",  url: "https://odd-mune.itch.io/",                           icon: "game" },
    // TODO: paste your VFS ECO portfolio link below (replace the "#")
    { label: "ECO",      url: "#",                                                   icon: "folder" },
  ],
  nav: [
    { label: "Portfolio", href: "index.html",  key: "portfolio" },
    { label: "About",     href: "about.html",  key: "about" },
    { label: "Resume",    href: "resume.html", key: "resume" },
  ],
};

/* ---------- small icon set (simple line icons) ---------- */
const ICONS = {
  linkedin: '<path d="M4 9h3v11H4zM5.5 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.6V20h-3v-5.8c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3z" fill="currentColor" stroke="none"/>',
  github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  game: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
};
function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ---------- builds the social buttons (used in header, footer, hero) ---------- */
function socialButtons(root, opts = {}) {
  const links = SITE.socials.map(s =>
    `<a class="btn-social" href="${s.url}" target="_blank" rel="noopener">${icon(s.icon)}<span>${s.label}</span></a>`
  );
  links.push(`<a class="btn-social" href="mailto:${SITE.email}">${icon("mail")}<span>Email</span></a>`);
  if (opts.resume) {
    links.push(`<a class="btn-social btn-accent" href="${root}${SITE.resume}" download>${icon("download")}<span>Resume (PDF)</span></a>`);
  }
  return links.join("");
}

/* ---------- header + footer ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.body.dataset.root || "";      // "" on top pages, "../" inside /projects
  const page = document.body.dataset.page || "";

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="wrap header-inner">
        <a class="brand" href="${root}index.html">
          <span class="brand-name">${SITE.name}</span>
          <span class="brand-role">${SITE.role}</span>
        </a>
        <nav class="main-nav" aria-label="Main">
          ${SITE.nav.map(n => `<a href="${root}${n.href}" class="${n.key === page ? "active" : ""}">${n.label}</a>`).join("")}
        </nav>
      </div>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="wrap footer-inner">
        <div>
          <p class="footer-name">${SITE.name}</p>
          <p class="footer-role">${SITE.role} · Vancouver, BC</p>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
        </div>
        <div class="social-row">${socialButtons(root, { resume: true })}</div>
      </div>
      <p class="wrap copyright">© ${new Date().getFullYear()} ${SITE.name}</p>`;
  }

  // Any element with class "social-slot" gets the social buttons (e.g. the home hero)
  document.querySelectorAll(".social-slot").forEach(el => {
    el.innerHTML = socialButtons(root, { resume: true });
  });

  document.querySelectorAll(".carousel").forEach(setupCarousel);
});

/* ---------- image carousel (arrows, dots, swipe, keyboard) ---------- */
function setupCarousel(el) {
  const track = el.querySelector(".carousel-track");
  const slides = [...track.children];
  if (!slides.length) return;
  let index = 0;

  const dots = document.createElement("div");
  dots.className = "carousel-dots";
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.type = "button";
    d.setAttribute("aria-label", `Go to image ${i + 1}`);
    d.addEventListener("click", () => go(i));
    dots.appendChild(d);
  });

  const prev = document.createElement("button");
  prev.className = "carousel-btn prev"; prev.type = "button";
  prev.setAttribute("aria-label", "Previous image"); prev.innerHTML = "&#8249;";
  const next = document.createElement("button");
  next.className = "carousel-btn next"; next.type = "button";
  next.setAttribute("aria-label", "Next image"); next.innerHTML = "&#8250;";
  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));

  const counter = document.createElement("span");
  counter.className = "carousel-count";

  el.append(prev, next, counter);
  el.after(dots);

  function go(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    [...dots.children].forEach((d, n) => d.classList.toggle("on", n === index));
    counter.textContent = `${index + 1} / ${slides.length}`;
  }

  // swipe on phones / tablets
  let startX = null;
  el.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    startX = null;
  });

  // keyboard arrows when the carousel is focused
  el.tabIndex = 0;
  el.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  });

  go(0);
}
