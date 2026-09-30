/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* =========================
   CLOSE MOBILE MENU
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";
  });
});

/* =========================
   CURRENT YEAR
========================= */

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
