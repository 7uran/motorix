import { PageBannerProps } from '@/types/type';
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
    return (
        <div className=' h-[322px] bg-[#0D0D0D]  flex items-center justify-center border-t-stone-600 border-t w-full  text-white flex-col gap-3'>
            <h1 className=' text-6xl font-medium '>{title}</h1>
            <FaAngleDown className=' text-2xl' />
        </div>
    );
}

export default PageBanner;