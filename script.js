const icons = document.querySelectorAll('.social-icons a');
icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});


const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


document.querySelector('.hire-btn').addEventListener('click', () => {
  alert("Thanks for your interest! Let's connect.");
});


