"use client";
import Image from "next/image";
import Header from "@/components/Header";
import InvitationCard from "@/components/InvitationCard";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

// Fonts (component-scoped; you can move to layout if you prefer global)
const devanagari = Noto_Serif_Devanagari({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function HeroMobile({ scrollToGallery }) {
  return (
    <div className="relative w-full">
      {/* Background (keep full artwork visible) */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-mobile.jpg"
          alt=""
          fill
          priority
          className="object-contain object-top"
          sizes="100vw"
        />
      </div>

      {/* Exact 9:16 height so everything stays inside the art */}
      <div
        className="
          relative z-10 mx-auto max-w-screen-md px-5
          h-[calc(100svw*1.7778)]
          flex flex-col justify-between
        "
      >
        {/* Top: music button */}
        <div className="pt-[env(safe-area-inset-top)]">
          <Header />
        </div>

        {/* Middle: arranged & refined */}
        <div className="flex flex-col items-center text-center -translate-y-1">
        {/* Ganpati image slightly higher */}
        <div className="relative w-28 h-28 -translate-y-2 rounded-full border-[4px] border-orange-500/90 shadow-2xl ring-4 ring-white/70 overflow-hidden">
            <Image
            src="/images/ganpati.jpg"
            alt="Ganpati 2025"
            fill
            sizes="112px"
            className="object-cover"
            priority
            />
        </div>

        {/* Shloka */}
        <p className="mt-1 text-[13px] leading-[1.35] font-semibold text-red-800/90 drop-shadow-[0_1px_0_rgba(255,255,255,0.45)]">
            वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>

        {/* Title */}
        <div className="mt-2">
            <h1 className="text-[32px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-orange-600 leading-tight">
            Ganesh Darshan
            </h1>
            <h2 className="text-[30px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-orange-600 leading-tight">
            2025
            </h2>
            <div className="mx-auto mt-2 h-[3px] w-20 rounded-full bg-red-600/80" />
        </div>

        {/* Invitation line */}
        <p className="mt-3 text-[15px] text-gray-900/90 leading-snug px-3">
            We cordially invite you &amp; your family for <br />
            a blissful celebration of Lord Ganesha
        </p>
        </div>


        {/* Bottom: invitation card pinned fully inside the bg */}
        <div className="w-full mb-2">
          <InvitationCard scrollToGallery={scrollToGallery} />
        </div>
      </div>
    </div>
  );
}
