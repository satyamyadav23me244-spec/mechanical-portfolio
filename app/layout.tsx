import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://satyamdtu.tech"),
  title: "Satyam Yadav | Full Stack Developer & Mechanical Engineer",
  description: "Portfolio of Satyam Yadav - Building high-performance web apps with Next.js.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Mechanical Engineer", "Web Development", "Portfolio"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Satyam Yadav | Full Stack Developer & Mechanical Engineer",
    description: "Portfolio of Satyam Yadav - Building high-performance web apps with Next.js.",
    url: "https://satyamdtu.tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Satyam Yadav Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Yadav | Full Stack Developer & Mechanical Engineer",
    description: "Portfolio of Satyam Yadav - Building high-performance web apps with Next.js.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter bg-black antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}