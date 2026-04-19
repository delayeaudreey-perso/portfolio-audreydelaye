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
  title: "Audrey | Product & IT Consulting",
  description: "Consulting case studies across CRM, product, and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-stone-50/95 backdrop-blur">
          <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-700"
            >
              Audrey
            </Link>
            <div className="flex items-center gap-8 text-sm font-medium text-stone-600">
              <Link href="/" className="transition hover:text-stone-900">
                Home
              </Link>
              <Link href="/#insights" className="transition hover:text-stone-900">
  Insights
</Link>
              <Link href="/#contact" className="transition hover:text-stone-900">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
