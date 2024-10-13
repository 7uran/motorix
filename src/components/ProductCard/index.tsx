import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";

const ProductCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='w-fit cursor-default py-16'

        >
            <div className='group overflow-hidden relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Image
                    className='group-hover:scale-110 duration-500 cursor-pointer'
                    alt=''
                    width={410}
                    height={410}
                    src={"https://motorix.themerex.net/wp-content/uploads/2024/01/prod-1-copyright-630x630.jpg"}
                />
                <div className='absolute z-[1] top-0 flex gap-2 w-full h-full items-center justify-center'>
                    <button
                        className={`hover:text-main hover:-translate-y-1  transition-all  duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: '0ms' }}
                    >
                        <IoHeartOutline />
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1  transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
                    >
                        <HiOutlineShoppingCart />
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1  transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: isHovered ? '200ms' : '0ms' }}
                    >
                        <GoArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-2 py-3'>
                <span className='text-gray-500'>Alloy, Durability, Radial, Traction</span>
                <p className='text-2xl font-semibold transition duration-500 cursor-pointer hover:text-main'>Stealth precision</p>
                <div className='text-[#FFC107] text-sm flex gap-0.5'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className='text-lg text-gray-500'>$155.00 – $161.00</p>
            </div>
        </div>
    );
}

export default ProductCard;
