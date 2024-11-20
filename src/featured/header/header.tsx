import React, { useState, useEffect } from 'react';
import { BsBagDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navItems } from '@/static/mockdb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RightSidebar from '@/components/RightSidebar';
import Cookies from 'js-cookie';
import Image from 'next/image';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isBasketMenuOpen, setIsBasketMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const email = Cookies.get('userEmail') || null;
        const user = Cookies.get('username') || null;
        setUserEmail(email);
        setUsername(user);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const loadCartItems = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    };

    useEffect(() => {
        loadCartItems();
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleBasketMenu = () => {
        setIsBasketMenuOpen(!isBasketMenuOpen);
        if (!isBasketMenuOpen) {
            loadCartItems();
        }
    };

    const handleRemoveItem = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <header className={`top-0 left-0 right-0 z-10 px-2 md:px-16 py-12 ${pathname === '/wheels-and-tires' ? 'bg-transparent absolute' : 'bg-[#0D0D0D]'}`}>
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
                                        <li className='group/team'>
                                            <Link href="/our-team" className='transition group-hover/team:translate-x-3 block px-4 py-6'>Our Team</Link>
                                        </li>
                                        <li className='group/faqs'>
                                            <Link href="/faqs" className='transition group-hover/faqs:translate-x-3 block px-4 py-6'>FAQs</Link>
                                        </li>
                                        <li className='group/pricing'>
                                            <Link href="/pricing" className='transition group-hover/pricing:translate-x-3 block px-4 py-6'>Pricing</Link>
                                        </li>
                                        <li className='group/contact'>
                                            <Link href="/contact" className='transition group-hover/contact:translate-x-3 block px-4 py-6'>Contact</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-6'>
                    <button onClick={toggleBasketMenu} className="relative flex items-center justify-center p-2">
                        <BsBagDash className="text-white text-3xl" />
                        {cartItems.length > 0 && (
                            <span className="absolute bottom-0 right-0 bg-main text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </button>

                    {isBasketMenuOpen && (
                        <div className="absolute flex flex-col right-40 top-24 w-[330px] h-[330px] bg-[#212020] text-white p-8 shadow-lg overflow-y-auto">
                            {cartItems.length > 0 ? (
                                <>
                                    {cartItems.map((item, index) => (
                                        <div className='h-full' key={index}>
                                            <div className="flex gap-6 w-full h-fit py-2">
                                                <div>
                                                    <Image alt="" width={81} height={81} src={`http://localhost:3001/${item.image}`} />
                                                </div>
                                                <div className="flex flex-col gap-4 flex-1">
                                                    <p className="text-xl font-medium">{item.title}</p>
                                                    <p>{item.quantity} x ${item.price}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveItem(index)}
                                                    className="text-gray-500 hover:text-red-700 transition-colors"
                                                >
                                                    <IoMdClose />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex gap-1 mt-4">
                                        <Link href="/cart">
                                            <button className="uppercase bg-main w-[130px] h-[39px] font-medium">View Cart</button>
                                        </Link>
                                        <Link href="/checkout">
                                            <button className="uppercase border-2 border-white w-[130px] h-[39px] font-medium">Checkout</button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center gap-6">
                                        <BsBagDash className="text-white text-3xl" />
                                    </div>
                                    <p className="text-lg">No products in the cart.</p>
                                </div>
                            )}
                        </div>
                    )}

                    <button onClick={toggleSearch} className="flex items-center justify-center p-2">
                        <IoSearchOutline className='text-white text-3xl cursor-pointer' />
                    </button>

                    <button onClick={toggleSidebar} className="flex items-center justify-center p-2">
                        <PiDotsNineBold className='text-white text-3xl' />
                    </button>
                    <RightSidebar
                        isOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                        userEmail={userEmail}
                        username={username}
                    />
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
};

export default Header;
