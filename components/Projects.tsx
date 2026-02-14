"use client";

import React from "react";
import { cn } from "../lib/utils";
import { MoveUpRight } from "lucide-react";

const projects = [
    {
        title: "Personal Portfolio v2",
        description: "A high-performance portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Features a futuristic neon theme and bento-grid layout.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        date: "Built in Feb 2025",
        liveLink: "https://mechanical-portfolio-demo.vercel.app",
        codeLink: "https://github.com/satyamyadav23me244-spec/mechanical-portfolio",
        className: "col-span-1 md:col-span-2",
    },
    {
        title: "Todo App with Local Storage",
        description: "A sleek task management application with real-time updates, local storage persistence, and beautiful UI animations.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        date: "Built in Jan 2024",
        codeLink: "https://github.com/satyamyadav23me244-spec",
        className: "col-span-1",
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather app fetching data from OpenWeather API. Shows current conditions, forecasts, and interactive maps.",
        technologies: ["React", "API", "CSS"],
        date: "Built in Dec 2023",
        codeLink: "https://github.com/satyamyadav23me244-spec",
        className: "col-span-1",
    },
    {
        title: "E-commerce Product Filter",
        description: "Interactive product filtering system with dynamic search, price range, and category filters. Fully responsive design.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        date: "Built in Nov 2023",
        codeLink: "https://github.com/satyamyadav23me244-spec",
        className: "col-span-1 md:col-span-2",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-12 text-center text-glow">
                Featured <span className="text-neon">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "bento-card group relative overflow-hidden flex flex-col justify-between min-h-[300px]",
                            project.className
                        )}
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="z-10">
                            <h3 className="text-2xl font-orbitron font-bold mb-2 text-white group-hover:text-neon transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies?.map((tech, idx) => (
                                    <span key={idx} className="text-xs font-semibold px-3 py-1 bg-neon/20 text-neon rounded-full border border-neon/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {/* Project Date */}
                            <p className="text-xs text-neutral-500 font-orbitron">
                                📅 {project.date}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="z-10 mt-6 flex gap-3">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon/20 border border-neon text-neon text-sm font-bold font-orbitron rounded hover:bg-neon hover:text-black transition-all"
                                >
                                    Live Demo <MoveUpRight size={14} />
                                </a>
                            )}
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-300 text-sm font-bold font-orbitron rounded hover:border-neon hover:text-neon transition-all"
                            >
                                View Code <MoveUpRight size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
