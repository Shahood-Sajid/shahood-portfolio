import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let codeSnippets = [];

    // Check if dark mode
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes/particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Dark blue in light mode, light blue in dark mode
        const color = isDarkMode() ? `rgba(96, 165, 250, ${this.opacity})` : `rgba(37, 99, 235, ${this.opacity + 0.2})`;
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    // Floating code snippets
    class CodeSnippet {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.text = this.getRandomCode();
        this.fontSize = Math.random() * 8 + 10;
      }

      getRandomCode() {
        const snippets = [
          'def train_model():',
          'async def predict()',
          'torch.nn.Module',
          'model.fit(X, y)',
          'np.array(data)',
          'return response',
          'await fetch(api)',
          'class NeuralNet:',
          'import tensorflow',
          'loss.backward()',
          'optimizer.step()',
          'self.attention',
          'hidden_layers',
          'activation=relu',
          'batch_size=32',
          'learning_rate',
          'transformer',
          'embeddings',
          'gradient',
          'API_KEY',
          'FastAPI()',
          'Redis.get()',
          'PostgreSQL',
          'Docker.run()',
          'async/await',
          'REST API',
          'GraphQL',
          'WebSocket',
        ];
        return snippets[Math.floor(Math.random() * snippets.length)];
      }

      update() {
        this.y -= this.speed;
        if (this.y < -20) {
          this.reset();
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px monospace`;
        // Dark purple in light mode, light purple in dark mode
        const color = isDarkMode() ? `rgba(139, 92, 246, ${this.opacity})` : `rgba(79, 70, 229, ${this.opacity + 0.15})`;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(canvas.width / 15));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Initialize code snippets
    for (let i = 0; i < 15; i++) {
      const snippet = new CodeSnippet();
      snippet.y = Math.random() * canvas.height;
      codeSnippets.push(snippet);
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Darker lines in light mode
            const lineColor = isDarkMode() ? `rgba(96, 165, 250, ${opacity})` : `rgba(37, 99, 235, ${opacity + 0.1})`;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update code snippets
      codeSnippets.forEach((snippet) => {
        snippet.update();
        snippet.draw();
      });

      // Draw connections
      drawConnections();

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
