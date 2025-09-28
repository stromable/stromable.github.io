const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Initialize theme
if (localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
updateIcons();

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
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
