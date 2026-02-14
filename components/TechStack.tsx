"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
    { name: "HTML", color: "#ff6b6b" },
    { name: "CSS", color: "#4ecdc4" },
    { name: "JavaScript", color: "#ffd93d" },
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Tailwind CSS", color: "#38bdf8" },
    { name: "Git/GitHub", color: "#e8e8e8" },
];

export const TechStack = () => {
    return (
        <section className="py-20 overflow-hidden bg-black/50">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-glow mb-4">
                    Tech <span className="text-neon">Arsenal</span>
                </h2>
                <p className="text-neutral-400">Powering high-performance applications</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Fade Gradients for smooth edges */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap py-4"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Adjust speed here
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-2xl font-bold text-neutral-500 hover:text-neon transition-colors cursor-default"
                            style={{
                                textShadow: "0 0 10px rgba(0, 240, 255, 0)", // Initial state
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = tech.color;
                                e.currentTarget.style.textShadow = `0 0 20px ${tech.color}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "";
                                e.currentTarget.style.textShadow = "0 0 10px rgba(0, 240, 255, 0)";
                            }}
                        >
                            {/* Optional: Add Icons here if available, using text for now as requested/simple */}
                            <span className="font-orbitron tracking-wider">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
