import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
