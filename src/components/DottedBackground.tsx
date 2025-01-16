"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create dots
    const dots: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      velocity: number;
    }[] = [];
    const numberOfDots = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    for (let i = 0; i < numberOfDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        velocity: Math.random() * 0.15 + 0.05,
      });
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        // Use black for light theme, white for dark theme
        ctx.fillStyle =
          theme === "light"
            ? `rgba(0, 0, 0, ${dot.alpha})`
            : `rgba(255, 255, 255, ${dot.alpha})`;
        ctx.fill();

        // Update position and alpha
        dot.y -= dot.velocity;
        dot.alpha = Math.max(
          0.1,
          Math.min(0.5, dot.alpha + Math.sin(Date.now() / 1000) * 0.01)
        );

        // Reset position if dot goes off screen
        if (dot.y < -10) {
          dot.y = canvas.height + 10;
          dot.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Add theme to dependencies

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] bg-transparent pointer-events-none"
      style={{ position: "fixed" }}
    />
  );
};

export default DottedBackground;
