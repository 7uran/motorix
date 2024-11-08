import Image from 'next/image'
import React from 'react'
import { LuDot } from "react-icons/lu";

const BlogCard = () => {
    return (
        <div className='w-[840px] h-[341px] bg-white  cursor-pointer flex '>
            <div className='w-[411px] h-[341px] overflow-hidden'>
                <Image
                    alt="Blog Image"
                    className="object-cover w-full h-full hover:scale-105 transition duration-500"
                    width={411}
                    height={0}
                    src="https://motorix.themerex.net/wp-content/uploads/2024/01/img-29-copyright-840x608.jpg"
                />
            </div>
            <div className='p-10 flex flex-col gap-4'>
                <div className='bg-[#0A83FF] w-fit px-4 flex items-center justify-center py-1 hover:bg-black transition duration-300'>
                    <span className='text-white uppercase text-xs font-medium'>Maintenance</span>
                </div>
                <p className='text-3xl font-medium w-[350px]'>Maximizing performance: innovative tire maintenance tips</p>
                <p className='w-[350px] text-lg text-stone-500'>Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra…</p>
                <div className='w-[60px] h-0.5 bg-black'> ‎ </div>
                <div className='text-stone-400 text-sm flex items-center'><span className='hover:text-black'>Jan 17, 2024</span><LuDot /><span className='hover:text-black'>0 Comments</span></div>
            </div>
        </div>
    )
}

export default BlogCard