// DOM Elements
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");
const backToTopBtn = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");

// Navigation Toggle
navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    const icon = navToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
        document.body.style.overflow = "";
    });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
    ) {
        navMenu.classList.remove("active");
