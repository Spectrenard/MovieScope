import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div className="pt-16">
          {" "}
          {/* Espace pour la navbar fixe */}
          {children}
        </div>
      </body>
    </html>
  );
}
