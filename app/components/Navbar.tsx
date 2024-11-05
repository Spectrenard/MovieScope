import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { BiMovie, BiTime, BiStar, BiCategory } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black/95 backdrop-blur-lg z-50 border-b border-white/5">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Logo />
          </Link>

          <SearchBar />

          <div className="flex items-center gap-2">
            <NavLink href="/now-playing" icon={<BiTime size={20} />}>
              À l'affiche
            </NavLink>
            <NavLink href="/top-rated" icon={<BiStar size={20} />}>
              Top
            </NavLink>
            <NavLink href="/genres" icon={<BiCategory size={20} />}>
              Genres
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
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
      className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
    >
      <span className="text-white/70 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
        {children}
      </span>
    </Link>
  );
}
