"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo (Left) */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 bg-neon rounded-lg flex items-center justify-center font-bold text-black font-orbitron">
              S
            </div>
            {/* Open to Work Badge */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full pulse-badge" />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-tighter hidden md:block">
            SATYAM<span className="text-neon">.</span>
          </span>
        </div>

        {/* Desktop Links (Right) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-neutral-400 hover:text-neon transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium text-neutral-400 hover:text-neon transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium text-neutral-400 hover:text-neon transition-colors">
            Contact
          </Link>

          {/* Action Button - Resume */}
          <a href="/resume.pdf" download="Satyam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold font-orbitron hover:bg-neon hover:text-black transition-all">
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/98 border-b border-neon/20 p-4 flex flex-col gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <Link
            href="#about"
            className="text-lg font-medium text-neutral-400 hover:text-neon transition-colors px-4 py-2 hover:bg-neon/5 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium text-neutral-400 hover:text-neon transition-colors px-4 py-2 hover:bg-neon/5 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-neutral-400 hover:text-neon transition-colors px-4 py-2 hover:bg-neon/5 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="border-t border-neon/10 my-2" />
          <a href="/resume.pdf" download="Satyam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-3 bg-neon/10 border border-neon text-neon font-bold font-orbitron rounded-lg hover:bg-neon hover:text-black transition-all">
            DOWNLOAD RESUME
          </a>
        </div>
      )}
    </nav>
  );
};