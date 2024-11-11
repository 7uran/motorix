import { BlogCardHomeProps } from '@/types/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BlogCardHome: React.FC<BlogCardHomeProps> = ({ title, img, commentCount, _id }) => {
    const router = useRouter()

    const handleClick = () => {
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        router.push(`/blog/${slug}?id=${_id}`)
    }

    return (
        <div onClick={handleClick} className="cursor-pointer group w-[410px] select-none">
            <div className="relative overflow-hidden w-[410px] h-[305px]">
                <Image
                    className="group-hover:scale-105 transition duration-300 object-cover"
                    alt=""
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 410px"
                />
            </div>
            <div className="py-6 flex flex-col gap-3 h-[250px]">
                <p className="uppercase text-sm font-medium hover:text-main transition duration-500">maintenance</p>
                <p className="text-[28px] font-medium hover:text-gray-400 transition duration-300">{title}</p>
                <div className="flex gap-2 items-center text-gray-400 text-sm">
                    <span className="hover:text-main transition duration-300">Jan 17, 2024</span>
                    <span>•</span>
                    <span className="hover:text-main transition duration-300">{commentCount} comments</span>
                </div>
            </div>
        </div>
    )
}

export default BlogCardHome
