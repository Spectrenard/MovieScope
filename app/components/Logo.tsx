"use client";

import { motion } from "framer-motion";
import { RiMovie2Line } from "react-icons/ri";

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <RiMovie2Line className="w-10 h-10 relative text-white transform rotate-12" />
      </div>

      <h1 className="text-2xl font-bold">
        <span className="text-white tracking-widest">MOVIE</span>
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-widest ml-1">
          PULSE
        </span>
      </h1>
    </motion.div>
  );
}
