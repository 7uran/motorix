import PageBanner from "@/components/PageBanner";
import { TiLocationOutline } from "react-icons/ti";
import { GiSmartphone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosInformationCircleOutline, IoMdPaperPlane } from "react-icons/io";
import { SlPencil } from "react-icons/sl";


export default function Contact() {
    return (
        <div className="min-h-screen">
            <PageBanner title="Contact" />
            <section className="max-w-[1293px] mx-auto py-40">
                <div className="flex md:flex-row flex-col justify-between w-full ">
                    <div className="flex flex-col gap-8 md:w-1/2 ">
                        <div className="md:w-2/3 flex flex-col gap-6">
                            <p className="uppercase font-medium">Contact Us</p>
                            <p className="md:text-6xl text-3xl font-medium">Have questions?<br />
                                Get in touch!</p>
                            <p className="text-lg text-stone-400">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="flex items-center text-stone-400 gap-3"><TiLocationOutline className="text-main text-3xl" />785 15h Street, Office 478 Berlin</p>
                            <p className="flex items-center font-medium  text-lg gap-3"><GiSmartphone className="text-main text-3xl" />+1 800 555 25 69</p>
                            <p className="flex items-center text-stone-400 gap-4"><TfiEmail className="text-main text-xl" />785 15h Street, Office 478 Berlin</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-wrap  ">
                        <div className="flex items-center relative w-1/2 h-[100px] x">
                            <input type="text" placeholder="Name" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black   border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-8 py-3 border-b-stone-300" />
                            <CiUser className="text-2xl left-0 absolute text-stone-600 " />
                        </div>
                        <div className="flex items-center relative w-1/2 h-[100px] x">
                            <input type="text" placeholder="Email Address" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black   border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-8 py-3 border-b-stone-300" />
                            <TfiEmail className="text-2xl left-0 absolute text-stone-600 " />
                        </div>
                        <div className=" flex items-center relative w-1/2 h-[100px] x">
                            <input type="text" placeholder="Phone" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black   border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-8 py-3 border-b-stone-300" />
                            <FiPhoneCall className="text-2xl left-0 absolute text-stone-600 " />
                        </div>
                        <div className=" flex items-center relative w-1/2 h-[100px] x">
                            <input type="text" placeholder="Subject" className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black   border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-8 py-3 border-b-stone-300" />
                            <IoIosInformationCircleOutline className="text-2xl left-0 absolute text-stone-600 " />
                        </div>
                        <div className="flex items-center relative w-full">
                            <textarea rows={3} cols={30} placeholder="How can we help you? Feel free to get in touch!" className="resize-none focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black bg-transparent w-full border-b-2 outline-none hover:border-b-black transition duration-300 px-8 py-3 border-b-stone-300" />
                            <SlPencil className="text-2xl left-0 absolute text-stone-600 " />
                        </div>
                        <button className="text-white flex items-center gap-2 bg-main w-fit px-10 py-3 mt-5">
                            <IoMdPaperPlane className="text-xl" /><p className="uppercase font-medium">get in touch</p>
                        </button>


                    </div>

                </div>

            </section>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10450.990126480601!2d13.402880890213572!3d52.51860886698907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Almanya!5e1!3m2!1str!2saz!4v1731068511290!5m2!1str!2saz" className="w-full h-screen" loading="lazy" ></iframe>
            </div>
        </div>
    )
}
