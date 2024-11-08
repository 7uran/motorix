import { PricingCardProps } from '@/types/type'
import React from 'react'
import { MdDone } from "react-icons/md";

const PricingCard: React.FC<PricingCardProps> = ({ title, price, isActive }) => {
    return (
        <div className='bg-white w-[410px] h-[502px] flex items-center gap-6 flex-col justify-center group'>
            <p className='text-2xl font-medium '>{title}</p>
            <p className='text-6xl font-medium group-hover:text-main transition duration-300'>${price}.00</p>
            <span className='text-gray-400 font-light'>Per/Visit</span>
            <div className='flex flex-col gap-2'>
                <p className='flex items-center text-gray-500 text-lg '>Adipiscing elit sed.<MdDone className='text-main text-xl' /></p>
                <p className='flex items-center text-gray-500 text-lg '>Eusmod tempor ut.<MdDone className='text-main text-xl' /></p>
                <p className='flex items-center text-gray-500 text-lg '>labore et dolore.<MdDone className='text-main text-xl' /></p>
            </div>
            <button className={`uppercase  border-black border-2 transition duration-300 py-3 px-10 group-hover:border-main group-hover:bg-main group-hover:text-white ${isActive ? "border-main bg-main  text-white" : ""}`}>Get now</button>
        </div>
    )
}

export default PricingCard