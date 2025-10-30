import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testimonial section with parallax",
  description: "Testimonial section built with Next.js, Tailwind and Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 z-50 flex justify-end w-full gap-4 p-4">
          <Button asChild size="icon" aria-label="Github">
            <a
              href="https://github.com"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Github />
            </a>
          </Button>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
