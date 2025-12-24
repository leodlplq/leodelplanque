import { GithubCircle, Linkedin } from "iconoir-react";
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
  title: "Léo",
  description: "This is the personal website of Léo DELPLANQUE!",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100`}
      >
        <header className="w-full flex items-center justify-center  gap-2 border-b border-gray-200 dark:border-gray-800">
          <div className="h-full p-4 mx-30 w-full  border-l border-r border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href={"/"} className="font-bold">
                Léo DELPLANQUE
              </Link>
              <Link
                href={"/blog"}
                className="p-1 px-3 rounded hover:bg-gray-50/5 transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:bg-gray-50/5 p-1 rounded transition-colors">
                <a
                  href="https://www.linkedin.com/in/l%C3%A9o-delplanque-80780b17a/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
              <div className="hover:bg-gray-50/5 p-1 rounded transition-colors">
                <a href="https://github.com/leodlplq" target="_blank">
                  <GithubCircle />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <div className="box-content absolute top-0 left-0 min-h-screen h-full w-30 repeating-gradient-lines border-r border-gray-200 dark:border-gray-800"></div>
          <main className="mx-30 p-2">{children}</main>
          <div className="box-content absolute top-0 right-0 min-h-screen h-full w-30 repeating-gradient-lines border-l border-gray-200 dark:border-gray-800"></div>
        </div>
      </body>
    </html>
  );
}
