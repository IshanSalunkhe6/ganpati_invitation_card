"use client";
import { Calendar, MapPin } from "lucide-react";

export default function InvitationCard({ scrollToGallery }) {
  return (
    <div className="rounded-2xl border border-red-100/60 bg-white/90 backdrop-blur-md shadow-xl p-4 sm:p-7">
      <div className="space-y-4 sm:space-y-5">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 grid place-items-center w-8 h-8 rounded-full bg-orange-50 ring-1 ring-orange-200">
            <Calendar className="size-4 sm:size-5 text-orange-600" />
          </div>
          <p className="text-[15px] sm:text-base text-gray-800 leading-6">
            <span className="font-semibold text-gray-900">Date:</span>{" "}
            27th &amp; 28th August, 2025
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 grid place-items-center w-8 h-8 rounded-full bg-rose-50 ring-1 ring-rose-200">
            <MapPin className="size-4 sm:size-5 text-rose-600" />
          </div>
          <p className="text-[15px] sm:text-base text-gray-800 leading-6">
            <span className="font-semibold text-gray-900">Venue:</span>{" "}
            17/B room no.13 Suvarnarekha plot no.6,Nagari Nivara Parsishad,Dindoshi, Goregaon (E),Mharashtra - 400063
          </p>
        </div>

        <hr className="border-gray-200/70" />
        <p className="text-[13px] sm:text-sm text-gray-700">🙏 Regards: Salunkhe Family</p>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 justify-center">
        <a
          href="https://maps.app.goo.gl/d5BjMHKVkpmLa7pq5"
          target="_blank"
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition"
        >
          <span className="mr-2">📍</span> View Location
        </a>
        <button
          onClick={scrollToGallery}
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-red-700 bg-white hover:bg-rose-50 border-2 border-red-300 shadow-sm transition"
        >
          <span className="mr-2">📷</span> Gallery
        </button>
      </div>
    </div>
  );
}
