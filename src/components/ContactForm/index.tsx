import React from 'react'
import { CiUser } from 'react-icons/ci'
import { GiSmartphone } from 'react-icons/gi'
import { IoMdPaperPlane } from 'react-icons/io'
import { SlPencil } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'

const ContactForm = () => {
    return (
        <div className="w-full md:h-[624px] bg-white">
            <div className="max-w-[1293px] mx-auto py-20 flex justify-center md:justify-between md:flex-nowrap flex-wrap gap-12">
                <div className="w-2/5 flex flex-col gap-10 ">
                    <p className="text-5xl font-medium">Biography</p>
                    <p className="text-lg text-[#757574]">Ignissimos ducimus quin blandiitis praesentium voluptatem deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center text-lg gap-3">
                            <TfiEmail className="text-xl text-[#3183FF]" /><p>info@example.com</p>
                        </div>
                        <div className="flex items-center text-lg gap-3">
                            <GiSmartphone className="text-2xl text-[#3183FF]" /><p className="font-medium">+1 800 123 45 67</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col gap-6">
                    <p className="text-5xl font-medium">Contact Form</p>
                    <div className="flex items-center relative">
                        <input type="text" placeholder="Name" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 px-8 py-3 border-b-stone-300" />
                        <CiUser className="text-2xl left-0 absolute text-stone-600 " />
                    </div>
                    <div className="flex items-center relative">
                        <input type="text" placeholder="Email Address" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 px-8 py-3 border-b-stone-300" />
                        <TfiEmail className="text-2xl left-0 absolute text-stone-600 " />
                    </div>
                    <div className="flex items-center relative">
                        <textarea rows={3} cols={30} placeholder="How can we help you? Feel free to get in touch!" className="resize-none focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 px-8 py-3 border-b-stone-300" />
                        <SlPencil className="text-2xl left-0 absolute text-stone-600 " />
                    </div>
                    <button className="text-white flex items-center gap-2 bg-main w-fit px-10 py-4">
                        <IoMdPaperPlane /><p className="uppercase font-medium">get in touch</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm