document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Remove .active from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add .active to the clicked one
        this.classList.add('active');
      });
    });
  });

  document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("whatsappName").value.trim();
    const message = document.getElementById("whatsappMessage").value.trim();

    if (name && message) {
      const phone = "201001234567"; // 🔁 Your WhatsApp number (no +)
      const fullMsg = `Hello, I'm ${name}\n\n${message}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
      window.open(url, "_blank");
    } else {
      alert("Please fill out all fields.");
    }
  });

  window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-fade').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });

  // Disable focus scroll into view behavior
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const active = document.activeElement;
      if (active) active.blur(); // prevent jump to element
    });
  });
