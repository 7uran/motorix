import Image from 'next/image'
import React from 'react'

const BlogCardHome = () => {
    return (
        <div className='cursor-default group w-[410px]'>
            <div className='w-fit overflow-hidden'>
                <Image className='group-hover:scale-105 transition duration-300' height={305} width={410} alt='' src={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-29-copyright-890x664.jpg"} />
            </div>
            <div className='py-6 flex flex-col gap-3 h-[250px]'>
                <p className='uppercase text-sm font-medium hover:text-main transition duration-500'>maintenance</p>
                <p className='text-[28px] font-medium hover:text-gray-400 transition duration-300'>Maximizing performance: innovative tire maintenance tips</p>
                <div className='flex gap-2 items-center text-gray-400 text-sm x'>
                    <span className='hover:text-main transition duration-300'>Jan 17, 2024 </span>
                    <span >•</span>
                    <span className='hover:text-main transition duration-300'>0 comments</span>
                </div>
            </div>
        </div>
    )
}

export default BlogCardHome