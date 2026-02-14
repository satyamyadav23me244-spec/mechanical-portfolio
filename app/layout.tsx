import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google"; // 👈 Dono fonts import kiye
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
  title: "My Portfolio",
  description: "Modern & Minimalist Portfolio",
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
      </body>
    </html>
  );
}