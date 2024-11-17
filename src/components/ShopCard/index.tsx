import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { FaStar } from "react-icons/fa6";
import ShopCardModal from '../ShopCardModal';
import { ShopCardProps } from '@/types/type';
import { useRouter } from 'next/navigation';

const ShopCard: React.FC<ShopCardProps> = ({ title, price, rating, image, id, category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const formattedPrice = `${price.toLocaleString('en-US')}.00`;

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const handleRedirect = () => {
        router.push(`/shop/product?id=${id}`);
    };

    return (
        <div className='w-[250px] group flex flex-col gap-3'>
            <div
                className='relative w-[250px] h-[250px] overflow-hidden bg-black cursor-pointer'

            >
                <Image
                    className='group-hover:opacity-90 duration-300 transition'
                    alt={title}
                    src={`http://localhost:3001/${image}`}
                    width={250}
                    height={250}
                    onClick={handleRedirect}
                />
                <button className='text hover:text-stone-600 transition duration-300 absolute top-4 right-4 text-xl flex items-center justify-center bg-[#F0EEEF] rounded-full w-[40px] h-[40px]'>
                    <GoHeart />
                </button>
                <div className='flex bg-[#F0EEEF] group-hover:-translate-y-[40px] duration-300 transition opacity-0 group-hover:opacity-100'>
                    <button
                        onClick={openModal}
                        className='w-full h-[40px] text-xl hover:text-stone-600 transition duration-300 flex items-center justify-center '
                    >
                        <FaRegEye />
                    </button>
                    <button className='w-full h-[40px] text-xl hover:text-stone-600 transition duration-300 flex items-center justify-center '>
                        <HiOutlineShoppingCart />
                    </button>
                </div>
            </div>
            <div>
                <p
                    className='font-medium text-xl hover:text-main duration-300 transition cursor-pointer'
                    onClick={handleRedirect}
                >
                    {title}
                </p>
                <span className='text-lg text-gray-600'>${formattedPrice}</span>
                <div className='text-[#FFC107] text-sm flex gap-1'>
                    {Array(rating)
                        .fill(0)
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                </div>
            </div>

            <ShopCardModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={title}
                price={price}
                rating={rating}
                image={image}
                id={id}
                category={category}
            />
        </div>
    );
};

export default ShopCard;
