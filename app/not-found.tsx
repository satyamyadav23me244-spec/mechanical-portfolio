"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative bg-black-space flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-black-space [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-full w-full bg-grid-white/[0.03]"></div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* 404 Text */}
        <div className="mb-12">
          <h1 className="font-orbitron text-7xl md:text-9xl font-bold text-neon mb-4 drop-shadow-lg">
            404
          </h1>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
            Lost in <span className="text-neon">Space</span>?
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-8 max-w-lg mx-auto">
            The page you're looking for has drifted into the void. Let's get you back on track!
          </p>
        </div>

        {/* Animated Floating Text */}
        <div className="mb-12 text-6xl animate-bounce">
          🚀
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-4 bg-neon text-black font-bold font-orbitron rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all transform hover:scale-105"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 border border-neon text-neon font-bold font-orbitron rounded-lg hover:bg-neon/10 transition-all"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Easter Egg Text */}
        <div className="mt-16 text-neutral-600 text-sm font-orbitron">
          <p className="mb-2">💻 Developer stuck? Check your URL!</p>
          <p className="text-xs">Just kidding, we'll help you find your way back.</p>
        </div>
      </div>
    </main>
  );
}
