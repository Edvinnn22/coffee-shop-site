// Navbar background change on scroll
const header = document.getElementById("header");
const heroContent = document.querySelector(".hero-content");
const introSection = document.getElementById("intro");

window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;

  // Navbar
  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Parallax for hero text
  heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;

  // Intro section fade-in
  const introTop = introSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (introTop < windowHeight * 0.8) {
    introSection.classList.add("show");
  }
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
