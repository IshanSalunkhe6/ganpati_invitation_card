"use client";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import MusicPlayer from "./MusicPlayer";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(true); // start as "playing" (muted until unlock)

  const toggle = () => {
    const a = window.__BGM_AUDIO;
    if (a) {
      a.muted = false; // in case user hits toggle first
      if (playing) a.pause(); else a.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      <button
        onClick={toggle}
        className="p-2 rounded-full bg-white/70 shadow hover:scale-105 transition"
        title={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Volume2 className="text-red-600" /> : <VolumeX className="text-red-600" />}
      </button>

      <MusicPlayer src="/music.mp3" isPlaying={playing} />
    </>
  );
}
