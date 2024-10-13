"use client";
import ProductCard from "@/components/ProductCard";
import VerticalSwiper from "@/components/VerticalSwiper";
import WidgetCard from "@/components/WidgetCard";
import { WidgetCardImages } from "@/static/mockdb";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WheelsAndTires() {
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

            <section className="max-w-[1291px] mx-auto " >
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

            <section className="bg-[#F0EEEF] py-36">
                <div className="max-w-[1291px] mx-auto">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase tracking-wider	">about us</p>
                        <h1 className="text-6xl font-semibold ">
                            Your reliable partner<br />
                            for the best wheels and tires
                        </h1>
                    </div>
                    <div>
                        <div>
                            <Image width={819} height={468} alt="" src={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-26-copyright.jpg"} />
                        </div>
                        <div>

                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
}
