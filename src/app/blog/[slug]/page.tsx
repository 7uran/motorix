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
import { FaFacebookF } from "react-icons/fa";
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
