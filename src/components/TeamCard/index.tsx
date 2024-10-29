"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { TeamCardProps } from '@/types/type';
import { useRouter } from 'next/navigation';


const TeamCard: React.FC<TeamCardProps> = ({ img, name, job }) => {
    const [hovered, setHovered] = useState(false);
    const router = useRouter();
    const toSlug = (name: string): string => name.toLowerCase().replace(/\s+/g, '-');


    return (
        <div className='flex flex-col gap-5 w-fit group cursor-pointer'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => router.push(`/our-team/${toSlug(name)}`)}>
            <div className='w-[410px] h-[500px] overflow-hidden '>
                <Image className='group-hover:scale-105 transition duration-300' alt='' width={410} height={500} src={img} />
            </div>
            <div>
                <h2 className='text-2xl font-medium'>{name}</h2>
                <span className='text-stone-500 text-lg'>{job}</span>
                <div
                    className='flex gap-3 py-5 relative'

                >
                    <div className={`flex gap-5 text-xl cursor-pointer  transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.1
                            }}
                            className="w-fit"
                        >
                            <FaFacebookF className='hover:text-main duration-300' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.2
                            }}
                            className="w-fit"
                        >
                            <FaXTwitter className='hover:text-main duration-300' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.3
                            }}
                            className="w-fit"
                        >
                            <TbBrandDribbbleFilled className='hover:text-main duration-300' />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.4
                            }}
                            className="w-fit"
                        >
                            <FaInstagram className='hover:text-main duration-300' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TeamCard;
