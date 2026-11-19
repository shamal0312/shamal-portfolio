
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shamal Kawya | IT Undergraduate & Software Developer",
  description:
    "Portfolio of Shamal Kawya, an Information Technology undergraduate with interests in Software Development, Quality Assurance, Data Analytics, and Computer Networking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* NAVBAR - appears on every page */}
        <nav>
          <Link href="/" className="logo">
            Shamal.
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>

            {/* Temporarily hidden Experience tab */}
            {/* <Link href="/experience">Experience</Link> */}

            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
