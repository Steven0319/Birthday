import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Wish {
  icon: IconType;
  text: string;
}

const wishes: Wish[] = [
  {
    icon: FaHeart,
    text: "Deseo verte sonreír todos los días de tu vida.",
  },
  {
    icon: FaStar,
    text: "Deseo que cumplas cada uno de tus sueños y metas.",
  },
  {
    icon: FaHeart,
    text: "Deseo acompañarte en cada paso importante de tu camino.",
  },
  {
    icon: FaHeart,
    text: "Deseo seguir creando recuerdos hermosos contigo.",
  },
  {
    icon: FaStar,
    text: "Deseo que nunca te falte felicidad, amor y tranquilidad.",
  },
  {
    icon: FaHeart,
    text: "Deseo seguir enamorándome de ti cada día un poco más.",
  },
];

export const Wishes = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Mis Deseos Para Ti ❤️
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wishes.map((wish, index) => {
            const Icon = wish.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
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
                <div className="mb-6 flex justify-center text-4xl text-pink-500">
                  <Icon aria-hidden={true} />
                </div>

                <p className="text-center text-lg text-gray-300">
                  {wish.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-semibold text-pink-400">
            Y mi mayor deseo...
          </p>

          <p className="mt-6 text-xl text-gray-300 md:text-2xl">
            Seguir construyendo una hermosa historia contigo ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};