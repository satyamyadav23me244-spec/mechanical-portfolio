"use client";

import React from "react";
import { cn } from "../lib/utils";
import { MoveUpRight } from "lucide-react";

const projects = [
    {
        title: "Personal Portfolio v2",
        description: "My high-performance portfolio built with Next.js, Tailwind, and Framer Motion.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        date: "Built in Feb 2025",
        liveLink: "https://satyamdtu.tech",
        codeLink: "https://github.com/satyamyadav23me244-spec/mechanical-portfolio",
        className: "col-span-1 md:col-span-2",
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather tracking using OpenWeather API and Axios.",
        technologies: ["React", "API Integration", "Axios"],
        date: "Built in Dec 2023",
        codeLink: "https://github.com/satyamyadav23me244-spec",
        className: "col-span-1",
    },
    {
        title: "Unit Converter",
        description: "Engineering unit converter for temperature, pressure, and flow calculations. Built for mechanical engineering applications.",
        technologies: ["JavaScript Logic", "React State", "Math"],
        date: "Work in Progress",
        codeLink: "https://github.com/satyamyadav23me244-spec",
        className: "col-span-1",
        badge: "Work in Progress",
    },
    {
        title: "Todo App with Local Storage",
        description: "Task management application with real-time updates, local storage persistence, and smooth UI animations.",
        technologies: ["React", "JavaScript", "Local Storage"],
        date: "Built in Jan 2024",
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
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-neon transition-colors">
                                    {project.title}
                                </h3>
                                {project.badge && (
                                    <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30">
                                        {project.badge}
                                    </span>
                                )}
                            </div>
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
