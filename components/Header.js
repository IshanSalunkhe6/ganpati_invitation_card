"use client";
import { useState, useEffect } from "react";
import MusicToggle from "./MusicToggle";

export default function Header() {
  const [showHint, setShowHint] = useState(true);

  // Auto-hide after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative z-20 flex justify-end mx-auto max-w-screen-xl px-4 sm:px-6 pt-3 sm:pt-4">
      <div className="relative flex flex-col items-center">
        <MusicToggle />
        {showHint && (
          <div className="absolute top-12 bg-white/70 text-red-600 text-xs font-medium px-2 py-1 rounded-lg shadow-sm animate-bounce whitespace-nowrap">
            Tap to play 🎶
          </div>
        )}
      </div>
    </header>
  );
}
