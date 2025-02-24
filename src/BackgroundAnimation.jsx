import { useEffect } from "react";

const BackgroundAnimation = () => {
  useEffect(() => {
    console.log("Animation started");

    // Create and set up canvas
    const canvas = document.createElement("canvas");
    canvas.id = "gameBackground";
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStars = [];
    let mouseTrail = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(120);
    }

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.color = ["#ffffff", "#ffddaa", "#aaccff"][Math.floor(Math.random() * 3)]; // White, Warm Yellow, Soft Blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Twinkling effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.4) {
          this.twinkleSpeed *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color === "#ffffff" ? "255,255,255" : this.color === "#ffddaa" ? "255,221,170" : "170,204,255"}, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.length = Math.random() * 80 + 30;
        this.speed = Math.random() * 4 + 2;
        this.opacity = 1;
      }

      update() {
        this.x -= this.speed;
        this.y += this.speed;

        this.opacity -= 0.02;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y - this.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    class MouseTrail {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.opacity = 1;
      }

      update() {
        this.opacity -= 0.03;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    function createStars(count) {
      stars = Array.from({ length: count }, () => new Star());
      shootingStars = Array.from({ length: 2 }, () => new ShootingStar());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      shootingStars.forEach((s) => {
        s.update();
        s.draw();
      });

      // Draw mouse trail
      mouseTrail.forEach((trail, index) => {
        trail.update();
        trail.draw();
        if (trail.opacity <= 0) mouseTrail.splice(index, 1);
      });

      requestAnimationFrame(animate);
    }

    // Parallax Effect
    function parallaxEffect(event) {
      const { clientX, clientY } = event;
      const deltaX = (clientX / window.innerWidth - 0.5) * 3;
      const deltaY = (clientY / window.innerHeight - 0.5) * 3;
      stars.forEach((star) => {
        star.x += deltaX;
        star.y += deltaY;
      });
    }

    // Starburst Effect on Hover
    function hoverEffect(event) {
      const { clientX, clientY } = event;
      stars.forEach((star) => {
        const dx = star.x - clientX;
        const dy = star.y - clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          star.opacity = 1;
          star.size = Math.min(star.size + 0.3, 4);
        } else {
          star.size = Math.max(star.size - 0.1, 1);
        }
      });
    }

    // Mouse Trail Effect
    function mouseMoveEffect(event) {
      mouseTrail.push(new MouseTrail(event.clientX, event.clientY));
    }

    resizeCanvas();
    createStars(120);
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", parallaxEffect);
    window.addEventListener("mousemove", hoverEffect);
    window.addEventListener("mousemove", mouseMoveEffect);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", parallaxEffect);
      window.removeEventListener("mousemove", hoverEffect);
      window.removeEventListener("mousemove", mouseMoveEffect);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default BackgroundAnimation;
