"use client";
import AlloyWheelsCard from "@/components/AlloyWheelsCard";
import ProductCard from "@/components/ProductCard";
import VerticalSwiper from "@/components/VerticalSwiper";
import WidgetCard from "@/components/WidgetCard";
import { WidgetCardImages } from "@/static/mockdb";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { IoIosPlay } from "react-icons/io";
import { useInView } from 'react-intersection-observer';

export default function WheelsAndTires() {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartCount(true);
        }
    }, [inView]);

    const handleVideoClick = () => {
        setIsVideoVisible(true);
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsVideoVisible(false);
        }
    };

    return (
        <div>
            <div className="relative">
                <VerticalSwiper />
            </div>
            <section id="offers">
                <div className="flex justify-center">
                    {WidgetCardImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1
                            }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <WidgetCard src={src} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-[1293px] mx-auto " >
                <div className="py-36">
                    <div className="flex justify-center flex-col items-center">
                        <p className="uppercase font-semibold tracking-wider">New Arrivals</p>
                        <h1 className="text-6xl font-semibold">Popular wheels</h1>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2
                                }}
                                viewport={{ once: true }}
                                className="w-fit "
                            >
                                <ProductCard />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="hover:bg-[#ee5600] transition duration-300 uppercase bg-main text-sm text-white w-[215px] h-[56px] font-semibold tracking-wider ">view all wheels</button>
                    </div>

                </div>
            </section>

            <section className="bg-[#F0EEEF] pt-36">
                <div className="max-w-[1293px] mx-auto flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase tracking-wider	">about us</p>
                        <h1 className="text-6xl font-semibold ">
                            Your reliable partner<br />
                            for the best wheels and tires
                        </h1>
                    </div>
                    <div className="flex gap-16">
                        <div className="w-[819px] h-[468px]">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,

                                }}
                                viewport={{ once: true }}
                                className="w-fit ">
                                <Image className="object-cover" width={819} height={468} alt="" src={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-26-copyright.jpg"} />

                            </motion.div>
                        </div>
                        <div className="relative">
                            <div className="text-lg flex flex-col gap-10">
                                <p className="text-[#757574]">Adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud.</p>
                                <p className="text-[#757574]">Wiusmod tempor incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim.</p>
                                <div className=" w-fit group cursor-pointer">
                                    <Link className="font-medium" href={""}>Read More</Link>
                                    <div className="w-full group-hover:w-0 h-0.5 bg-black transition-all duration-500 ease-in-out"></div>
                                </div>
                            </div>
                            <div
                                ref={ref}
                                className="w-[629px] h-[276px] -translate-x-[270px] translate-y-20 text-white bg-main font-semibold absolute flex items-center justify-between px-20"
                            >
                                <div className="flex flex-col gap-3">
                                    <p className="text-xl ">Brands</p>
                                    <p className="text-6xl ">
                                        {startCount && <CountUp start={0} end={100} duration={3} />}+
                                    </p>
                                    <span className="text-xl opacity-75">Adipiscing elit, do eiusm.</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-xl ">Shops</p>
                                    <p className="text-6xl ">
                                        {startCount && <CountUp start={0} end={12} duration={3} />}
                                    </p>
                                    <span className="text-xl opacity-75">Sed do eiusmod tempor.</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </section>
            <section className="bg-[#F0EEEF]">
                <div className="pt-10">
                    <Marquee speed={200} className="text-[250px]">Wheels And Tires   </Marquee>
                </div>

            </section>
            <section>
                <div className="relative bg-black">

                    <Image
                        width={1293}
                        height={607}
                        className="w-full filter opacity-50"
                        alt=""
                        src={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-27-copyright.jpg"}
                    />

                    <div className="absolute top-0 text-white px-[116px] py-[188px] flex justify-between items-center w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, }}
                            transition={{
                                duration: 0.7,

                            }}

                            viewport={{ once: true }}
                            className=""
                        >
                            <div className="flex flex-col gap-6">
                                <p className="uppercase">showcase</p>
                                <p className="text-6xl font-semibold">
                                    Review of the latest arrivals<br /> in wheels and tires
                                </p>
                                <button className="hover:bg-[#ee5600] transition duration-300 uppercase bg-main text-sm text-white w-[215px] h-[56px] font-semibold tracking-wider">
                                    view all wheels
                                </button>
                            </div>
                        </motion.div>



                        <button
                            className="rounded-full border-2 border-white w-[75px] h-[75px] flex items-center justify-center text-2xl hover:text-main hover:border-main transition duration-300"
                            onClick={handleVideoClick}
                        >
                            <IoIosPlay />
                        </button>


                        {isVideoVisible && (
                            <div
                                className="absolute inset-0 z-50 flex items-center justify-center bg-white opacity-90"
                                onClick={handleOutsideClick}
                            >
                                <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '80%', height: '100%' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/62549427?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', bottom: 80, left: 0, width: '100%', height: '70%' }}
                                        title="Plaza Performance - Wheels and Tires"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="max-w-[1293px] mx-auto py-40">
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-sm uppercase">Top Sellers</p>
                    <h1 className="text-6xl font-semibold">
                        Featured alloy wheels
                    </h1>
                </div>
                <div>
                    <AlloyWheelsCard />
                </div>
            </section>

        </div >
    );
}
