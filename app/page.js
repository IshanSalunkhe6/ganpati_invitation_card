"use client";
import { useRef } from "react";
import HeroMobile from "@/components/HeroMobile";
import HeroDesktop from "@/components/HeroDesktop";
import Gallery from "@/components/Gallery";

export default function Page() {
  const galleryRef = useRef(null);
  const scrollToGallery = () =>
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="relative overflow-x-hidden">
      {/* Mobile hero */}
      <section className="relative isolate sm:hidden">
        <HeroMobile scrollToGallery={scrollToGallery} />
      </section>

      {/* Desktop hero */}
      <section className="relative isolate hidden sm:block">
        <HeroDesktop scrollToGallery={scrollToGallery} />
      </section>

      {/* Gallery: immediately after hero on mobile */}
      <section ref={galleryRef} className="relative z-10 mt-0 sm:mt-12">
        <div className="mx-auto max-w-screen-xl px-0 sm:px-6">
          <Gallery />
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
