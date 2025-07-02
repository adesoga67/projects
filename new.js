// Scroll reveal effect
const reveals = document.querySelectorAll(".reveal");
const scrollReveal = () => {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) el.classList.add("visible");
  }
};
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Contact form interaction
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! 🚀");
});
