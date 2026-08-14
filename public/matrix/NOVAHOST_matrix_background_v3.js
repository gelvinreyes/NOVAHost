// NOVAHOST Matrix Background
// Canvas digital rain
// Color: #123A73
// Velocidad: 10% de la versión actual (2% de la versión original)

(() => {
  "use strict";

  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const characters =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ" +
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    ":;<>+-=~*#%$¥";

  const matrixBlue = "#123A73";

  let width;
  let height;
  let fontSize;
  let columns;
  let drops;
  let speeds;
  let lengths;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    fontSize = width < 600 ? 13 : width < 1000 ? 15 : 17;
    columns = Math.ceil(width / fontSize);

    drops = new Array(columns);
    speeds = new Array(columns);
    lengths = new Array(columns);

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * (height / fontSize) * -1;

      // 10% de la velocidad de la versión actual:
      // versión actual: 0.09 - 0.34
      // nueva:           0.009 - 0.034
      speeds[i] = 0.009 + Math.random() * 0.025;

      lengths[i] = 8 + Math.floor(Math.random() * 24);
    }
  }

  function draw() {
    // Fade lento y suave para conservar el rastro de la lluvia.
    ctx.fillStyle = "rgba(0, 3, 10, 0.055)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let i = 0; i < columns; i++) {
      const x = i * fontSize + fontSize / 2;
      const headY = drops[i] * fontSize;
      const trailLength = lengths[i];

      for (let j = 0; j < trailLength; j++) {
        const y = headY - j * fontSize;

        if (y < -fontSize || y > height + fontSize) continue;

        let alpha = 1 - j / trailLength;
        alpha *= 0.72;

        if (j === 0) {
          // Cabeza ligeramente más clara para mantener el efecto visual.
          ctx.fillStyle = "rgba(115,155,220,0.88)";
        } else {
          // Azul oscuro NOVAHOST.
          const a = Math.max(0.025, alpha * 0.72);
          ctx.fillStyle = `rgba(18, 58, 115, ${a})`;
        }

        const char =
          characters[Math.floor(Math.random() * characters.length)];

        ctx.fillText(char, x, y);
      }

      drops[i] += speeds[i];

      if (headY > height + trailLength * fontSize) {
        drops[i] =
          -Math.random() * (height / fontSize) * 0.45 - trailLength;

        speeds[i] = 0.009 + Math.random() * 0.025;
        lengths[i] = 8 + Math.floor(Math.random() * 24);
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });

  resize();

  ctx.fillStyle = "#00030a";
  ctx.fillRect(0, 0, width, height);

  requestAnimationFrame(draw);
})();
