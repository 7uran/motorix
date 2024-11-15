import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoIosHeartEmpty, IoIosStar, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { ShopCardModalProps } from '@/types/type';
import { PiArrowsClockwise } from "react-icons/pi";
import Loader from '../Loader';


const ShopCardModal: React.FC<ShopCardModalProps> = ({ isOpen, onClose, title, price, rating, image, id, category }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50" role="dialog" aria-labelledby="product-modal-title">
            {isLoading ? (

                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-10">
                    <Loader />
                </div>
            ) : (

                <motion.div
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-[#F0EEEF] w-[920px] shadow-lg"
                >
                    <div className="relative flex gap-10">
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-3xl text-gray-400 hover:text-gray-600 transition duration-300"
                        >
                            <IoMdClose />
                        </button>
                        <div className="relative">
                            <Image
                                width={460}
                                height={460}
                                src={`http://localhost:3001/${image}`}
                                alt={title}
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex flex-col justify-start py-16 gap-4">
                            <h1 id="product-modal-title" className="text-2xl font-medium">{title}</h1>
                            <div className="flex items-center gap-1 justify-between">
                                <p className="text-main text-2xl">${price}.00</p>
                                <div className="flex gap-1">
                                    {Array(rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <IoIosStar key={i} className="text-yellow-400 text-lg" />
                                        ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-20 h-12 border text-center outline-none bg-transparent border-gray-400 rounded-sm"
                                />
                                <button className="bg-main text-white font-medium uppercase h-12 w-36 hover:bg-orange-600 transition duration-300">
                                    Buy now
                                </button>
                                <button className="bg-white w-12 h-12 flex items-center justify-center hover:text-main transition duration-300 rounded-full text-2xl">
                                    <IoIosHeartEmpty />
                                </button>
                            </div>
                            <p className="text-lg font-medium">
                                Category:
                                <span className="hover:text-main text-stone-500 duration-300 transition cursor-pointer font-normal">
                                    {category}
                                </span>
                            </p>
                            <p className="text-lg font-medium">
                                Product ID:{" "}
                                <span className="hover:text-main text-stone-500 duration-300 transition cursor-pointer font-normal">
                                    {id}
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ShopCardModal;
