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

  // Empêcher le défilement quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-r from-black/95 to-zinc-900/95 backdrop-blur-lg z-50">
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
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <NavLink href="/now-playing" icon={<BiTime size={22} />}>
              À l&apos;affiche
            </NavLink>
            <NavLink href="/top-rated" icon={<BiStar size={22} />}>
              Top
            </NavLink>
            <NavLink href="/genres" icon={<BiCategory size={22} />}>
              Genres
            </NavLink>
          </div>

          {/* Bouton menu hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Menu"
          >
            {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed top-16 inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-[300px] bg-zinc-900 shadow-xl transition-transform duration-300 ease-out overflow-hidden ${
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

          {/* Corps du menu */}
          <div className="py-4">
            <div className="px-4 py-2 text-sm text-white/60 uppercase">
              Menu
            </div>

            <MobileNavLink href="/now-playing" icon={<BiTime size={24} />}>
              À l&apos;affiche
            </MobileNavLink>
            <MobileNavLink href="/top-rated" icon={<BiStar size={24} />}>
              Top Films
            </MobileNavLink>
            <MobileNavLink href="/genres" icon={<BiCategory size={24} />}>
              Genres
            </MobileNavLink>
          </div>

          {/* Pied du menu */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>© 2024 Spectre</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
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

// NavLink pour desktop
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
      className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all duration-300"
    >
      <span className="text-white/80 group-hover:text-white transition-colors duration-300 ease-out">
        {icon}
      </span>
      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 ease-out">
        {children}
      </span>
      <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300 ease-out" />
    </Link>
  );
}

// Composant MobileNavLink amélioré
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
      className="flex items-center gap-4 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200"
    >
      <span className="text-white/60">{icon}</span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}
