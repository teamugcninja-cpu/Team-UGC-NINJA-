
/* =================================
   UGC NINJA — INTERACTIVE SYSTEM
   DEVELOPER: FAHAD MALLAH
================================= */

// 1. PAGE LOADER
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// 2. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });
});

// 3. SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.15
});

// Apply animation to website sections
document.querySelectorAll(
  ".hero-content, .hero-image, .service-card, .about-content, .about-image, .why-card, .contact"
).forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});

// 4. DYNAMIC COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// 5. NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (navbar) {

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  }

});

// 6. CONSOLE BRANDING
console.log(
  "%c UGC NINJA ",
  "background:#ff1828;color:white;font-size:25px;font-weight:bold;padding:10px;"
);

console.log(
  "Website Developed by Fahad Mallah"
);
