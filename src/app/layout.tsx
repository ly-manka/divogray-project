import type { Metadata } from "next";
import { Oswald, Lobster } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { MaxResponsiveBlock } from "@/components/MaxResponsiveBlock/MaxResponsiveBlock";
import { Footer } from "@/components/Footer/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Дивограй",
  description: "Найкращі мобільні ігри",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lobster.variable} ${oswald.variable} antialiased`}
      >
        <div>
          <div className="fixed left-0 right-0 z-10">
            <div className="content-limit">
              <Header />
            </div>
          </div>

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}

//https://uk.wix.com/website-template/view/html/2948

