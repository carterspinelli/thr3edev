"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SparkleType = {
  id: string;
  createdAt: number;
  size: number;
  positionX: number;
  positionY: number;
};

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number | null>(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  const density = particleDensity || 100;

  const generateSparkle = (): SparkleType => {
    return {
      id: Math.random().toString(36).substring(2, 10),
      createdAt: Date.now(),
      size: Math.random() * (maxSize || 2 - (minSize || 0.5)) + (minSize || 0.5),
      positionX: Math.random() * canvasSize.width,
      positionY: Math.random() * canvasSize.height,
    };
  };

  const createSparkles = () => {
    const now = Date.now();
    const newSparkles = [];

    // Calculate number of sparkles based on canvas size and density
    const numberOfSparkles = Math.floor(
      (canvasSize.width * canvasSize.height) / (10000 / density)
    );

    // Create the new sparkles
    for (let i = 0; i < numberOfSparkles; i++) {
      newSparkles.push(generateSparkle());
    }
    setSparkles(newSparkles);
  };

  const drawSparkles = (sparkles: SparkleType[]) => {
    if (!context.current) return;

    // Clear the canvas
    context.current.clearRect(0, 0, canvasSize.width, canvasSize.height);

    // Draw each sparkle
    sparkles.forEach((sparkle) => {
      if (!context.current) return;

      context.current.fillStyle = particleColor || "white";
      context.current.beginPath();
      context.current.arc(
        sparkle.positionX,
        sparkle.positionY,
        sparkle.size,
        0,
        2 * Math.PI
      );
      context.current.fill();
    });
  };

  const updateSparkles = () => {
    drawSparkles(sparkles);
    animationRef.current = requestAnimationFrame(updateSparkles);
  };

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      const canvas = canvasRef.current;
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const devicePixelRatio = window.devicePixelRatio || 1;

      // Set canvas size to parent size, adjusted for device pixel ratio
      const width = parent?.offsetWidth || 100;
      const height = parent?.offsetHeight || 100;

      // Update canvas display size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Update canvas drawing buffer size to match display size adjusted for device pixel ratio
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      // Scale context according to device pixel ratio
      if (context.current) {
        context.current.scale(devicePixelRatio, devicePixelRatio);
      }

      setCanvasSize({
        width,
        height,
      });
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (canvasSize.width > 0 && canvasSize.height > 0) {
      createSparkles();
    }
  }, [canvasSize]);

  useEffect(() => {
    if (sparkles.length > 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      updateSparkles();
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [sparkles]);

  return (
    <div className={cn("h-full w-full", className)} style={{ background }}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        id={id}
      />
    </div>
  );
};