"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SoftBurstWeb({ fire, onDone = () => {}, count = 40 }) {
  const colors = [
    "rgba(255,82,82,0.9)",
    "rgba(255,193,7,0.9)",
    "rgba(76,175,80,0.9)",
    "rgba(33,150,243,0.9)",
    "rgba(156,39,176,0.9)",
    "rgba(255,87,34,0.9)",
  ];

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (fire) {
      const newParticles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        size: 5 + Math.random() * 8,
      }));
      setParticles(newParticles);
      const timeout = setTimeout(() => {
        setParticles([]);
        if (onDone) onDone();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [fire]);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.4 }}
            animate={{ opacity: 0, x: p.x, y: p.y, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
