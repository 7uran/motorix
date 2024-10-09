import Image from 'next/image';
import React from 'react';
import { BsBagDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-10 bg-transparent px-16 py-12">
            <div className='flex justify-between'>
                <div>
                    <Image alt='Motorix Logo' width={198} height={27} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"} />
                </div>
                <nav className='-translate-x-10'>
                    <ul className='flex text-white text-[17px] font-medium gap-6'>
                        <li><p>Home</p></li>
                        <li><p>Pages</p></li>
                        <li><p>Portfolio</p></li>
                        <li><p>Blog</p></li>
                        <li><p>Shop</p></li>
                    </ul>
                </nav>
                <div className='flex items-center gap-6'>
                    <button>
                        <BsBagDash className='text-white text-3xl' />
                    </button>

                    <button>
                        <IoSearchOutline className='text-white text-3xl' />
                    </button>

                    <button>
                        <PiDotsNineBold className='text-white text-3xl' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
