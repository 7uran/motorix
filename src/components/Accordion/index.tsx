"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionProps } from "@/types/type";
import { FaArrowRight } from "react-icons/fa6";


const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 ">
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full py-4 text-lg font-medium focus:outline-none"
            >
                <span className="text-2xl">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl"
                >
                    <FaArrowRight />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
                transition={{ duration: 0.3 }}
            >
                <div className=" py-2 text-lg text-gray-500 ">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};



export default Accordion;
