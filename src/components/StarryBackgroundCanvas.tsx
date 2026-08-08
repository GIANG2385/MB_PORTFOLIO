import React, { useEffect, useRef } from 'react';

interface StarryBackgroundCanvasProps {
  className?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  size: number;
  alpha: number;
  maxLife: number;
  life: number;
  color: string;
  particles: Particle[];
}

export const StarryBackgroundCanvas: React.FC<StarryBackgroundCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Background Stars
    const stars: Star[] = [];
    const NUM_STARS = 160;

    // Shooting Stars array
    const shootingStars: ShootingStar[] = [];

    // Sparkle diamond stars (iconic MB 4-pointed star)
    let diamondPhase = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize background stars on resize
      stars.length = 0;
      for (let i = 0; i < NUM_STARS; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.6,
          baseAlpha: Math.random() * 0.6 + 0.3,
          alpha: Math.random(),
          twinkleSpeed: 0.01 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.15 ? '#ffffff' : '#e0f2fe',
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawn shooting star
    const spawnShootingStar = (
      customType?: 'top-left' | 'top-right' | 'bottom-left' | 'converge'
    ) => {
      const type = customType || (
        Math.random() < 0.45 ? 'top-left' :
        Math.random() < 0.8 ? 'top-right' : 'bottom-left'
      );

      let startX = 0;
      let startY = 0;
      let angle = 0;

      if (type === 'top-left') {
        startX = Math.random() * (width * 0.6);
        startY = Math.random() * (height * 0.3);
        angle = Math.PI / 6 + (Math.random() * 0.15 - 0.075); // ~30 deg downward right
      } else if (type === 'top-right') {
        startX = width * 0.4 + Math.random() * (width * 0.6);
        startY = Math.random() * (height * 0.3);
        angle = (Math.PI * 5) / 6 + (Math.random() * 0.15 - 0.075); // ~150 deg downward left
      } else {
        startX = Math.random() * (width * 0.3);
        startY = height * 0.4 + Math.random() * (height * 0.4);
        angle = -Math.PI / 6 + (Math.random() * 0.15 - 0.075); // upward right
      }

      const speed = 14 + Math.random() * 10;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      shootingStars.push({
        x: startX,
        y: startY,
        vx,
        vy,
        length: 180 + Math.random() * 120,
        size: 2.8 + Math.random() * 1.5,
        alpha: 1,
        life: 0,
        maxLife: 45 + Math.random() * 25,
        color: '#ffffff',
        particles: [],
      });
    };

    // Spawn dual converging stars (as seen in video frame 00:04)
    const spawnConvergingPair = () => {
      // Star 1 from top-left going down right
      shootingStars.push({
        x: width * 0.15,
        y: height * 0.1,
        vx: 15,
        vy: 11,
        length: 220,
        size: 3.2,
        alpha: 1,
        life: 0,
        maxLife: 50,
        color: '#ffffff',
        particles: [],
      });

      // Star 2 from top-right going down left
      shootingStars.push({
        x: width * 0.85,
        y: height * 0.1,
        vx: -15,
        vy: 11,
        length: 220,
        size: 3.2,
        alpha: 1,
        life: 0,
        maxLife: 50,
        color: '#ffffff',
        particles: [],
      });
    };

    // Interval to spawn shooting stars
    let lastSpawnTime = Date.now();
    const spawnInterval = 1800; // spawn every ~1.8s

    // Draw 4-pointed MB sparkle star
    const draw4PointStar = (
      cx: number,
      cy: number,
      outerRadius: number,
      innerRadius: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.shadowColor = '#66FFFF';
      ctx.shadowBlur = 18;

      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const r = i % 2 === 0 ? outerRadius : innerRadius;
        const a = (i * Math.PI) / 4;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Initial spawn
    spawnShootingStar('top-left');

    const render = () => {
      const now = Date.now();

      // Clear with rich MB Royal Blue color (#0012b3)
      ctx.fillStyle = '#0012b3';
      ctx.fillRect(0, 0, width, height);

      // Radial subtle glow in center/bottom to match MB aesthetic
      const bgGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGlow.addColorStop(0, 'rgba(0, 27, 183, 1)');
      bgGlow.addColorStop(1, 'rgba(0, 10, 88, 1)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Render background twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinklePhase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.35;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.fillStyle = s.color;
        ctx.globalAlpha = clampedAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      diamondPhase += 0.025;

      // Render upper right small sparkle star
      draw4PointStar(width * 0.88, height * 0.18, 12, 2.5, 0.6 + Math.cos(diamondPhase * 1.2) * 0.3);

      // Periodic Shooting Star Spawner
      if (now - lastSpawnTime > spawnInterval) {
        lastSpawnTime = now;
        if (Math.random() < 0.25) {
          spawnConvergingPair();
        } else {
          spawnShootingStar();
        }
      }

      // Update & Render Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += ss.vx;
        ss.y += ss.vy;

        // Fade out near end of life
        if (ss.life > ss.maxLife * 0.7) {
          ss.alpha = Math.max(0, 1 - (ss.life - ss.maxLife * 0.7) / (ss.maxLife * 0.3));
        }

        // Emit sparkling tail particles
        if (ss.alpha > 0.1) {
          for (let p = 0; p < 3; p++) {
            ss.particles.push({
              x: ss.x - ss.vx * Math.random() * 0.3,
              y: ss.y - ss.vy * Math.random() * 0.3,
              vx: (Math.random() - 0.5) * 1.5 - ss.vx * 0.05,
              vy: (Math.random() - 0.5) * 1.5 - ss.vy * 0.05,
              size: Math.random() * 2 + 0.8,
              alpha: ss.alpha * 0.8,
              decay: 0.03 + Math.random() * 0.04,
              color: Math.random() > 0.3 ? '#ffffff' : '#99ffff',
            });
          }
        }

        // Draw meteor trail gradient line
        const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length;
        const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.alpha})`);
        grad.addColorStop(0.2, `rgba(220, 245, 255, ${ss.alpha * 0.8})`);
        grad.addColorStop(0.6, `rgba(100, 220, 255, ${ss.alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(0, 27, 183, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = ss.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Draw intense glowing head flare
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.alpha})`;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 1.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw 4-point cross flare at head
        draw4PointStar(ss.x, ss.y, ss.size * 5, ss.size * 0.8, ss.alpha);
        ctx.restore();

        // Update & Render Tail Particles
        for (let p = ss.particles.length - 1; p >= 0; p--) {
          const pt = ss.particles[p];
          pt.x += pt.vx;
          pt.y += pt.vy;
          pt.alpha -= pt.decay;

          if (pt.alpha <= 0) {
            ss.particles.splice(p, 1);
            continue;
          }

          ctx.fillStyle = pt.color;
          ctx.globalAlpha = Math.max(0, pt.alpha);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Remove dead shooting star
        if (ss.life >= ss.maxLife || ss.alpha <= 0) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // User interaction: click to spawn custom shooting star
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Spawn shooting star aimed at or starting near click location
      shootingStars.push({
        x: clickX - 150,
        y: clickY - 100,
        vx: 16,
        vy: 11,
        length: 220,
        size: 3.5,
        alpha: 1,
        life: 0,
        maxLife: 45,
        color: '#ffffff',
        particles: [],
      });
    };

    window.addEventListener('click', handleCanvasClick);
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto w-full h-full ${className}`}
    />
  );
};
