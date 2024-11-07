import Head from "next/head";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Head>
        <title>MovieScope - Découvrez votre prochain film</title>
        <meta
          name="description"
          content="MovieScope est une application web moderne de découverte de films, conçue pour aider les utilisateurs à trouver facilement leur prochain film à regarder."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
