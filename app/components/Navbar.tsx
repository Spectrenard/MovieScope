"use client";
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import {
  BiMovie,
  BiTime,
  BiStar,
  BiCategory,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-black/90 backdrop-blur-lg border-b border-white/5 z-50">
        <div className="h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="hover:scale-105 transition-transform duration-300 ease-out"
          >
            <Logo />
          </Link>

          {/* Barre de recherche - visible sur desktop */}
          <div className="hidden md:block flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink href="/now-playing" icon={<BiTime size={20} />}>
              À l&apos;affiche
            </NavLink>
            <NavLink href="/top-rated" icon={<BiStar size={20} />}>
              Top
            </NavLink>
            <NavLink href="/genres" icon={<BiCategory size={20} />}>
              Genres
            </NavLink>
          </div>

          {/* Bouton menu hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-full p-2 hover:bg-white/10 active:bg-white/20 transition-colors duration-200"
            aria-label="Menu"
          >
            {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-16 bottom-0 w-72 bg-zinc-900/95 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* En-tête du menu avec SearchBar */}
          <div className="p-4 border-b border-white/10 w-full">
            <div className="w-full">
              <SearchBar />
            </div>
          </div>

          {/* Menu principal */}
          <div className="py-2">
            <MobileNavLink href="/now-playing" icon={<BiTime size={22} />}>
              À l&apos;affiche
            </MobileNavLink>
            <MobileNavLink href="/top-rated" icon={<BiStar size={22} />}>
              Top Films
            </MobileNavLink>
            <MobileNavLink href="/genres" icon={<BiCategory size={22} />}>
              Genres
            </MobileNavLink>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>© 2024 Spectre</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 active:bg-white/20 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
    >
      <span className="text-white/60 group-hover:text-white transition-colors duration-200">
        {icon}
      </span>
      <span>{children}</span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all duration-200"
    >
      <span className="text-white/60">{icon}</span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}
