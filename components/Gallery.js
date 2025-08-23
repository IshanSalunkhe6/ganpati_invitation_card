"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

// ✅ GSAP 3.13+ includes ModifiersPlugin in core
const { ModifiersPlugin } = gsap;
gsap.registerPlugin(ModifiersPlugin);

const YEARS = [2024, 2023, "Previous Years"];

const imagesByYear = {
  2024: ["/gallery/2024/1.jpg","/gallery/2024/2.jpg","/gallery/2024/3.jpg","/gallery/2024/4.jpg"],
  2023: ["/gallery/2023/1.jpg","/gallery/2023/2.jpg","/gallery/2023/3.jpg"],
  "Previous Years": ["/gallery/Previous_years/1.jpg","/gallery/Previous_years/2.jpg","/gallery/Previous_years/3.jpg"],
};

export default function Gallery() {
  const [year, setYear] = useState(2024);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const SPEED = 45; // px/sec

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const total = el.scrollWidth / 2;
    if (total === 0) return;

    const duration = total / SPEED;

    tweenRef.current = gsap.to(el, {
      x: `-=${total}`,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const n = parseFloat(x);
          const r = ((n % total) + total) % total;
          return `${-r}px`;
        },
      },
    });

    return () => tweenRef.current?.kill();
  }, []);

  // 🔹 Resume animation if tab becomes active again (mobile fix)
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden && tweenRef.current) {
        tweenRef.current.play();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const imgs = imagesByYear[year] || [];

  return (
    <section className="py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white/75 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-rose-100/60 px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-[24px] sm:text-3xl font-extrabold text-red-700">
              Memories Gallery
            </h2>
            <p className="mt-1 sm:mt-2 text-gray-700 text-[13px] sm:text-base">
              Relive the beautiful moments of our Ganpati celebrations through the years
            </p>
          </div>

          {/* Year Buttons */}
          <div className="flex justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            {YEARS.map((y) => {
              const active = y === year;
              return (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={[
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition",
                    active
                      ? "text-white bg-gradient-to-r from-red-600 to-orange-500 shadow-md shadow-red-500/25"
                      : "text-red-700 bg-white border border-red-200 hover:border-red-300",
                  ].join(" ")}
                >
                  <span className="mr-2">📅</span>{y}
                </button>
              );
            })}
          </div>

          {/* Track */}
          <div className="relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex flex-nowrap gap-3 sm:gap-4 will-change-transform px-1.5 sm:px-2"
            >
              {[...imgs, ...imgs].map((src, i) => (
                <figure
                  key={`${src}-${i}`}
                  className="relative shrink-0 w-[220px] h-[260px] sm:w-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-gray-200 shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`${year} Ganpati celebration photo ${i % imgs.length + 1}`}
                    fill
                    sizes="(max-width: 640px) 220px, 280px"
                    className="object-cover"
                    priority={i < 2}
                    draggable={false}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
