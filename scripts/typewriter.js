// Typewriter effect with configurable options
function createTypewriter(options = {}) {
    const {
      selector = '.typewriter', 
      speed = 50, 
      randomVariation = true,
      glitchEffect = true
    } = options;
  
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.opacity = 1;
  
      function typeWithVariation() {
        let i = 0;
        
        function type() {
          if (i < text.length) {
            // Add random speed variation if enabled
            const currentSpeed = randomVariation 
              ? speed + (Math.random() * 30 - 15) 
              : speed;
            
            // Add slight glitch effect
            if (glitchEffect && Math.random() < 0.05) {
              element.textContent += text.charAt(i).toUpperCase();
            } else {
              element.textContent += text.charAt(i);
            }
            
            i++;
            setTimeout(type, currentSpeed);
          }
        }
  
        type();
      }
  
      // Delayed start with fade-in
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease-in';
        element.style.opacity = 1;
        typeWithVariation();
      }, 500);
    });
  }
  
  // Initialize with default or custom settings
  window.addEventListener('DOMContentLoaded', () => {
    createTypewriter({
      speed: 75,  // Slower, more ransom note-like typing
      randomVariation: true,
      glitchEffect: true
    });
  });
  
  // Add random text shake effect
  function addTextShake() {
    const shakableElements = document.querySelectorAll('.shake');
    
    shakableElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.animation = 'subtleShake 0.1s infinite';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.animation = 'none';
      });
    });
  }
  
  // Initialize text shake
  window.addEventListener('DOMContentLoaded', addTextShake);