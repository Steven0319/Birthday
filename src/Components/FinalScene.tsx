import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

// Fix TSX typing for react-icons in some TS configurations
const Heart = FaHeart as unknown as React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: number }
>;

export const FinalScene = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      {/* Glow de fondo */}
      <div className="absolute h-175 w-175 rounded-full bg-pink-500/20 blur-[150px]" />

      {/* Corazones decorativos */}
      <div className="absolute top-20 left-10 text-pink-500/20">
        <Heart size={80} />
      </div>

      <div className="absolute bottom-20 right-10 text-pink-500/20">
        <Heart size={120} />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="relative z-10 max-w-5xl text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mb-10 flex justify-center"
        >
          <span
            className="
              text-pink-500
              drop-shadow-[0_0_60px_rgba(236,72,153,0.9)]
            "
            aria-hidden
          >
            <Heart size={140} />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mb-8
            text-5xl
            font-bold
            md:text-8xl
          "
        >
          ❤️ FELIZ CUMPLEAÑOS ❤️
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            mb-12
            text-3xl
            text-pink-300
            md:text-5xl
          "
        >
          Mi Princesa
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="
            mx-auto
            max-w-3xl
            space-y-6
            text-lg
            leading-8
            text-gray-300
            md:text-xl
          "
        >
          <p>Gracias por existir.</p>

          <p>Gracias por cada sonrisa que ilumina mis días.</p>

          <p>Gracias por cada recuerdo que hemos construido juntos.</p>

          <p>Gracias por formar parte de mi vida.</p>

          <p>Gracias por permitirme amarte.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-20"
        >
          <p className="text-4xl font-bold text-pink-400 md:text-6xl">
            Te Amo Infinitamente ♾️❤️
          </p>

          <p className="mt-8 text-lg text-gray-400">05 • 02 • 2026</p>

          <p className="mt-2 text-gray-500">Nuestro comienzo ❤️</p>
        </motion.div>
      </motion.div>
    </section>
  );
};
