import { PaintProtectionProps } from '@/types/type';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const PaintProtection: React.FC<PaintProtectionProps> = ({ title, index }) => {
    return (

        <div className='flex md:flex-row flex-col  md:items-center justify-between border-b-2 py-10 group cursor-pointer'>
            <p className='text-6xl group-hover:text-main transition duration text-gray-400'>0{index}</p>
            <p className='text-4xl font-medium w-[200px]'>{title}</p>
            <p className='w-[472px] text-lg text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus.</p>
            <button className='group-hover:-rotate-45 group-hover:border-black transition duration-300 rounded-full border-gray-300 border-2 w-[62px] h-[62px] flex items-center justify-center text-xl'><FaArrowRight /></button>
        </div>

    )
}

export default PaintProtection