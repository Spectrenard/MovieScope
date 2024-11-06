"use client";

import Link from "next/link";
import { PiPopcornBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { BiTime, BiStar, BiCategory } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col gap-16 md:flex md:flex-row md:justify-between">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <PiPopcornBold className="w-8 h-8 text-white" />
              <span className="text-2xl font-black">
                <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
                  MovieScope
                </span>
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              Découvrez les meilleurs films et restez à jour avec les dernières
              sorties cinématographiques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/now-playing" icon={<BiTime />}>
                À l&apos;affiche
              </FooterLink>
              <FooterLink href="/top-rated" icon={<BiStar />}>
                Top Films
              </FooterLink>
              <FooterLink href="/genres" icon={<BiCategory />}>
                Genres
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2024 MovieScope. Tous droits réservés.
            </p>
            <p className="text-sm text-white/40">
              Made by{" "}
              <a
                href="https://elyesasahin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Spectre
              </a>{" "}
              with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors"
      >
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
