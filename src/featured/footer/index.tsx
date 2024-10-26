import React from 'react'
import { MdOutlineCall } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineDiscount } from "react-icons/md";
import Image from 'next/image';
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import CustomCheckbox from '@/components/CustomCheckBox';
import Link from 'next/link';
import { footerHome, footerSocial } from '@/static/mockdb';

const Footer = () => {
  return (
    <footer className=''>
      <div className='flex flex-col '>
        <div className='bg-main '>
          <div className='max-w-[1493px] mx-auto py-8 w-full md:flex justify-between '>
            <div className='h-24 flex items-center gap-8 text-white border-r-gray-300 border-r w-full justify-center '>
              <MdOutlineCall className='text-5xl' />
              <div>
                <p className='font-medium text-lg'>24/7 support</p>
                <p className='opacity-75'>Lorem ipsum</p>
              </div>
            </div>

            <div className='h-24 flex items-center gap-8 text-white border-r-gray-300 border-r w-full justify-center'>
              <BsBoxSeam className='text-5xl ' />
              <div>
                <p className='font-medium text-lg'>Home delivery</p>
                <p className='opacity-75'>Dolor sit amet</p>
              </div>
            </div>

            <div className='h-24 flex items-center gap-8 text-white border-r-gray-300 border-r w-full justify-center'>
              <GrUserManager className='text-5xl' />
              <div>
                <p className='font-medium text-lg'>Personal consultant</p>
                <p className='opacity-75'>Adipscin elit</p>
              </div>
            </div>

            <div className='h-24 flex items-center gap-8 text-white  w-full justify-center'>
              <MdOutlineDiscount className='text-5xl' />
              <div>
                <p className='font-medium text-lg'>Regular discounts</p>
                <p className='opacity-75'>Consectur dolor</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#191919] pt-20 flex flex-col gap-32'>     
          <div className='max-w-[1293px] mx-auto text-white flex '>
            <div className='w-1/2 flex flex-col gap-32 '>
              <div>
                <Image alt="Footer logo" src='https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png' width={198} height={27} />
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <span className='font-medium text-lg'>Newsletter Signup</span>
                </div>
                <div className='flex items-center'>
                  <IoMailOutline className='text-2xl' />
                  <input placeholder='Enter Your Email Address' className='-translate-x-6 px-8 py-6 placeholder-stone-400 bg-transparent outline-none border-b-stone-600 border-b-2 w-full' />
                  <button className=' -translate-x-12 group'>
                    <FaArrowRight className='text-xl group-hover:text-main transition' />
                  </button>
                </div>
                <div className='flex items-center gap-3'>
                  <CustomCheckbox />
                  <span className='text-stone-400'>I agree to the <span className='underline'>Privacy Policy.</span></span>
                </div>
              </div>
            </div>
            <div className='w-1/2 '>
              <div className='flex flex-col gap-20'>
                <div className='md:block hidden'><p className='text-5xl font-medium'>Leading supplier of original wheels & tires for your car!</p></div>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-3 text-lg font-medium'>
                    <p className=''>Socials</p>
                    <ul className='flex flex-col gap-3'>
                      {
                        footerSocial.map((social, index) => (
                          <li className='text-stone-400 cursor-pointer group hover:translate-x-4 transition duration-300'>
                            <Link href={social.link} legacyBehavior>
                              <a target='_blank' rel='noopener noreferrer'>
                                <div className='w-fit'>
                                  <p className='group-hover:text-white'>{social.name} </p>
                                  <div className='h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-300'></div>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className='flex flex-col gap-3 text-lg font-medium'>
                    <p className=''>Menu</p>
                    <ul className='flex flex-col gap-3'>
                      {
                        footerHome.map((social, index) => (
                          <li className='text-stone-400 cursor-pointer group hover:translate-x-4 transition duration-300'>
                            <Link href={social.link} legacyBehavior>
                              <a target='_blank' rel='noopener noreferrer'>
                                <div className='w-fit'>
                                  <p className='group-hover:text-white'>{social.name} </p>
                                  <div className='h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-300'></div>
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className='flex flex-col gap-3 text-lg font-medium'>
                    <p className=''>Say Hello</p>
                    <ul className='flex flex-col gap-3 group'>
                      <p className='text-stone-400 group-hover:text-white transition cursor-pointer'>info@example.com</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[1293px] mx-auto text-white border-t border-t-stone-500 py-10 w-full'>
            <p className='text-lg'>ThemeRex <span className='text-stone-600'>© 2024. All rights reserved. </span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer