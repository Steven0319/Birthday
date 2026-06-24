import React from "react";
import type { IconBaseProps } from "react-icons";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const HeartIcon = FaHeart as React.ComponentType<IconBaseProps>;

export const HeartScene = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute h-125 w-125 rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Partículas decorativas */}
      <div className="absolute top-20 left-20 h-4 w-4 rounded-full bg-pink-400 animate-pulse" />
      <div className="absolute top-40 right-32 h-3 w-3 rounded-full bg-rose-400 animate-pulse" />
      <div className="absolute bottom-40 left-32 h-5 w-5 rounded-full bg-pink-300 animate-pulse" />
      <div className="absolute bottom-20 right-20 h-4 w-4 rounded-full bg-rose-300 animate-pulse" />

      {/* Corazón */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
          <div className="
            text-pink-500
            drop-shadow-[0_0_80px_rgba(236,72,153,0.9)]
          ">
          <HeartIcon size={320} />
        </div>

        {/* Texto central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl font-bold md:text-5xl"
          >
            Tú y Yo ❤️
          </motion.h2>

          <p className="mt-4 text-sm text-pink-100 md:text-lg">
            Desde el 05.02.2026
          </p>
        </div>
      </motion.div>
    </section>
  );
};