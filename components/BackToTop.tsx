"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-neon/10 border border-neon text-neon rounded-full hover:bg-neon hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:scale-110 group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce" />
                </button>
            )}
        </>
    );
};
