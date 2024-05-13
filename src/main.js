import './assets/main.css'

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circleSize = 1; // Taille initiale des cercles
    const spacing = 40; // Espacement entre les cercles
    const maxEffectSize = 160; // Taille maximale de l'effet de la souris

    const circles = [];

    for (let y = 0; y < canvas.height; y += spacing) {
      for (let x = 0; x < canvas.width; x += spacing) {
        circles.push({ x, y, radius: circleSize });
      }
    }

    // Dessiner les cercles
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#D9D9D9';
        ctx.fill();
        ctx.closePath();
      });
    }

    // Fonction pour détecter le passage de la souris
    canvas.addEventListener('mousemove', function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      circles.forEach(circle => {
        const dx = circle.x - mouseX;
        const dy = circle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxEffectSize) {
          const effectRatio = distance / maxEffectSize;
          const maxRadiusChange = circleSize * 5; // Changement de rayon maximal

          const radiusChange = maxRadiusChange * (1 - effectRatio); 
          circle.radius = Math.max(circleSize, circleSize + radiusChange);
        } else if (circle.radius > circleSize) {
          circle.radius = Math.max(circleSize, circle.radius - 0.2);
        }
      });

      draw();
    });

    // Réinitialiser la taille des cercles lorsque la souris quitte le canvas
    canvas.addEventListener('mouseleave', function() {
        circles.forEach(circle => {
          circle.radius = circleSize;
        });
  
        draw();
      });

    draw();

    canvas.addEventListener('mouseleave', function() {
        circles.forEach(circle => {
          circle.radius = circleSize;
        });
  
        draw();
      });

    draw();
