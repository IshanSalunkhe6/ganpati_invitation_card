"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const YEARS = [2024, 2023, 2022];

const imagesByYear = {
  2024: ["/gallery/2024/1.jpg","/gallery/2024/2.jpg","/gallery/2024/3.jpg","/gallery/2024/4.jpg"],
  2023: ["/gallery/2023/1.jpg","/gallery/2023/2.jpg","/gallery/2023/3.jpg"],
  2022: ["/gallery/2022/1.jpg","/gallery/2022/2.jpg","/gallery/2022/3.jpg"],
};

export default function Gallery() {
  const [year, setYear] = useState(2024);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const startMarquee = () => {
    if (!trackRef.current) return;
    tweenRef.current?.kill();

    // if less than 2 images, don't animate
    const count = (imagesByYear[year] || []).length;
    if (count < 2) return;

    const total = trackRef.current.scrollWidth / 2;
    const DURATION = 42;

    tweenRef.current = gsap.fromTo(
      trackRef.current,
      { x: -total },
      {
        x: 0,
        duration: DURATION,
        ease: "none",
        repeat: -1,
        onRepeat: () => gsap.set(trackRef.current, { x: -total }),
      }
    );
  };

  useEffect(() => {
    startMarquee();
    return () => tweenRef.current?.kill();
  }, [year]);

  useEffect(() => {
    const onResize = () => startMarquee();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const imgs = imagesByYear[year] || [];

  return (
    <section className="py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white/75 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-rose-100/60 px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-[24px] sm:text-3xl font-extrabold text-red-700">Memories Gallery</h2>
            <p className="mt-1 sm:mt-2 text-gray-700 text-[13px] sm:text-base">
              Relive the beautiful moments of our Ganpati celebrations through the years
            </p>
          </div>

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

          <div className="relative overflow-hidden">
            <div ref={trackRef} className="flex flex-nowrap gap-3 sm:gap-4 will-change-transform px-1.5 sm:px-2">
              {[...imgs, ...imgs].map((src, i) => (
                <figure
                  key={`${src}-${i}`}
                  className="
                    relative            /* REQUIRED for next/image fill */
                    shrink-0
                    w-[220px] h-[260px] sm:w-[280px] sm:h-[320px]
                    rounded-2xl overflow-hidden bg-gray-200 shadow-lg
                  "
                >
                  <Image
                    src={src}
                    alt={`${year} Ganpati celebration photo ${i % imgs.length + 1}`}
                    fill
                    sizes="(max-width: 640px) 220px, 280px"
                    className="object-cover"   /* keeps box size fixed */
                    priority={i < 2}
                    draggable={false}
                  />
                </figure>
              ))}

              {imgs.length === 0 &&
                [...Array(6)].map((_, i) => (
                  <div
                    key={`ph-${i}`}
                    className="shrink-0 w-[220px] h-[260px] sm:w-[280px] sm:h-[320px] rounded-2xl bg-gray-200/80"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
