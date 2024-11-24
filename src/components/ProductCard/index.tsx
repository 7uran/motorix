import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoArrowRight, GoHeart, GoHeartFill } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { ProductCardProps } from '@/types/type';
import { toast } from 'react-toastify';

const ProductCard: React.FC<ProductCardProps> = ({ image, title, rating, price, url, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [wishlist, setWishlist] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    const isItemInWishlist = wishlist.some(item => item.id === id);

    const handleRedirect = () => {
        if (url) {
            router.push(url);
        } else {
            console.error("URL is undefined or invalid");
        }
    };

    const handleToggleWishlist = () => {
        let updatedWishlist;
        if (isItemInWishlist) {
            updatedWishlist = wishlist.filter(item => item.id !== id);
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.info("Removed from wishlist");
        } else {
            const newItem = { id, title, image, price };
            updatedWishlist = [...wishlist, newItem];
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.success("Added to wishlist");
        }
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return (
        <div className="w-fit cursor-default py-16">
            <div
                className="group overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    className="group-hover:scale-110 duration-500 cursor-pointer"
                    alt={title}
                    width={410}
                    height={410}
                    src={`http://localhost:3001/${image}`}
                />
                <div className="absolute z-[1] top-0 flex gap-2 w-full h-full items-center justify-center">
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center z text-xl ${isHovered ? "opacity-100" : "opacity-0"}`}
                        onClick={handleToggleWishlist}
                    >
                        {isItemInWishlist ? <GoHeartFill /> : <GoHeart />}
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? "opacity-100" : "opacity-0"}`}
                        onClick={handleRedirect}
                    >
                        <HiOutlineShoppingCart />
                    </button>
                    <button
                        className={`hover:text-main hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-600 text-xl ${isHovered ? "opacity-100" : "opacity-0"}`}
                        onClick={handleRedirect}
                    >
                        <GoArrowRight />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 py-3">
                <p className="text-2xl font-medium transition duration-500 cursor-pointer hover:text-main">{title}</p>
                <div className="text-[#FFC107] text-sm flex gap-0.5">
                    {[...Array(rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <p className="text-lg text-gray-500">{formattedPrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;
