import { BlogCardProps } from '@/types/type';
import Image from 'next/image';
import React from 'react';
import { LuDot } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

const BlogCard: React.FC<BlogCardProps> = ({ _id, title, img, content, commentCount }) => {
    const pathname = usePathname();

    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleClick = () => {
        const slug = createSlug(title);
        const targetUrl = pathname.includes('admin')
            ? `/admin/admin-blog/${slug}?id=${_id}`
            : `/blog/${slug}?id=${_id}`;
        window.location.href = targetUrl;
    };

    return (
        <div className='md:w-[840px] w-fit md:flex-row flex-col md:h-[341px] cursor-default bg-white flex' onClick={handleClick}>
            <div className='w-[411px] h-[341px] overflow-hidden'>
                <Image
                    alt="Blog Image"
                    className="cursor-pointer object-cover w-full h-full hover:scale-105 transition duration-500"
                    width={411}
                    height={0}
                    src={`http://localhost:3001/${img}`}
                />
            </div>
            <div className='p-10 flex flex-col gap-5'>
                <div className='bg-[#0A83FF] w-fit px-4 flex items-center justify-center py-1 hover:bg-black transition duration-300'>
                    <span className='text-white uppercase text-xs font-medium'>Maintenance</span>
                </div>
                <p className='text-3xl font-medium w-[350px] cursor-pointer'>{title}</p>
                <p className='w-[350px] text-lg text-stone-500 line-clamp-2'>{content}</p>
                <div className='text-stone-400 text-sm flex items-center'>
                    <span className='hover:text-black transition duration-300'>Jan 17, 2024</span>
                    <LuDot />
                    <span className='transition duration-300 hover:text-black'>{commentCount} Comments</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
