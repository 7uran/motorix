import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import { AlloyWheelsCardProps } from '@/types/type';

const AlloyWheelsCard: React.FC<AlloyWheelsCardProps> = ({ title, price, img, id, onQuickViewClick }) => {
    const router = useRouter();

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    // Handle card click to navigate to the product page
    const handleCardClick = () => {
        router.push(`/shop/product?id=${id}`);
    };

    // Prevent navigation when clicking the quick view button
    const handleQuickViewClick = (e: React.MouseEvent) => {
        e.stopPropagation();  // Prevent the parent div's onClick from firing
        onQuickViewClick(id);  // Trigger the quick view function
    };

    return (
        <div className='cursor-pointer group w-fit' onClick={handleCardClick}>
            <div className='relative bg-black w-fit overflow-hidden h-[410px]'>
                <img className='group-hover:opacity-85 transition duration-500' alt='' width={410} height={410} src={`http://localhost:3001/${img}`} />
                <button className='text-2xl absolute top-5 right-5 hover:text-gray-500 transition bg-[#F0EEEF] rounded-full flex items-center justify-center w-[40px] h-[40px]'>
                    <IoMdHeartEmpty />
                </button>
                <button
                    className='bg-[#EFEDEE] transition duration-300 hover:text-gray-600 w-full gap-2 capitalize flex items-center opacity-0 justify-center h-[52px] group-hover:opacity-100 group-hover:-translate-y-[52px]'
                    onClick={handleQuickViewClick}  // Call the new function for quick view
                >
                    <IoEyeOutline />
                    <span className='font-semibold'> quick view</span>
                </button>
            </div>
            <div className='text-xl py-4'>
                <p className='font-medium'>{title}</p>
                <div className='overflow-hidden w-fit'>
                    <button className='text-[17px] text-gray-600 flex-col flex h-[25px] group-hover:-translate-y-8 duration-500 transition'>
                        <span className='group-hover:opacity-0 transition duration-300'>${formattedPrice}</span>
                        <span className='group-hover:opacity-100 opacity-0 transition duration-300 font-medium flex items-center'>
                            <HiOutlineShoppingCart />
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlloyWheelsCard;
