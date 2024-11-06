"use client";

import { PiPopcornBold } from "react-icons/pi";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="relative">
        <PiPopcornBold className="w-8 h-8 text-white" />
        <div className="absolute inset-0 bg-amber-100/30 blur-xl rounded-full animate-pulse" />
      </div>

      <div className="flex items-baseline">
        <span className="text-3xl font-black leading-none tracking-tight">
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
            Movie
          </span>
          <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Scope
          </span>
        </span>

        <span
          className="ml-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full 
          bg-gradient-to-r from-red-500/20 to-red-900/20 
          text-red-400 border border-red-500/30 
          hover:from-red-500/30 hover:to-red-900/30 hover:text-red-300
          transition-all duration-300"
        >
          beta
        </span>
      </div>
    </div>
  );
}
