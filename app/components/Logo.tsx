"use client";

import { PiPopcornBold } from "react-icons/pi";
import { Righteous, Space_Grotesk } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative">
        <PiPopcornBold className="w-6 md:w-8 h-9 text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]" />
        <div className="absolute inset-0 bg-red-600/10 blur-2xl rounded-full animate-pulse" />
      </div>

      <div className="flex items-baseline">
        <span className={`text-2xl md:text-3xl  ${righteous.className}`}>
          <span
            className="bg-gradient-to-r from-red-500 via-red-600 to-red-400 
            bg-clip-text text-transparent 
            drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            MOVIE
          </span>
          <span
            className="bg-gradient-to-r from-zinc-100 to-white/80
            bg-clip-text text-transparent
            drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            SCOPE
          </span>
        </span>

        <span
          className={`ml-2 text-[8px] ${spaceGrotesk.className} font-bold px-1.5 py-0.5 rounded-full 
          bg-gradient-to-r from-red-950/60 to-red-900/40
          text-red-400 border border-red-800/30 
          hover:from-red-900/60 hover:to-red-800/40 hover:text-red-300
          transition-all duration-300
          tracking-[0.2em]
          shadow-lg shadow-black/20`}
        >
          BETA
        </span>
      </div>
    </div>
  );
}
