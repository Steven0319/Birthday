import { motion } from "framer-motion";
import { photos } from "../data/photos";

export const PhotoGallery = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
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
          Nuestros Recuerdos ❤️
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.03,
                rotate: 0,
              }}
              className={`
                rounded-3xl
                bg-white
                p-4
                shadow-2xl
                cursor-pointer
                overflow-hidden
                ${
                  index % 2 === 0
                    ? "-rotate-2"
                    : "rotate-2"
                }
              `}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="
                  w-full
                  max-h-125
                  rounded-2xl
                  object-contain
                  bg-black
                "
              />

              <p className="mt-4 text-center text-lg font-semibold text-gray-800">
                {photo.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};