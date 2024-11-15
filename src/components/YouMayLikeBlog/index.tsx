import { YouMayLikeBlogProps } from '@/types/type'
import Image from 'next/image'
import React from 'react'

const YouMayLikeBlog: React.FC<YouMayLikeBlogProps> = ({ title, img }) => {
    return (
        <div className='flex flex-col gap-3 w-[405px]'>
            <div className='relative w-full h-80 overflow-hidden'>

                <Image
                    className='cursor-pointer hover:scale-105 transition duration-500 object-cover'
                    src={`http://localhost:3001/${img}`}
                    alt={title}
                    fill
                />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='hover:text-main duration-300 transition uppercase font-medium cursor-pointer'>Maintenance</span>
                <p className='font-medium text-2xl cursor-pointer'>{title}</p>
            </div>
        </div>
    )
}

export default YouMayLikeBlog
