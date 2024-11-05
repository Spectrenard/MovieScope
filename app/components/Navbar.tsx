import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <NavLink href="/movies">Films</NavLink>
              <NavLink href="/upcoming">À venir</NavLink>
              <NavLink href="/top-rated">Top Films</NavLink>
              <NavLink href="/genres">Genres</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  );
}
