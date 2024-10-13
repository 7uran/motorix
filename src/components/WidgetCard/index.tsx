import { WidgetCardProps } from '@/types/type'
import Image from 'next/image'
import React from 'react'

const WidgetCard: React.FC<WidgetCardProps> = ({ src }) => {
    return (
        <div className="w-full h-[173px] border flex items-center justify-center group">
            <Image
                src={src}   
                alt=""
                width={160}
                height={78}
                className="opacity-30 group-hover:opacity-100 transition duration-500"
            />
        </div>
    )
}

export default WidgetCard