import type { Metadata } from "next";
import React from "react";

import localFont from "next/font/local";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";

import "./globals.css";
import styles from "@/styles/Layout.module.css";
import Menu from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "Harc Wesnothért",
  description: "Magyar Wesnoth Közösségi Portál",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-adsense-account": "ca-pub-7900953467801418",
  },
};

const ebg = localFont({
  src: "./font/ebg.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <html lang="en">
        <body className={ebg.className}>
          <main className={styles.main}>
            <header>
              <div className={styles.fejlec}>
                <div className={styles.logo}>
                  <Image
                    src="/logo-hu_1.18.4.png"
                    alt="Hungarian Wesnoth Logo"
                    width={415}
                    height={189}
                    priority
                    className={styles.logoImg}
                  />
                </div>

                <nav>
                  <Menu />
                </nav>
              </div>
            </header>

            <section>
              <div className={styles.tartkozep}>
                <div className={styles.kozep}>{children}</div>
              </div>
            </section>

            <footer>
              <div className={styles.lablec}>
                <Footer />
              </div>
            </footer>
          </main>
        </body>
      </html>
    </React.StrictMode>
  );
}
