import Image from 'next/image'
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { HiOutlineShoppingCart } from "react-icons/hi2";


const AlloyWheelsCard = () => {
    return (
        <div className='cursor-pointer group w-fit'>
            <div className='relative bg-black w-fit  overflow-hidden h-[410px]'>
                <Image className='group-hover:opacity-85 transition duration-500' alt='' width={410} height={410} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/prod-4-copyright-630x630.jpg"} />
                <button className='text-2xl absolute top-5 right-5 hover:text-gray-500 transition bg-[#F0EEEF] rounded-full flex items-center justify-center w-[40px] h-[40px]'>
                    <IoMdHeartEmpty />
                </button>
                <button className='bg-[#EFEDEE] transition hover:text-gray-600 w-full gap-2 capitalize flex items-center opacity-0 justify-center h-[52px]  group-hover:opacity-100 group-hover:-translate-y-[52px]  '>
                    <IoEyeOutline />
                    <span className='font-semibold '> quick view</span>
                </button>
            </div>
            <div className='text-xl py-4'>
                <p className='font-medium'>
                    Chrome elegance
                </p>
                <button className='text-[17px] text-gray-600 flex-col flex  h-[25px] group-hover:-translate-y-8'>
                    <span>$1,105.00</span>
                    <span className='font-medium flex items-center'><HiOutlineShoppingCart />Read More</span>

                </button>
            </div>
        </div >
    )
}

export default AlloyWheelsCard