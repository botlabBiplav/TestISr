import React, { useEffect } from 'react';

const CanvasComponent = ({
  radiusIncrease = 0.5,
  glowColor = '#fff',
  glowOpacity = 0.5,
  glowSize = 20,
  breathingSpeed = 0.005,
}) => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const colors = ['#fff'];
    const dotsHolder = [];

    const dots = function () {
      this.xPos = Math.random() * canvas.width;
      this.yPos = Math.random() * canvas.height;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.baseRadius = Math.random() * 3; // Base radius
      this.currentRadius = this.baseRadius;
      this.radiusDirection = 1; // Consistent direction
      this.glowOpacity = glowOpacity;
      this.glowSize = glowSize;
      this.breathingSpeed = Math.random() * (breathingSpeed) + (breathingSpeed / 2); // Random speed
      this.vx = Math.cos(this.baseRadius) / 6;
      this.vy = Math.sin(this.baseRadius) / 6;
    };

    dots.draw = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let c = 0; c < dotsHolder.length; c++) {
        const dot = dotsHolder[c];
        context.beginPath();

        // Breathing effect: increase/decrease radius with random speed
        dot.currentRadius += dot.radiusDirection * dot.breathingSpeed;
        if (dot.currentRadius >= dot.baseRadius + radiusIncrease || dot.currentRadius <= dot.baseRadius - radiusIncrease) {
          dot.radiusDirection *= -1; // Toggle direction
        }

        // Ensure radius is never negative
        dot.currentRadius = Math.max(dot.currentRadius, 0);

        // Glow effect
        context.shadowColor = glowColor;
        context.shadowBlur = dot.glowSize;
        context.globalAlpha = dot.glowOpacity;

        // Drawing the dot
        context.fillStyle = dot.color;
        dot.xPos += dot.vx;
        dot.yPos += dot.vy;
        if (dot.xPos < -50) { dot.xPos = canvas.width + 50; }
        if (dot.yPos < -50) { dot.yPos = canvas.height + 50; }
        if (dot.xPos > canvas.width + 50) { dot.xPos = -50; }
        if (dot.yPos > canvas.height + 50) { dot.yPos = -50; }
        context.arc(dot.xPos, dot.yPos, dot.currentRadius, 0, 2 * Math.PI, false);
        context.fill();
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      dots.draw();
    };

    for (let i = 0; i < 100; i++) {
      dotsHolder.push(new dots());
    }

    /* REQUEST ANIMATION FRAME POLYFILL */
    (function () {
      let lastTime = 0;
      const vendors = ['ms', 'moz', 'webkit', 'o'];
      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] ||
          window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
          const currTime = new Date().getTime();
          const timeToCall = Math.max(0, 16 - (currTime - lastTime));
          const id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
      }
    })();

    animate();

    return () => {
      // Clean up if necessary
    };
  }, [radiusIncrease, glowColor, glowOpacity, glowSize, breathingSpeed]);

  return <canvas id="canvas"></canvas>;
};

export default CanvasComponent;
