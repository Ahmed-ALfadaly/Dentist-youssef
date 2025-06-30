const container = document.getElementById("sliderContainer");
const beforeWrapper = document.getElementById("beforeWrapper");
const divider = document.getElementById("sliderDivider");

let isDragging = false;

const moveSlider = (x) => {
  const rect = container.getBoundingClientRect();
  let position = x - rect.left;
  position = Math.max(0, Math.min(position, rect.width));
  const percent = (position / rect.width) * 100;

  beforeWrapper.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  divider.style.left = `${percent}%`;
};

divider.addEventListener("mousedown", () => isDragging = true);
window.addEventListener("mouseup", () => isDragging = false);
window.addEventListener("mousemove", (e) => {
  if (isDragging) moveSlider(e.clientX);
});

divider.addEventListener("touchstart", () => isDragging = true);
window.addEventListener("touchend", () => isDragging = false);
window.addEventListener("touchmove", (e) => {
  if (isDragging) moveSlider(e.touches[0].clientX);
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const whatsappButton = document.getElementById("whatsappButton");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form reload

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const phone = "201004646203"; // WhatsApp number (no +)
      const text = `Hello, I'm ${name}%0AMy email: ${email}%0AMessage: ${message}`;
      const whatsappURL = `https://wa.me/${phone}?text=${text}`;

      window.open(whatsappURL, "_blank");
    });
  });
  window.addEventListener('load', function() {
    var spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.style.display = 'none';
});

// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function() {
    // Assign animation classes to your sections/items
    // Example: About section fades in, Gallery spins in, Contact slides in from left, etc.
    document.querySelector('.about-section')?.classList.add('fade-in');
    document.querySelector('.gallery-section')?.classList.add('spin-in');
    document.querySelector('.contact-modern')?.classList.add('slide-left');
    document.querySelector('.clients-section')?.classList.add('slide-right');

    // Optionally, animate individual items inside sections
    document.querySelectorAll('.gallery-card').forEach((el, i) => {
        el.classList.add(i % 2 === 0 ? 'fade-in' : 'spin-in');
    });

    // Intersection Observer setup
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally, unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .spin-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
});