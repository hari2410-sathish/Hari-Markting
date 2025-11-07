// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0)';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0)';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Initialize dropdowns for mobile
if (window.innerWidth <= 768) {
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });
}


//about
const swiper = new Swiper('.swiper', {
  loop: true,
  // No pagination or navigation here
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

//service
  document.querySelectorAll('.service-text p').forEach(paragraph => {
  const words = paragraph.textContent.split(' ');
  paragraph.innerHTML = words.map((word, i) => 
    `<span style="--i:${i}">${word}&nbsp;</span>`
  ).join('');
});

