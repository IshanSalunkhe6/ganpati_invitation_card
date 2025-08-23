"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ src, isPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src={src} loop preload="auto" />
  );
}
