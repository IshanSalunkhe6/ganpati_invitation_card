"use client";
import Image from "next/image";
import Header from "@/components/Header";
import InvitationCard from "@/components/InvitationCard";

export default function HeroDesktop({ scrollToGallery }) {
  return (
    <div className="relative w-full">
      {/* Desktop background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-desktop.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Music Toggle pinned top-right */}
      <div className="absolute top-4 right-6 z-20">
        <Header />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-lg px-6 pt-10 min-h-[720px] flex flex-col items-center">
        <div className="w-full flex flex-col items-center text-center gap-5">
          <div className="relative w-56 h-56 rounded-full border-[8px] border-orange-500/90 shadow-2xl ring-4 ring-white/70 overflow-hidden">
            <Image
              src="/images/ganpati.jpg"
              alt="Ganpati 2025"
              fill
              sizes="224px"
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-1 text-lg leading-relaxed font-medium text-red-700/90">
            वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।
            <br className="hidden sm:block" />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>

          <div className="mt-1">
            <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-orange-600 drop-shadow-[0_3px_0_rgba(0,0,0,0.08)]">
              Ganesh Darshan 2025
            </h1>
            <div className="mx-auto mt-3 h-1 w-32 rounded-full bg-red-600/70" />
            <p className="mt-4 text-gray-900/80 text-lg">
              We cordially invite you &amp; your family for Ganesh Darshan
            </p>
          </div>

          <div className="w-full mt-8">
            <InvitationCard scrollToGallery={scrollToGallery} />
          </div>
        </div>
      </div>
    </div>
  );
}
