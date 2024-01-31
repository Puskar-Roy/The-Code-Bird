import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The CodeBird",
  description: "Official Website of The Code Bird, Coding Club of UIT Burdwan",
  metadataBase: new URL("https://nextjs.org"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },

  applicationName: "CodeBird UIT",
  referrer: "origin-when-cross-origin",
  keywords: [
    "The Code Bird",
    "CodeBird",
    "CodeBird UIT",
    "UIT BU",
    "CodeBird",
    "UIT Burdwan",
    "University Institute Of Technology, BU",
    "University Institute of Technology, The University of Burdwan",
    "University of Burdwan",
    "Burdwan University",
  ],
  authors: [{ name: "@ImKKingshuk", url: "https://github.com/ImKKingshuk" }],

  openGraph: {
    title: "CodeBird UIT",
    description:
      "Official Website of The Code Bird, Coding Club of UIT Burdwan",
    url: "https://",
    siteName: "CodeBird UIT",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeBird UIT",
    description:
      "Official Website of The Code Bird, Coding Club of UIT Burdwan",
    creator: "@ImKKingshuk",
    images: ["https://nextjs.org/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
