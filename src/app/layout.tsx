import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { ToastProvider } from "@/components/ToastProvider";
import TargetCursor from "@/components/TargetCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Federico González Salomón | Full-Stack Developer",
  description: "Full-stack developer specializing in React, TypeScript, Java and many more technologies. Explore my portfolio to see my projects and skills in modern web development.",
  applicationName: "Federico González Salomón Portfolio",
  keywords: "Full-Stack Developer, React, TypeScript, Web Development, Software Engineer, Frontend, Backend, Portfolio, Java",
  authors: [{ name: "Federico González Salomón" }],
  creator: "Federico González Salomón",
  publisher: "Federico González Salomón",
  openGraph: {
    title: "Federico González Salomón | Full-Stack Developer",
    description: "Interactive portfolio showcasing projects and skills.",
    url: "https://federicogs.vercel.app", // Replace with your actual domain
    siteName: "Federico González Salomón Portfolio",
    images: [
      {
        url: "/",
        width: 1200,
        height: 630,
        alt: "Federico González Salomón - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico González Salomón | Full-Stack Developer",
    description: "Interactive portfolio showcasing projects and skills.",
    images: ["/og-image.png"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://federicogs.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "pt": "/pt",
    },
  },
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
        <ToastProvider>
          <LanguageProvider>
            
            <TargetCursor targetSelector={'.cursor-target'} hideDefaultCursor/> 
            {children}
          </LanguageProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
