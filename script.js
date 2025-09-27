// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

const toggleCheckbox = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Set theme function
function setTheme(theme) {
    if (theme === "dark") body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
}

// Update icon
function updateIcon() {
    themeIcon.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

// Animate text elements
function animateText() {
    const elements = document.querySelectorAll(".hero h1, .hero p, .section h2, .section p");
    elements.forEach(el => { el.style.transition = "none"; el.offsetHeight; el.style.transition = "color 0.8s ease, transform 0.8s ease, opacity 0.8s ease"; });
}

// Animate UI elements
function animateUI() {
    const elements = document.querySelectorAll(".nav-links a, .contact-form input, .contact-form textarea, .contact-form button, .btn");
    elements.forEach(el => { el.style.transition = "none"; el.offsetHeight; el.style.transition = "background 0.8s ease, color 0.8s ease, border-color 0.8s ease, box-shadow 0.4s ease, transform 0.5s ease, opacity 0.5s ease"; });
}

// Detect system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);
else setTheme(prefersDark ? "dark" : "light");
updateIcon();

// Toggle listener
toggleCheckbox.addEventListener("change", () => {
    const newTheme = toggleCheckbox.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    animateText();
    animateUI();
    updateIcon();
});

// Particle animation in hero
const hero = document.querySelector(".hero");
function createParticles(count) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "%";
        p.style.width = `${2 + Math.random() * 6}px`;
        p.style.height = p.style.width;
        p.style.animationDuration = `${5 + Math.random() * 10}s`;
        p.style.background = `rgba(255,255,255,${0.2 + Math.random() * 0.3})`;
        hero.appendChild(p);
    }
}
createParticles(30);

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Highlight nav link on scroll
const sections = document.querySelectorAll("section");
function highlightNav() {
    let scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}
window.addEventListener("scroll", highlightNav);
highlightNav(); // initial call

