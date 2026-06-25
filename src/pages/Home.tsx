import { useState } from "react";

import { Hero } from "../Components/Hero";
import { LoveCounter } from "../Components/LoveCounter";
import { PhotoGallery } from "../Components/PhotoGallery";
import { LoveLetter } from "../Components/LoveLetter";
import { Wishes } from "../Components/Wishes";
import { FinalScene } from "../Components/FinalScene";
import { Footer } from "../Components/Footer";
import { FloatingHearts } from "../Components/FloatingHearts";
import { MusicPlayer } from "../Components/MusicPlayer";

export const Home = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black text-white">
      <FloatingHearts />
      <MusicPlayer />

      {!entered ? (
        <Hero onEnter={() => setEntered(true)} />
      ) : (
        <>
          <LoveCounter />
          <PhotoGallery />
          <LoveLetter />
          <Wishes />
          <FinalScene />
          <Footer />
        </>
      )}
    </div>
  );
};