const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const revealElements = document.querySelectorAll(".reveal");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

revealElements.forEach((el) => observer.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];

const setActiveLink = () => {
  const scrollPos = window.scrollY + 130;

  sections.forEach((section) => {
    const start = section.offsetTop;
    const end = start + section.offsetHeight;
    const id = section.getAttribute("id");
    const matchingLink = document.querySelector(`.nav a[href="#${id}"]`);

    if (scrollPos >= start && scrollPos < end) {
      matchingLink?.classList.add("active");
    } else {
      matchingLink?.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

document.getElementById("year").textContent = new Date().getFullYear();
