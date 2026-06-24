import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import type { ComponentType, SVGProps } from "react";

const HeartIcon = FaHeart as ComponentType<SVGProps<SVGSVGElement>>;

interface HeroProps {
  onEnter: () => void;
}

export const Hero = ({ onEnter }: HeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Blur decorativo */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <span className="text-7xl text-pink-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
            <HeartIcon />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-pink-300 tracking-[0.4em] uppercase"
        >
          Feliz Cumpleaños
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-6 text-6xl font-bold md:text-8xl"
        >
          Mi Princesa ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-2xl"
        >
          Hoy es un día especial porque el mundo celebra el nacimiento de una
          persona increíble. Esta pequeña sorpresa está hecha con todo mi amor
          para ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <button
            onClick={onEnter}
            className="group rounded-full border border-pink-500/50 bg-pink-500/20 px-10 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-pink-500/30"
          >
            <span className="flex items-center gap-3">
              Abrir mi corazón
              <span className="transition-transform duration-300 group-hover:scale-125">
                <HeartIcon />
              </span>
            </span>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 text-sm text-gray-400"
        >
          27 • 06 • 2026
        </motion.p>
      </div>
    </section>
  );
};
