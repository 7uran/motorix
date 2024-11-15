"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionProps } from "@/types/type";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const ShopAccordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                onClick={toggleAccordion}
                className="flex justify-between group items-center w-full py-4 text-lg font-medium focus:outline-none"
            >
                <span className="text-lg transition duration-300 group-hover:text-gray-500">
                    {title}
                </span>

                {isOpen ? (
                    <FiMinus className="text-3xl transition duration-300 group-hover:text-gray-500" />
                ) : (
                    <GoPlus className="text-3xl transition duration-300 group-hover:text-gray-500" />
                )}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
                transition={{ duration: 0.3 }}
            >
                <div className="py-2 text-lg">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

export default ShopAccordion;
