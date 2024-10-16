"use client";
import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const GoUpButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-9 right-9 z-[99999999] flex items-center justify-center bg-black text-white w-[44px] h-[44px] rounded-full shadow-lg transition-all duration-300 ease-in-out
                ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
        >
            <FaArrowUpLong />
        </button>
    );
};

export default GoUpButton;
