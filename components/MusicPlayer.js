"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ src, isPlaying }) {
  const audioRef = useRef(null);
  const [isLeader, setIsLeader] = useState(false);
  const [needsGate, setNeedsGate] = useState(true); // show tap-gate until first interaction

  // mount/singleton
  useEffect(() => {
    if (typeof window === "undefined") return;

    // remember if user already unlocked in this tab (survives refresh)
    const unlocked = sessionStorage.getItem("__BGM_UNLOCKED") === "1";
    setNeedsGate(!unlocked);

    if (window.__BGM_AUDIO) {
      setIsLeader(false);
      audioRef.current = window.__BGM_AUDIO;
    } else {
      setIsLeader(true);
    }
  }, []);

  // publish leader and auto-unlock if we were already unlocked
  useEffect(() => {
    if (!isLeader || !audioRef.current) return;
    window.__BGM_AUDIO = audioRef.current;

    if (sessionStorage.getItem("__BGM_UNLOCKED") === "1") {
      const a = audioRef.current;
      a.muted = false;
      a.play().catch(() => {});
      setNeedsGate(false);
    }
  }, [isLeader]);

  // external play/pause control
  useEffect(() => {
    const a = window.__BGM_AUDIO || audioRef.current;
    if (!a) return;
    if (isPlaying) a.play().catch(() => {}); else a.pause();
  }, [isPlaying]);

  // one-time unlock handler (bound to the gate button)
  const unlock = () => {
    const a = window.__BGM_AUDIO || audioRef.current;
    if (!a) return;
    a.muted = false;
    a.play().catch(() => {});
    sessionStorage.setItem("__BGM_UNLOCKED", "1");
    setNeedsGate(false);
  };

  // only the leader renders the <audio>
  return (
    <>
      {isLeader && (
        <audio
          ref={audioRef}
          src={src}
          loop
          preload="auto"
          autoPlay
          muted       // required for autoplay
          playsInline // required for iOS Safari
        />
      )}

      {/* First-tap gate — invisible, covers screen until unlocked */}
      {needsGate && (
        <button
          onClick={unlock}
          className="fixed inset-0 z-[60] bg-transparent"
          aria-label="Enable sound"
        />
      )}
    </>
  );
}
