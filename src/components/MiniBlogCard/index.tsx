import { MiniBlogCardProps } from '@/types/type';
import Image from 'next/image'
import React from 'react'
import { LuDot } from "react-icons/lu";

const MiniBlogCard: React.FC<MiniBlogCardProps> = ({ title, img }) => {
    return (
        <div className='flex gap-3 '>
            <div className='overflow-hidden w-fit cursor-pointer'>
                <Image className='hover:scale-110 transition duration-300' src={img} alt='' width={100} height={100} />
            </div>
            <div className='w-8/12 flex flex-col gap-3'>
                <div className='flex items-center gap-1 text-sm'>
                    <span className='cursor-pointer font-medium uppercase hover:text-main duration-300 transition'>Standard</span>
                    <LuDot />
                    <span className='cursor-pointer text-gray-400 hover:text-black duration-300 transition'>Jan 21, 2024</span>
                </div>
                <div className='text-xl'>
                    <p className='font-medium hover:text-gray-400 transition duration-300 cursor-pointer'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniBlogCard