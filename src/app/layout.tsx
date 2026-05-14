import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Hardik Garg — Full-Stack Developer",
  description: "Crafting scalable realtime experiences, AI-integrated products, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100 selection:text-blue-900`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-x-hidden selection:bg-black/10">
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-[0.8] mix-blend-multiply pointer-events-none" />
        <div className="fixed inset-0 z-[-2] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white" />
        {children}
      </body>
    </html>
  );
}
