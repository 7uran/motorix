import React from 'react'
import { FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className=''>
            <div className='flex flex-col '>
                <div className='bg-main '>
                    <div className='max-w-[1293px] mx-auto md:px-0 px-10 py-20 flex flex-col md:flex-row justify-between  md:items-center'>
                        <div className=''>
                            <p className='md:text-6xl text-2xl text-white font-medium'>Get a 30% discount on car diagnostics</p>
                        </div>
                        <div>
                            <button className='bg-white uppercase py-4 font-medium px-10'>
                                Get a quote
                            </button>
                        </div>
                    </div>

                </div>
                <div className='bg-[#191919] pt-20 flex flex-col gap-32'>
                    <div className='max-w-[1293px] mx-auto text-white font-medium md:flex-row flex-col flex justify-between w-full'>
                        <div className='md:text-5xl text-2xl w-[460px]'>
                            <p>Striving for perfection in every turn of the key</p>
                        </div>
                        <div className='flex md:flex-row flex-col md:gap-40 gap-10'>
                            <div className='flex flex-col gap-6'>
                                <p className='text-lg'>Address</p>
                                <p className='text-lg text-stone-400'>Germany — <br />
                                    785 15h Street, Office 478 <br />
                                    Berlin, De 81566</p>
                                <div className='flex gap-2'>
                                    <button className='hover:text-[#395498] transition duration-300 w-[45px] h-[45px] flex items-center justify-center border-stone-600 border rounded-full'><FaFacebookF /></button>
                                    <button className='hover:text-[#29A4D9] transition duration-300 w-[45px] h-[45px] flex items-center justify-center border-stone-600 border rounded-full'><FaXTwitter /></button>
                                    <button className='hover:text-[#E34A85] transition duration-300 w-[45px] h-[45px] flex items-center justify-center border-stone-600 border rounded-full'><FaDribbble /></button>
                                    <button className='hover:text-[#85004D] transition duration-300 w-[45px] h-[45px] flex items-center justify-center border-stone-600 border rounded-full'><FaInstagram /></button>
                                </div>
                            </div>
                            <div className='flex gap-5 flex-col'>
                                <p className='text-lg'>Say Hello</p>
                                <div className="group relative text-lg w-fit ">
                                    <button className="relative overflow-hidden text-stone-300">info@example.com</button>
                                    <div className="absolute left-0 bottom-0 h-0.5 bg-white w-full group-hover:w-0 transition-all duration-300"></div>
                                </div>
                                <p className='text-xl'>+1 800 555 25 65</p>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[1293px] mx-auto text-white border-t border-t-stone-500 py-10 w-full flex justify-between'>
                        <div className='flex gap-5'>
                            <div className="group relative w-fit">
                                <Link href="/wheels-and-tires" className="text-white">Home</Link>
                                <div className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <div className="group relative w-fit">
                                <Link href="/wheels-and-tires" className="text-white">Blog</Link>
                                <div className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <div className="group relative w-fit">
                                <Link href="/wheels-and-tires" className="text-white">Shop</Link>
                                <div className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <div className="group relative w-fit">
                                <Link href="/wheels-and-tires" className="text-white">Contact</Link>
                                <div className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </div>


                        <div>
                            <p className='text-lg'>ThemeRex <span className='text-stone-600'>© 2024. All rights reserved. </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;