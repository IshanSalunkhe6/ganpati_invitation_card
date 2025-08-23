"use client";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import MusicPlayer from "./MusicPlayer";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <button
        onClick={() => setPlaying(!playing)}
        className="p-2 rounded-full bg-white/70 shadow hover:scale-105 transition"
        title={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Volume2 className="text-red-600" /> : <VolumeX className="text-red-600" />}
      </button>

      {/* Attach the music player */}
      <MusicPlayer src="/music.mp3" isPlaying={playing} />
    </>
  );
}
