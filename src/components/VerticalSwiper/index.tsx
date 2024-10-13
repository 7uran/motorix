"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sliderItems } from '@/static/mockdb';

const VerticalSwiper = () => {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            className="w-full h-screen animate-swiper-scale transition duration-500"
            style={{ overflow: 'hidden' }}
            simulateTouch={false}
            allowTouchMove={false}
        >
            {sliderItems.map((item) => (
                <SwiperSlide key={item.id} className="relative flex justify-center items-center select-none">
                    <Image
                        src={item.img}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        draggable="false"
                        className="transition-transform duration-1000 select-none"
                    />
                    <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black opacity-50 to-transparent"></div>
                    <motion.div
                        key={item.id}
                        className="absolute bottom-5 left-5 text-white w-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            duration: 2,
                        }}
                    >
                        {item.desc}
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default VerticalSwiper;
