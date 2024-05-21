// main.js
"use strict";

// Import main CSS file
import './assets/main.css';

// Canvas setup
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Canvas effect variables
const circleSize = 1;
const spacing = 45;
const maxEffectSize = 250;
const circles = [];

// Initialize circles on the canvas
for (let y = 0; y < canvas.height; y += spacing) {
  for (let x = 0; x < canvas.width; x += spacing) {
    circles.push({ x, y, radius: circleSize, isHovered: false });
  }
}

// Function to draw circles
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.isHovered ? '#BA20D3' : '#D9D9D9';
    ctx.fill();
    ctx.closePath();
  });
}

// Event listener for mouse movement on the document
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
      const maxRadiusChange = circleSize * 5;
      const radiusChange = maxRadiusChange * (1 - effectRatio);
      circle.radius = Math.max(circleSize, circleSize + radiusChange);
    } else {
      circle.isHovered = false;
      circle.radius = circleSize;
    }
  });

  draw();
});

// Event listener for when the mouse leaves the window
document.addEventListener('mouseleave', () => {
  circles.forEach(circle => {
    circle.isHovered = false;
    circle.radius = circleSize;
  });

  draw();
});

// Initial draw call
draw();

// Vertical slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let currentSection = 0;
  let isThrottled = false;

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
  window.location.href = 'whatnext.html'; // Remplacez 'autrepage.html' par l'URL de votre autre page
});

