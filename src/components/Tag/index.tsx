import { TagProps } from '@/types/type'
import React from 'react'

const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <div className='border w-fit px-4 py-1 group  hover:shadow-sm transition duration-300 cursor-pointer'>
            <span className='text-sm font-medium text-gray-400 group-hover:text-main transition duration-300'>{text}</span>
        </div>
    )
}

export default Tag