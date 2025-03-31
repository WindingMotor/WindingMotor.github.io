// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize animations for elements
  initAnimations();
  
  // Add active class to navbar items on scroll
  handleNavbarActiveState();
});

// Animate elements on scroll
function initAnimations() {
  const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Add active class to navbar items on scroll
function handleNavbarActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Project filter functionality
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Update active filter button
  filterButtons.forEach(button => {
    if (button.dataset.filter === category) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Filter projects
  projects.forEach(project => {
    if (category === 'all') {
      project.style.display = 'block';
    } else {
      const tags = project.querySelectorAll('.tag');
      let hasCategory = false;
      
      tags.forEach(tag => {
        if (tag.textContent.toLowerCase() === category.toLowerCase()) {
          hasCategory = true;
        }
      });
      
      project.style.display = hasCategory ? 'block' : 'none';
    }
  });
}

// Add CSS animations for elements
document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
  });
  
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.1}s`;
    category.classList.add('fade-in');
  });
  
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in');
  });
});

// Add additional CSS class for the navbar when scrolling
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});