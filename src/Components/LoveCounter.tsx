import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

// Fix TypeScript JSX typing for react-icons
const Heart = FaHeart as unknown as React.FC<React.SVGProps<SVGSVGElement> & { color?: string }>;

const startDate = new Date("2026-02-05T00:00:00");

export const LoveCounter = () => {

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff < 0) return;

      const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCounter();

    const interval = setInterval(
      updateCounter,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <Heart color="#ec4899" />
          <h2 className="text-4xl font-bold md:text-5xl">
            Nuestro Tiempo Juntos
          </h2>
          <Heart color="#ec4899" />
        </div>

        <p className="mb-12 text-gray-400">
          Desde el 05.02.2026 ❤️
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <TimeCard
            value={time.days}
            label="Días"
          />

          <TimeCard
            value={time.hours}
            label="Horas"
          />

          <TimeCard
            value={time.minutes}
            label="Minutos"
          />

          <TimeCard
            value={time.seconds}
            label="Segundos"
          />
        </div>
      </motion.div>
    </section>
  );
};

interface TimeCardProps {
  value: number;
  label: string;
}

const TimeCard = ({
  value,
  label,
}: TimeCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
        rounded-3xl
        border
        border-pink-500/20
        bg-white/5
        p-8
        backdrop-blur-md
        shadow-xl
      "
    >
      <h3 className="text-5xl font-bold text-pink-400 md:text-6xl">
        {value}
      </h3>

      <p className="mt-3 text-gray-300">
        {label}
      </p>
    </motion.div>
  );
};