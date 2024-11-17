import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { ProductCardProps } from '@/types/type';

const ProductCard: React.FC<ProductCardProps> = ({ img, title, rating, price, url }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleRedirect = () => {
        router.push(url);
    };

    return (
        <div className='w-fit cursor-default py-16'>
            <div
                className='group overflow-hidden relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    className='group-hover:scale-110 duration-500 cursor-pointer'
                    alt={title}
                    width={410}
                    height={410}
                    src={`http://localhost:3001/${img}`}
                />
                <div className='absolute z-[1] top-0 flex gap-2 w-full h-full items-center justify-center'>
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <IoHeartOutline />
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <HiOutlineShoppingCart />
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        onClick={handleRedirect}
                    >
                        <GoArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-2 py-3'>
                <p className='text-2xl font-medium transition duration-500 cursor-pointer hover:text-main'>{title}</p>
                <div className='text-[#FFC107] text-sm flex gap-0.5'>
                    {[...Array(rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <p className='text-lg text-gray-500'>${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
