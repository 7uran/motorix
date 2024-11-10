import React from 'react'
import { SlMagnifier } from "react-icons/sl";

import { BsDot } from "react-icons/bs";
import MiniBlogCard from "@/components/MiniBlogCard";
import Tag from "@/components/Tag";
import Image from "next/image";

const BlogSidebar = () => {
    return (
        <div className="w-[410px] h-fit bg-white top-0 sticky px-10 py-16 flex flex-col gap-8 ">
            <div className="flex flex-col gap-5">
                <p className="text-xl font-medium">Search</p>
                <div className="relative">
                    <SlMagnifier className="absolute top-4 left-4 text-lg" />
                    <input className="border w-full outline-none focus:placeholder:text-black h-[48px] py-4 px-12 placeholder:text-lg" placeholder="Search..." />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-medium">Categories</p>
                <div className="font-sans">
                    <div className="flex gap-2 items-center">
                        <span className=" cursor-pointer flex items-center gap-2 text-lg hover:text-main transition duration-300"><BsDot /> Detailing </span><span>(2)</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className=" cursor-pointer flex items-center gap-2 text-lg hover:text-main transition duration-300"><BsDot /> Maintenance  </span><span>(9)</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className=" cursor-pointer flex items-center gap-2 text-lg hover:text-main transition duration-300"><BsDot /> Standart </span><span>(6)</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-6 flex-col">
                <p className="text-xl font-medium">Recent Posts</p>
                <MiniBlogCard title="Battery health: prolonging your car’s power" img="https://motorix.themerex.net/wp-content/uploads/2024/01/img-73-copyright-120x120.jpg" />
                <MiniBlogCard title="Suspension systems: ensuring a smooth ride" img="https://motorix.themerex.net/wp-content/uploads/2024/01/img-70-copyright-120x120.jpg" />
            </div>
            <div className="flex gap-6 flex-col">
                <p className="text-xl font-medium">Tags</p>
                <div className="flex flex-wrap gap-1">
                    <Tag text="Car care" />
                    <Tag text="Coating" />
                    <Tag text="Engine" />
                    <Tag text="Polishing" />
                    <Tag text="Protecting" />
                    <Tag text="Refurbishing" />
                    <Tag text="Servicing" />
                    <Tag text="Tires" />
                    <Tag text="Tune-up" />
                    <Tag text="Upgrading" />
                    <Tag text="Vehicle" />
                </div>

            </div>

            <div className="border-[14px] border-gray-300 bg-green-50 w-fit">
                <Image src={"https://motorix.themerex.net/wp-content/uploads/2024/01/Banner-copyright.jpg"} alt="" width={300} height={254} />
            </div>


        </div>
    )
}

export default BlogSidebar