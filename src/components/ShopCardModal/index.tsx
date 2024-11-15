import Image from 'next/image';
import React from 'react';
import { IoIosHeartEmpty, IoIosStar, IoMdClose } from "react-icons/io";

const ShopCardModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-[#F0EEEF] w-[920px]  ">
                <div className="relative flex gap-10">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-3xl text-gray-400 hover:text-gray-600 transition duration-300"
                    >
                        <IoMdClose />
                    </button>
                    <div>
                        <Image
                            width={460}
                            height={460}
                            src="https://motorix.themerex.net/wp-content/uploads/2024/01/prod-3-copyright-460x460.jpg"
                            alt="product"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col justify-start py-16 gap-4">
                        <h1 className="text-2xl font-medium">Luxe shine</h1>
                        <div className="flex items-center gap-1 justify-between">
                            <p className="text-main text-2xl">$1,199.00</p>
                            <div className="flex gap-1">
                                {Array(5)
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
                            Category:{" "}
                            <span className="hover:text-main text-stone-500 duration-300 transition cursor-pointer font-normal">
                                Custom wheels
                            </span>
                        </p>
                        <p className="text-lg font-medium">
                            Product ID:{" "}
                            <span className="hover:text-main text-stone-500 duration-300 transition cursor-pointer font-normal">
                                2335
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCardModal;
