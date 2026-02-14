import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// 1. Inter (Normal Text ke liye)
const inter = Inter({ subsets: ["latin"] });

// 2. Orbitron (Headings/Tech look ke liye)
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron", // Iska variable banaya taaki Tailwind mein use kar sakein
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mechanical-portfolio-demo.vercel.app"),
  title: "Satyam Yadav | Full Stack Developer",
  description: "Portfolio of a Mechanical Engineer building high-performance web apps.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Mechanical Engineer", "Web Development", "Portfolio"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Satyam Yadav | Full Stack Developer",
    description: "Portfolio of a Mechanical Engineer building high-performance web apps.",
    url: "https://mechanical-portfolio-demo.vercel.app",
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
    title: "Satyam Yadav | Full Stack Developer",
    description: "Portfolio of a Mechanical Engineer building high-performance web apps.",
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
      <body className={`${inter.className} ${orbitron.variable} bg-black antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}