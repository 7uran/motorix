"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { BsBagDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navItems } from '@/static/mockdb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className={` top-0 left-0 right-0 z-10 px-2 md:px-16 py-12 ${pathname === '/wheels-and-tires' ? 'bg-transparent absolute' : 'bg-[#0D0D0D]'}`}>
            <div className='flex justify-between'>
                <div>
                    <Image alt='Motorix Logo' width={198} height={27} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"} />
                </div>

                <nav className='-translate-x-6 md:flex hidden'>
                    <ul className='flex text-white text-[17px] font-medium gap-6'>
                        {navItems.map((item) => (
                            <li key={item.name} className='relative group cursor-pointer h-8'>
                                <Link href={item.path} className='relative'>
                                    <p>{item.name}</p>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ${pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            } origin-left`}
                                    ></span>
                                </Link>
                                {item.name === "Pages" && (
                                    <ul className='absolute left-0 bg-[#191919] mt-1 w-[200px] text-stone-400 rounded-sm shadow-lg text-sm transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300'>
                                        <li>
                                            <Link href="/our-team" className='block px-4 py-6'>Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/faqs" className='block px-4 py-6'>FAQs</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing" className='block px-4 py-6'>Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className='block px-4 py-6'>Contact</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-6'>
                    <button className="flex items-center justify-center p-2">
                        <BsBagDash className='text-white text-3xl' />
                    </button>

                    <button onClick={toggleSearch} className="flex items-center justify-center p-2">
                        <IoSearchOutline className='text-white text-3xl cursor-pointer' />
                    </button>

                    <button className="flex items-center justify-center p-2">
                        <PiDotsNineBold className='text-white text-3xl' />
                    </button>
                </div>
            </div>

            <div
                className={`absolute top-0 left-0 right-0 bg-[#191919] text-white md:h-[469px] px-4 py-3 transition-transform duration-1000 ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className='md:p-12 '>
                    <button
                        onClick={toggleSearch}
                        className={`absolute top-8 right-8 z-10 text-white text-4xl hover:rotate-180 transition-transform duration-300 `}
                    >
                        <IoMdClose />
                    </button>
                    <div>
                        <Image alt='Motorix Logo' width={198} height={27} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"} />
                    </div>
                    <div className='mx-auto md:max-w-[1293px] flex items-center py-20 md:py-28'>
                        <input
                            type="text"
                            placeholder="Type words and hit enter"
                            className="md:py-6 text-xl md:text-4xl placeholder-white w-full bg-transparent border-b border-gray-500 focus:outline-none md:p-2"
                        />
                        <button className='-translate-x-10 text-3xl'>
                            <CiSearch />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
