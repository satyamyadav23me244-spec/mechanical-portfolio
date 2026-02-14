"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "satyam991174@gmail.com";

    const handleEmailCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 px-6 flex flex-col items-center justify-center text-center min-h-screen">
            <div className="max-w-3xl mx-auto">
                {/* Digital Business Card */}
                <div className="relative">
                    {/* Card Background with Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-transparent rounded-2xl blur-xl opacity-50" />
                    
                    <div className="relative bg-black/50 border border-neon/30 rounded-2xl p-12 backdrop-blur-md">
                        {/* Header */}
                        <h2 className="text-sm font-bold tracking-widest text-neon uppercase mb-4">
                            Get In Touch
                        </h2>

                        <h3 className="text-4xl md:text-5xl font-bold font-orbitron mb-8 text-white">
                            Let's <span className="text-neon">Connect</span>
                        </h3>

                        <p className="text-neutral-400 mb-12 text-lg leading-relaxed">
                            Currently open to new opportunities and collaborations.
                        </p>

                        {/* Email Copy Section */}
                        <div className="mb-12">
                            <button
                                onClick={handleEmailCopy}
                                className="w-full flex items-center justify-center gap-2 px-4 sm:px-8 py-4 bg-neon/10 border border-neon text-neon font-bold font-orbitron rounded-lg hover:bg-neon/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 group text-sm sm:text-base"
                            >
                                <Mail size={20} className="flex-shrink-0" />
                                {copied ? (
                                    <>
                                        <Check size={18} className="text-green-400 flex-shrink-0" />
                                        <span>Email Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={18} className="flex-shrink-0" />
                                        <span className="truncate">{email}</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Social Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            <a
                                href="https://www.linkedin.com/in/satyam-yadav-dtu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-600/40 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(0,119,181,0.5)] transition-all duration-300 group"
                            >
                                <Linkedin size={20} />
                                <span className="font-orbitron">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/satyamyadav23me244-spec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600/20 border border-gray-500/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/40 hover:shadow-[0_0_15px_rgba(156,163,175,0.4)] transition-all duration-300 group"
                            >
                                <Github size={20} />
                                <span className="font-orbitron">GitHub</span>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center gap-2 text-neutral-300 font-orbitron">
                            <MapPin size={18} className="text-neon" />
                            <span>Delhi, India</span>
                        </div>

                        {/* Divider */}
                        <div className="my-8 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

                        {/* Footer */}
                        <footer className="text-neutral-400 text-sm space-y-2">
                            <p>Designed & Built by <span className="text-neon font-bold">Satyam Yadav</span></p>
                            <p className="text-xs text-neutral-600">
                                © 2024-2025 Satyam Yadav. All rights reserved.
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
};
