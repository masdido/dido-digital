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
  title: {
    default: "Dido Digital — Digitalisasi UMKM",
    template: "%s | Dido Digital",
  },
  description:
    "Dido Digital membantu UMKM membangun kehadiran digital yang lebih profesional melalui website, katalog digital, dan solusi digital lainnya.",
  keywords: [
    "Dido Digital",
    "digitalisasi UMKM",
    "jasa website UMKM",
    "website UMKM",
    "katalog digital",
    "digital marketing UMKM",
  ],
  authors: [{ name: "Dido Digital" }],
  creator: "Dido Digital",
  metadataBase: new URL("https://didodigital.com"),
  openGraph: {
    title: "Dido Digital — Digitalisasi UMKM",
    description:
      "Solusi digital sederhana dan profesional untuk membantu UMKM berkembang di dunia digital.",
    type: "website",
    locale: "id_ID",
    siteName: "Dido Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dido Digital — Digitalisasi UMKM",
    description:
      "Solusi digital sederhana dan profesional untuk membantu UMKM berkembang di dunia digital.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}