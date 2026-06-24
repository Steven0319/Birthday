import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicIcon = FaMusic as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const PauseIcon = FaPause as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const PlayIcon = FaPlay as React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      console.error(
        "No se encontró el archivo: public/music/song.mp3"
      );
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="./public/music/song.mp3"
        preload="auto"
        loop
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2,
          duration: 0.6,
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={toggleMusic}
          className="
            flex
            items-center
            gap-4
            rounded-full
            border
            border-pink-500/20
            bg-white/10
            px-6
            py-4
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <motion.div
            animate={
              isPlaying
                ? {
                    rotate: 360,
                  }
                : {
                    rotate: 0,
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
          >
            <span className="text-xl text-pink-400">
              <MusicIcon />
            </span>
          </motion.div>

          <span className="text-sm md:text-base">
            {isPlaying
              ? "Pausar Música"
              : "Nuestra Canción ❤️"}
          </span>

          {isPlaying ? (
            <span className="text-pink-400"><PauseIcon /></span>
          ) : (
            <span className="text-pink-400"><PlayIcon /></span>
          )}
        </button>
      </motion.div>
    </>
  );
};