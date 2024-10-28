import { PageBannerProps } from '@/types/type';
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
    return (
        <div className='bg-black w-full h-[448px] flex items-end  justify-center'>
            <div className=' h-[322px]  flex items-center justify-center border-t-stone-600 border-t w-full  text-white flex-col gap-3'>
                <h1 className=' text-6xl font-medium '>{title}</h1>
                <FaAngleDown className=' text-2xl' />
            </div>


        </div>
    );
}

export default PageBanner;