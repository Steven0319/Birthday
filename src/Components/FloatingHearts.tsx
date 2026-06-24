import { FaHeart } from "react-icons/fa";
import React from "react";
import { IconContext } from "react-icons";
import { useState } from "react";

export const FloatingHearts = () => {
  type Heart = { left: number; duration: number; delay: number; size: number };

  const [hearts] = useState<Heart[]>(() =>
    Array.from({ length: 25 }).map(() => {
      const left = Math.random() * 100;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 8;
      const size = 12 + Math.random() * 24;
      return { left, duration, delay, size };
    })
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h, index) => {
        return (
          <IconContext.Provider
            key={index}
            value={{
              className: "absolute animate-float text-pink-500/30",
              style: {
                left: `${h.left}%`,
                bottom: "-50px",
                fontSize: `${h.size}px`,
                animationDuration: `${h.duration}s`,
                animationDelay: `${h.delay}s`,
              },
            }}
          >
            {React.createElement(FaHeart as unknown as React.ComponentType)}
          </IconContext.Provider>
        );
      })}
    </div>
  );
};