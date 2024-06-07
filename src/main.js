// main.js
"use strict";

// Import main CSS file
import './assets/main.css';

// Canvas setup
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Circle properties
const circleSize = 1;
const spacing = 45;
const maxEffectSize = 250;
const circles = [];

// Resize and redraw function
function resizeAndRedraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate circle positions
  circles.length = 0; // Clear existing circles
  for (let y = circleSize; y < canvas.height; y += spacing) {
    for (let x = circleSize; x < canvas.width; x += spacing) {
      circles.push({ 
        x, 
        y, 
        originalRadius: circleSize, 
        targetRadius: circleSize, 
        currentRadius: circleSize,
        isHovered: false 
      });
    }
  }

  draw();
}

// Draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach(circle => {
    // Smooth radius transition
    circle.currentRadius += (circle.targetRadius - circle.currentRadius) * 0.1;

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.currentRadius, 0, Math.PI * 2);
    ctx.fillStyle = circle.isHovered ? '#BA20D3' : '#D9D9D9';
    ctx.fill();
    ctx.closePath();
  });

  requestAnimationFrame(draw); // Optimize with requestAnimationFrame
}

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  circles.forEach(circle => {
    const dx = circle.x - mouseX;
    const dy = circle.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < maxEffectSize) {
      circle.isHovered = true;
      const effectRatio = distance / maxEffectSize;
      const maxRadiusChange = circle.originalRadius * 5;
      const radiusChange = maxRadiusChange * (1 - effectRatio);
      circle.targetRadius = Math.max(circle.originalRadius, circle.originalRadius + radiusChange);
    } else {
      circle.isHovered = false;
      circle.targetRadius = circle.originalRadius;
    }
  });
});

// Event listener for mouse leaving the window
document.addEventListener('mouseleave', () => {
  circles.forEach(circle => {
    circle.isHovered = false;
    circle.targetRadius = circle.originalRadius;
  });
});

// Event listener for window resize
window.addEventListener('resize', resizeAndRedraw);

// Initial setup
resizeAndRedraw();

// Vertical slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let currentSection = 0;
  let isThrottled = true;

  // Function to scroll to a specific section
  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    currentSection = index;
    sections.forEach((section, i) => {
      section.style.transform = `translateY(${(i - index) * 100}%)`;
    });
  }

  // Event listener for mouse wheel scroll
  document.addEventListener("wheel", (event) => {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => isThrottled = false, 1000);

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  });

  // Initial call to scroll to the current section
  scrollToSection(currentSection);
});

// Event listener for window resize to adjust canvas size
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
});

document.getElementById('whatnextButton').addEventListener('click', function() {
  window.location.href = 'whatnext.html';
});

//défilement mac

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelector('.menu-items');
  const contentItems = document.querySelectorAll('.content-item');
  const menuItemElements = document.querySelectorAll('.menu-item');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;

  function updateContent() {
      menuItemElements.forEach((item, index) => {
          item.classList.remove('previous', 'active', 'next');
          if (index === currentIndex) {
              item.classList.add('active');
          } else if (index === (currentIndex - 1 + menuItemElements.length) % menuItemElements.length) {
              item.classList.add('previous');
          } else if (index === (currentIndex + 1) % menuItemElements.length) {
              item.classList.add('next');
          }
      });

      contentItems.forEach((item, index) => {
          item.classList.toggle('active', index === currentIndex);
      });
  }

  leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : contentItems.length - 1;
      updateContent();
  });

  rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex < contentItems.length - 1) ? currentIndex + 1 : 0;
      updateContent();
  });

  menuItemElements.forEach((item, index) => {
      item.addEventListener('click', () => {
          currentIndex = index;
          updateContent();
      });
  });

  // Initialize the content display
  updateContent();
});

document.querySelectorAll('.scroll-down').forEach(item => {
  item.addEventListener('click', event => {
      const targetId = item.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const linkedinButton = document.getElementById('linkedinButton');
  const githubButton = document.getElementById('githubButton');
  const instagramButton = document.getElementById('instagramButton');
  const mailButton = document.getElementById('mailButton');

  linkedinButton.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/guillaume-laplume-8ba103117/', '_blank');
  });

  githubButton.addEventListener('click', () => {
      window.open('https://github.com/GlupyLoop?tab=repositories', '_blank');
  });

  instagramButton.addEventListener('click', () => {
      window.open('https://www.instagram.com/glupy.designs/', '_blank');
  });

  mailButton.addEventListener('click', () => {
      window.location.href = 'mailto:guillaume.laplume99@gmail.com';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const summaryElement = document.querySelector('.summary');
  const spanElement = summaryElement.querySelector('span');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  function updateSummary(entry) {
      if (entry.isIntersecting) {
          if (entry.target.id === 'section1') {
              summaryElement.style.display = 'none';
          } else {
              summaryElement.style.display = 'block';
              summaryElement.childNodes[1].nodeValue = `/${entry.target.getAttribute('data-summary')}`;
          }
      }
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          updateSummary(entry);
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("change", () => {
  menu.style.display = menuToggle.checked ? "block" : "none";
});
