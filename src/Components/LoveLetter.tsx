import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import type { ComponentType } from "react";

const HeartIcon = FaHeart as ComponentType<{ size?: string | number; color?: string }>;

export const LoveLetter = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
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
            duration: 1,
          }}
          className="
            rounded-[40px]
            border
            border-pink-500/20
            bg-white/5
            p-8
            backdrop-blur-xl
            shadow-2xl
            md:p-16
          "
        >
          <div className="mb-10 flex justify-center">
            <HeartIcon size={60} color="#ec4899" />
          </div>

          <h2 className="mb-12 text-center text-5xl font-bold">
            Una Carta Para Ti 💌
          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-300 md:text-xl">
            <p>Mi Princesa ❤️</p>

            <p>
              Hoy es un día muy especial porque celebramos tu vida,
              celebramos tu existencia y celebramos a la maravillosa
              mujer que eres.
            </p>

            <p>
              Desde que llegaste a mi vida, muchas cosas cambiaron.
              Los días comenzaron a sentirse más bonitos, las sonrisas
              más sinceras y los sueños mucho más emocionantes.
            </p>

            <p>
              Gracias por cada conversación, por cada risa, por cada
              momento compartido y por todos esos pequeños detalles
              que hacen que cada día contigo sea único.
            </p>

            <p>
              Quiero que recuerdes siempre lo increíble que eres.
              Tu forma de ser, tu corazón, tu sonrisa y todo aquello
              que te hace especial son algunas de las razones por las
              que me siento tan afortunado de tenerte en mi vida.
            </p>

            <p>
              Hoy cumples 21 años y deseo que este nuevo capítulo esté
              lleno de felicidad, salud, éxitos, aventuras y sueños
              cumplidos. Deseo verte alcanzar cada meta que te propongas
              y estar a tu lado para celebrar cada logro.
            </p>

            <p>
              Desde aquel 05 de febrero de 2026 comenzamos una historia
              que para mí significa muchísimo. Una historia llena de
              momentos hermosos que espero seguir escribiendo contigo
              durante mucho tiempo.
            </p>

            <p>
              Gracias por existir.
              Gracias por elegirme.
              Gracias por confiar en mí.
              Gracias por permitirme amarte.
            </p>

            <p>
              No importa cuántos días pasen, siempre habrá algo que
              admirar en ti, algo que me haga sonreír y algo que me
              recuerde lo afortunado que soy de compartir mi vida contigo.
            </p>

            <p>
              Espero que hoy sonrías muchísimo, que disfrutes cada
              instante y que recuerdes lo amada que eres.
            </p>

            <div className="pt-8 text-center">
              <p className="mb-4 text-2xl font-semibold text-pink-400">
                Feliz Cumpleaños ❤️
              </p>

              <p className="text-xl text-gray-200">
                Mi Princesa
              </p>

              <p className="mt-8 text-3xl font-bold text-pink-500">
                Te Amo Infinitamente ♾️❤️
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};