import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "./chat/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechMurugan | Web & AI Solutions",
    template: "%s | TechMurugan",
  },
  description:
    "TechMurugan is a software developer providing website development, AI chatbots, and automation solutions in India.",
  keywords: [
    "TechMurugan",
    "web development",
    "AI chatbot",
    "software developer in India",
    "website design",
    "automation services",
    "React developer",
    "Next.js developer",
  ],
  authors: [{ name: "Murugan" }],
  creator: "Murugan",

  metadataBase: new URL("https://techmurugan.in"),

  openGraph: {
    title: "TechMurugan | Web & AI Solutions",
    description:
      "Professional website development and AI chatbot solutions by TechMurugan.",
    url: "https://techmurugan.in",
    siteName: "TechMurugan",
    images: [
      {
        url: "/og-image.png", // public/og-image.png irukkanum
        width: 1200,
        height: 630,
        alt: "TechMurugan - Web & AI Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TechMurugan | Web & AI Solutions",
    description:
      "Professional website development and AI chatbot solutions by TechMurugan.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
