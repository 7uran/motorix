"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { sliderItems } from '@/mockdb';


const VerticalSwiper = () => {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="w-full h-screen animate-swiper-scale transition duration-500"
            style={{ overflow: 'hidden' }}
        >
            {sliderItems.map((item) => (
                <SwiperSlide key={item.id} className="relative flex justify-center items-center">
                    <Image
                        src={item.img}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-1000"
                    />
                    <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black opacity-50 to-transparent"></div>
                    <div className="absolute bottom-5 left-5 text-white w-full">
                        {item.desc}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default VerticalSwiper;
