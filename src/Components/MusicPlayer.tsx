import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicIcon = FaMusic as React.ComponentType;
const PauseIcon = FaPause as React.ComponentType;
const PlayIcon = FaPlay as React.ComponentType;

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();

      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="./public/music/song.mp3"
        preload="auto"
        playsInline
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
                ? { rotate: 360 }
                : { rotate: 0 }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
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

          <span className="text-pink-400">
            {isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </span>
        </button>
      </motion.div>
    </>
  );
};