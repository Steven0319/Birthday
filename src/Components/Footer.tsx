import React from "react";
import { FaHeart } from "react-icons/fa";

// Fix typing mismatch: ensure FaHeart is treated as an SVG React component
const Heart = FaHeart as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export const Footer = () => {
  return (
    <footer className="border-t border-pink-500/10 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Heart className="text-pink-500" />

          <span className="text-lg font-semibold text-pink-300">
            Mi Princesa ❤️
          </span>

          <Heart className="text-pink-500" />
        </div>

        <p className="mx-auto max-w-2xl text-gray-400">
          Esta página fue creada con todo mi amor para celebrar
          tus 21 años y recordarte lo especial que eres para mí.
        </p>

        <div className="mt-8">
          <p className="text-pink-400">
            27 • 06 • 2026
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Desde el 05 • 02 • 2026 ❤️
          </p>
        </div>

        <div className="mt-10 h-px bg-linear-to-r from-transparent via-pink-500/30 to-transparent" />

        <p className="mt-8 text-sm text-gray-500">
          Hecho con ❤️ para la persona más importante de mi vida.
        </p>

        <p className="mt-2 text-xs text-gray-600">
          Te Amo Infinitamente ♾️❤️
        </p>
      </div>
    </footer>
  );
};