"use client";
import AlloyWheelsCard from "@/components/AlloyWheelsCard";
import BlogCardHome from "@/components/BlogCardHome";
import CommentCard from "@/components/CommentCard";
import ProductCard from "@/components/ProductCard";
import StickyCards from "@/components/StickyCards";
import VerticalSwiper from "@/components/VerticalSwiper";
import WidgetCard from "@/components/WidgetCard";
import { commentsData, WidgetCardImages } from "@/static/mockdb";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosPlay } from "react-icons/io";
import { useInView } from 'react-intersection-observer';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from "next/navigation";
import { getData } from "@/utils/api";
import { BlogsResponse } from "@/types/type";
import ShopCardModal from "@/components/ShopCardModal";





export default function WheelsAndTires() {
    interface Product {
        _id: string;
        name: string;
        price: number;
        image: string;
        rating: number;
        category: string;
    }
    const router = useRouter();
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });
    const [startCount, setStartCount] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
    const [blogsData, setBlogsData] = useState<BlogsResponse | null>(null);
    const [shopCards, setShopCards] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuickViewClick = (id: string) => {
        const product = shopCards.find(card => card._id === id);
        if (product) {
            setSelectedProduct(product);
            console.log(selectedProduct);

            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getData("http://localhost:3001/api/v1/blogs");
            if (data) setBlogsData(data);
        };
        fetchBlogs();
    }, []);
    const handleCardClick = (index: number) => {
        setSelectedCardIndex(index);
    };

    const handleNextComment = () => {
        setSelectedCardIndex((prevIndex) =>
            prevIndex === commentsData.length - 1 ? 0 : prevIndex + 1
        );
    };
    const handlePreviousComment = () => {
        setSelectedCardIndex((prevIndex) =>
            prevIndex === 0 ? commentsData.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        if (inView) {
            setStartCount(true);
        }
    }, [inView]);

    const handleVideoClick = () => {
        setIsVideoVisible(true);
    };
    useEffect(() => {
        const fetchShopCards = async () => {
            const data = await getData("http://localhost:3001/api/v1/shopCards");

            if (data && Array.isArray(data.shopCards)) {
                setShopCards(data.shopCards);
            } else {
                console.error("Invalid data format:", data);
                setShopCards([]);
            }
        };

        fetchShopCards();
    }, []);
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsVideoVisible(false);
        }
    };

    useEffect(() => {
        if (isVideoVisible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }


        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isVideoVisible]);

    return (
        <div className="bg-white">
            <div className="relative">
                <VerticalSwiper />
            </div>
            <section id="offers">
                <div className="flex justify-center flex-wrap md:flex-nowrap ">
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
                        <p className="uppercase font-medium tracking-wider ">New Arrivals</p>
                        <h1 className="md:text-6xl text-3xl font-medium">Popular wheels</h1>
                    </div>
                    <div className="flex justify-center md:justify-between flex-wrap">
                        {shopCards.slice(0, 3).map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2
                                }}
                                viewport={{ once: true }}
                                className="w-fit"
                            >
                                <ProductCard
                                    img={card.image}
                                    title={card.name}
                                    rating={card.rating}
                                    price={card.price}
                                    url={`shop/product?id=${card._id}`}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <button onClick={() => router.push("/shop")} className="hover:bg-[#ee5600] transition duration-300 uppercase bg-main text-sm text-white w-[215px] h-[56px] font-semibold tracking-wider ">view all wheels</button>
                    </div>

                </div>
            </section>

            <section className="bg-[#F0EEEF] pt-36">
                <div className="max-w-[1293px] mx-auto flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase tracking-wider	">about us</p>
                        <h1 className="md:text-6xl text-3xl font-medium ">
                            Your reliable partner<br />
                            for the best wheels and tires
                        </h1>
                    </div>
                    <div className="flex md:gap-16 flex-wrap">
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
                                className="md:w-[629px] md:h-[276px]  md:-translate-x-[270px] translate-y-20 text-white bg-main font-semibold absolute flex items-center md:justify-between px-20"
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
                <div className="pt-10 md:flex hidden">
                    <Marquee speed={200} className="text-[250px]">Wheels And Tires   </Marquee>
                </div>

            </section>
            <section>
                <div className="relative bg-black hidden md:flex">

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
                            <div className="md:flex hidden flex-col gap-6">
                                <p className="uppercase">showcase</p>
                                <p className="md:text-6xl font-semibold">
                                    Review of the latest arrivals<br /> in wheels and tires
                                </p>
                                <button onClick={() => router.push("/shop")} className="hover:bg-[#ee5600] transition duration-300 uppercase bg-main text-sm text-white w-[215px] h-[56px] font-semibold tracking-wider">
                                    view all wheels
                                </button>
                            </div>
                        </motion.div>



                        <button
                            className="rounded-full border-2 border-white w-[75px] h-[75px] hidden md:flex items-center justify-center text-2xl hover:text-main hover:border-main transition duration-300"
                            onClick={handleVideoClick}
                        >
                            <IoIosPlay />
                        </button>

                        {isVideoVisible && (
                            <div
                                className="absolute inset-0 z-[999999999] flex items-center justify-center h-[1000px] bg-white opacity-90"
                                onClick={handleOutsideClick}
                            >
                                <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '80%', height: '100%' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/62549427?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '60%' }}
                                        title="Plaza Performance - Wheels and Tires"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="max-w-[1293px] mx-auto py-40">
                <div className="flex flex-col items-center justify-center md:mt-0 mt-32  ">
                    <p className="text-sm uppercase">Top Sellers</p>
                    <h1 className="md:text-6xl text-3xl font-medium">
                        Featured alloy wheels
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between py-10 ">
                    {shopCards
                        .filter(card => card.category === "Custom wheels")
                        .slice(0, 6)
                        .map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2
                                }}
                                viewport={{ once: true }}
                                className="w-fit"
                            >
                                <AlloyWheelsCard
                                    id={card._id}
                                    title={card.name}
                                    price={card.price}
                                    img={card.image}
                                    onQuickViewClick={handleQuickViewClick}
                                />
                            </motion.div>
                        ))}
                    <ShopCardModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        title={selectedProduct?.name || 'Default Product Name'}
                        price={selectedProduct?.price || 0}
                        rating={selectedProduct?.rating || 0}
                        image={selectedProduct?.image || ''}
                        id={selectedProduct?._id || ''}
                        category={selectedProduct?.category || 'Default Category'}
                    />
                </div>

            </section>
            <section className="max-w-[1293px] mx-auto ">
                <div className="flex md:flex-row flex-col-reverse  justify-between">
                    <div className="md:w-[30%] flex md:flex-row flex-col gap-8">
                        {commentsData.map((data, index) => (
                            <CommentCard
                                key={index}
                                {...data}
                                isSelected={index === selectedCardIndex}
                                onCardClick={() => handleCardClick(index)}
                            />
                        ))}
                    </div>
                    <div className="text-2xl w-[63%] flex  flex-col gap-10">
                        {commentsData[selectedCardIndex].comments.map((comment, idx) => (
                            <p key={idx} className="transition-all flex justify-center duration-300">
                                {comment}
                            </p>
                        ))}
                        <div className="flex gap-2">
                            <button
                                className="w-[56px] h-[56px] border rounded-full flex items-center transition duration-300 justify-center hover:text-main"
                                onClick={handlePreviousComment}
                            >
                                <GoArrowLeft />
                            </button>
                            <button
                                className="w-[56px] h-[56px] border rounded-full flex items-center transition duration-300 justify-center hover:text-main"
                                onClick={handleNextComment}
                            >
                                <GoArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1370px] mx-auto py-20">
                <div className="flex gap-40 flex-col">
                    <StickyCards
                        image={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-28-copyright.jpg"}
                        index={1}
                        type={"Turbine wheels"}
                        title={"Porsche alloy wheels"}
                        desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}
                        slug={"wheels"}
                    />

                    <StickyCards
                        image={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-34-copyright.jpg"}
                        index={2}
                        type={"intricate design"}
                        title={"Satin gold wheels"}
                        desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}
                        slug={"wheels"}
                    />


                    <StickyCards
                        image={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-33-copyright.jpg"}
                        index={3}
                        type={"Luxury quality"}
                        title={"Performance wheels"}
                        desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}
                        slug={"wheels"}
                    />
                </div>
            </section>

            <section>
                <div className="max-w-[1293px] mx-auto py-20">
                    <div className="flex items-center flex-col">
                        <p className="uppercase text-sm font-medium">our blog</p>
                        <p className="text-6xl font-medium">Tips and latest news</p>
                    </div>
                    <div className="py-16">
                        {blogsData?.blogs?.length ? (
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="mySwiper"
                                breakpoints={{
                                    640: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 30 },
                                    1024: { slidesPerView: 3, spaceBetween: 30 },
                                }}
                            >
                                {blogsData.blogs.map((blog) => (
                                    <SwiperSlide key={blog._id}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="w-fit"
                                        >
                                            <BlogCardHome
                                                _id={blog._id}
                                                title={blog.title}
                                                img={`http://localhost:3001/${blog.image}`}
                                                commentCount={blog.comments?.length || 0}
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <p className="text-center text-gray-500">No blogs available</p>
                        )}
                    </div>
                </div>
            </section>


        </div >
    );
}
