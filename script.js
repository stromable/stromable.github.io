const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Initialize theme
if (localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    document.getElementById("logo").src = "assets/logo-light.png";
} else {
    document.documentElement.classList.remove("dark");
    document.getElementById("logo").src = "assets/logo-dark.png";
}
updateIcons();

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.getElementById("logo").src = isDark ? "assets/logo-dark.png" : "assets/logo-light.png";
    updateIcons();
});

function updateIcons() {
    if (document.documentElement.classList.contains("dark")) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form reset
document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("contact-form").reset();
    document.getElementById("form-status").textContent = '';
});
