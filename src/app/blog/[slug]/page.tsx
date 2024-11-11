"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import BlogSidebar from "@/components/BlogSidebar";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Tag from "@/components/Tag";
import { IoHeartOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight, FaDribbble, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoIosLink } from "react-icons/io";

export default function Page() {
    const [data, setData] = useState<any>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    useEffect(() => {
        if (id) {

            fetch(`http://localhost:3001/api/v1/blogs/${id}`)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [id]);

    return (
        <div className="min-h-screen">
            {data ? (
                <div>
                    <div>
                        <Image src={`http://localhost:3001/${data.image}`} className="w-full h-[612px] object-cover " alt="Blog Image" width={411} height={612} />
                    </div>
                    <div>
                        <div className="max-w-[1059px] gap-6 mx-auto -translate-y-1/2 flex flex-col justify-center py-12 items-center bg-[#F0EEEF] ">
                            <div className='bg-[#0A83FF] w-fit px-4 flex items-center justify-center cursor-pointer py-1 hover:bg-[#6eb7ff] transition duration-300'>
                                <span className='text-white uppercase text-xs font-medium'>Maintenance</span>
                            </div>
                            <div >
                                <h1 className="text-5xl text-center font-medium px-48">
                                    {data.title}
                                </h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex gap-3 items-center group cursor-pointer">
                                    <Image src={"https://secure.gravatar.com/avatar/034d0d50b729d2cb6a0ef19af78238cd?s=56&d=mm&r=g"} alt=" " width={32} height={32} className="cursor-pointer rounded-full" />
                                    <span className="uppercase group-hover:text-main transition duration-300 ">Ashton Porter</span>
                                </div>

                                <LuDot className="text-gray-400" />
                                <span className="text-gray-400 text-sm">Jan 17,2024 </span>
                                <LuDot className="text-gray-400" />
                                <span className="text-gray-400 text-sm cursor-pointer hover:text-black transition duration-300"> 0 Comments</span>
                            </div>
                        </div>
                        <div className="max-w-[1293px] mx-auto -translate-y-[150px] flex justify-between  ">
                            <div className="w-[840px] flex flex-col gap-8">
                                <div className="text-lg  text-stone-500 leading-10 first-letter:text-6xl first-letter:text-black first-letter:font-medium first-letter:float-left  line-clamp-6 h-[200px] ">
                                    {data.content}

                                </div>
                                <div className="w-full p-12 bg-white border-l-2 border-l-blue-600">
                                    <div>
                                        <BiSolidQuoteAltLeft className="text-3xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xl">Curabitur varius eros et lacus rutrum consequat. Mauris sollicitudin enim condimentum, luctus justo non, molestie nisl.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-stone-500 leading-10 text-lg" >Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                        <br />
                                        <br />
                                        Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.   </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <Image src={`http://localhost:3001/${data.slugImgs.img1}`} alt="" width={415} height={233} />
                                        <Image src={`http://localhost:3001/${data.slugImgs.img2}`} alt="" width={415} height={233} />
                                    </div>
                                    <div>
                                        <Image src={`http://localhost:3001/${data.slugImgs.img3}`} className="w-full" alt="" width={415} height={472} />
                                    </div>

                                </div>
                                <div>
                                    <p className="font-medium text-2xl">Creative approach to every project</p>
                                    <span className="text-stone-400 text-lg leading-8 font-sans">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique, justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique, pulvinar neque at, lobortis tortor</span>
                                    <br />
                                    <br />
                                    <span className="text-stone-400 text-lg leading-8 font-sans">
                                        Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <Tag text="Car care" />
                                    <Tag text="Refurbishing" />
                                    <Tag text="Upgrading" />
                                </div>
                                <div className="border-y-2 py-10 flex justify-between ">
                                    <div className="flex cursor-pointer items-center gap-3 group hover:text-main duration-300 transition">
                                        <button className="text-xl rounded-full border w-[44px] h-[44px] flex items-center justify-center border-gray-300"><IoHeartOutline /></button>
                                        <span className="text-gray-400 group-hover:text-main duration-300 transition">1</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-[#48BDE9] rounded-full flex items-center justify-center hover:-translate-y-1 w-[45px] h-[45px] transition duration-300 text-white"><FaXTwitter />
                                        </button>
                                        <button className="bg-[#4F5FBF] rounded-full flex items-center justify-center hover:-translate-y-1 w-[45px] h-[45px] transition duration-300 text-white"><FaFacebookF />
                                        </button>
                                        <button className="bg-[#7A7E83] rounded-full flex items-center justify-center hover:-translate-y-1 w-[45px] h-[45px] transition duration-300 text-white"><TfiEmail />
                                        </button>
                                        <button className="bg-white rounded-full flex items-center justify-center hover:-translate-y-1 w-[45px] h-[45px] transition duration-300 "><IoIosLink />
                                        </button>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <button className="flex items-center gap-1 text-sm uppercase text-gray-400 font-medium">
                                            <FaAngleLeft />Previuos
                                        </button>

                                        <button className="flex items-center gap-1 text-sm uppercase text-gray-400 font-medium">
                                            Next<FaAngleRight />
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white flex h-[226px] p-8 gap-5">
                                    <div>
                                        <Image alt="" width={78} height={78} src={"https://secure.gravatar.com/avatar/034d0d50b729d2cb6a0ef19af78238cd?s=120&d=mm&r=g"} />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg font-medium hover:text-main duration-300 transition cursor-pointer">Ashton Porter</p>
                                        <span className="text-gray-400 text-sm uppercase">About Author</span>
                                        <p className="text-gray-400 text-lg">Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis.<br /> Praesent at nulla aliquam ligula.</p>
                                        <div className="flex gap-5 items-center text-sm cursor-pointer "><FaFacebookF className="hover:text-main duration-300 transition" /><FaXTwitter className="hover:text-main duration-300 transition" /><FaDribbble className="hover:text-main duration-300 transition" /> <FaInstagram className="hover:text-main duration-300 transition" /></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p className="text-4xl font-medium">0 Comments</p>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image width={78} height={78} alt="" className="rounded-full" src={"https://secure.gravatar.com/avatar/ff17b4a4115455660e0779a4a8e71592?s=90&d=mm&r=g"} />
                                        </div>
                                        <div>
                                            <div className="flex gap-2 items-center">
                                                <p className="text-lg font-medium">Test</p>
                                                <span className="text-sm text-stone-400">Nov 11, 2024 at 12:19 pm</span>
                                            </div>
                                            <div>
                                                <p className="text-lg text-stone-600">test</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p className="text-4xl font-medium">Leave a comment</p>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex gap-8">
                                            <input className="border-b font-sans focus:outline-dashed bg-transparent focus:placeholder:text-black placeholder:duration-300 placeholder:transition duration-300 transition border-b-gray-400 w-full py-3" placeholder="Your Name *" />
                                            <input className="border-b font-sans focus:outline-dashed bg-transparent focus:placeholder:text-black placeholder:duration-300 placeholder:transition duration-300 transition border-b-gray-400 w-full py-3" placeholder="Your E-mail *" />
                                        </div>
                                        <div>
                                            <textarea rows={3} cols={30} placeholder="Your comment *" className="font-sans resize-none border-b focus:outline-dashed bg-transparent focus:placeholder:text-black placeholder:duration-300 placeholder:transition duration-300 transition border-b-gray-400 w-full py-3  "  >
                                            </textarea>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                className="hidden"
                                                type="radio"
                                                id="subscribe"
                                                name="agreement"
                                                value="yes"
                                            />
                                            <label
                                                htmlFor="subscribe"
                                                className="flex items-center cursor-pointer text-stone-400 group"
                                            >
                                                <span className="w-5 h-5 mr-2 inline-block border-2 border-gray-300 transition duration-300 rounded-md group-hover:border-gray-500 relative">
                                                    <span className="absolute w-3 h-3 bg-black rounded-full opacity-0 group-checked:opacity-100 left-1 top-1"></span>
                                                </span>
                                                I agree that my submitted data is being collected and stored.
                                            </label>
                                        </div>
                                        <div>
                                            <button className="uppercase bg-main text-white font-medium px-10 py-4 hover:bg-orange-600 transition duration-300">leave a comment</button>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <BlogSidebar />
                        </div>
                    </div>



                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}
