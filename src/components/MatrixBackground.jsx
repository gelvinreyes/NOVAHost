import { useEffect, useRef } from 'react';

const CHARACTERS =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ' +
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  ':;<>+-=~*#%$¥';

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let fontSize = 16;
    let columns = 0;
    let drops = [];
    let speeds = [];
    let lengths = [];
    let frameId = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 600 ? 13 : width < 1000 ? 15 : 17;
      columns = Math.ceil(width / fontSize);
      drops = new Array(columns);
      speeds = new Array(columns);
      lengths = new Array(columns);

      for (let i = 0; i < columns; i += 1) {
        drops[i] = Math.random() * (height / fontSize) * -1;
        speeds[i] = 0.009 + Math.random() * 0.025;
        lengths[i] = 8 + Math.floor(Math.random() * 24);
      }

      ctx.fillStyle = '#00030a';
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      if (!running) return;
      ctx.fillStyle = 'rgba(0, 3, 10, 0.055)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns; i += 1) {
        const x = i * fontSize + fontSize / 2;
        const headY = drops[i] * fontSize;
        const trailLength = lengths[i];

        for (let j = 0; j < trailLength; j += 1) {
          const y = headY - j * fontSize;
          if (y < -fontSize || y > height + fontSize) continue;

          let alpha = 1 - j / trailLength;
          alpha *= 0.72;

          if (j === 0) {
            ctx.fillStyle = 'rgba(115,155,220,0.88)';
          } else {
            const a = Math.max(0.025, alpha * 0.72);
            ctx.fillStyle = `rgba(18, 58, 115, ${a})`;
          }

          ctx.fillText(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)], x, y);
        }

        drops[i] += speeds[i];

        if (headY > height + trailLength * fontSize) {
          drops[i] = -Math.random() * (height / fontSize) * 0.45 - trailLength;
          speeds[i] = 0.009 + Math.random() * 0.025;
          lengths[i] = 8 + Math.floor(Math.random() * 24);
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    frameId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="matrix-bg" aria-hidden="true">
      <canvas ref={canvasRef} id="matrix-canvas" />
      <div id="matrix-overlay" />
    </div>
  );
}
