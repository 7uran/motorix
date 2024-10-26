import Image from 'next/image';
import React, { useState } from 'react';
import { BsBagDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-10 bg-transparent px-2 md:px-16 py-12">
            <div className='flex justify-between '>



                <div>
                    <Image alt='Motorix Logo' width={198} height={27} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"} />
                </div>

                <nav className='-translate-x-10 md:flex hidden'>
                    <ul className='flex text-white text-[17px] font-medium gap-6'>
                        <li className='cursor-pointer'><p>Home</p></li>
                        <li className='cursor-pointer'><p>Pages</p></li>
                        <li className='cursor-pointer'><p>Portfolio</p></li>
                        <li className='cursor-pointer'><p>Blog</p></li>
                        <li className='cursor-pointer'><p>Shop</p></li>
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
                className={`absolute top-0 left-0 right-0 bg-[#191919] text-white  md:h-[469px] px-4 py-3 transition-transform duration-1000 ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className='md:p-12'>
                    <button
                        onClick={toggleSearch}
                        className={`absolute top-8 right-8 z-10 text-white text-4xl hover:rotate-180 transition-transform duration-300 `}
                    >
                        <IoMdClose />
                    </button>
                    <div>
                        <Image alt='Motorix Logo' width={198} height={27} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"} />
                    </div>
                    <div className='mx-auto md:max-w-[1293px] flex items-center py-20 md:py-40'>
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
