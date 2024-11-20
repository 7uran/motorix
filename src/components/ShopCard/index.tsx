import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { MdDone } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import ShopCardModal from '../ShopCardModal';
import { ShopCardProps } from '@/types/type';
import { useRouter } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { TbHeartCheck } from "react-icons/tb";
import { IoCloseCircleOutline } from 'react-icons/io5';


const ShopCard: React.FC<ShopCardProps> = ({ title, price, rating, image, id, category }) => {
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
    const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
    const [wishlistModalMessage, setWishlistModalMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const itemExists = wishlist.some((item: any) => item.id === id);
        setIsAddedToWishlist(itemExists);
    }, [id]);

    const openDetailModal = () => setIsDetailModalOpen(true);
    const closeDetailModal = () => setIsDetailModalOpen(false);

    const openWishlistModal = (message: string) => {
        setWishlistModalMessage(message);
        setIsWishlistModalOpen(true);

        setTimeout(() => {
            setIsWishlistModalOpen(false);
        }, 5000);
    };

    const closeWishlistModal = () => setIsWishlistModalOpen(false);

    const formattedPrice = `${price.toLocaleString('en-US')}.00`;

    useEffect(() => {
        if (isDetailModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isDetailModalOpen]);

    const handleRedirect = () => {
        router.push(`/shop/product?id=${id}`);
    };

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex((item: any) => item.id === id);
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id,
                image,
                name: title,
                price,
                quantity: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setIsAddedToCart(true);
    };

    const handleAddToWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const itemExists = wishlist.some((item: any) => item.id === id);

        if (!itemExists) {
            wishlist.push({ id, title, image, price });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            setIsAddedToWishlist(true);
            openWishlistModal(`${title} added to Wishlist!`);
        } else {
            const updatedWishlist = wishlist.filter((item: any) => item.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            setIsAddedToWishlist(false);
            openWishlistModal(`${title} removed from Wishlist!`);
        }
    };

    return (
        <div className='w-[250px] group flex flex-col gap-3'>
            <div
                className='relative w-[250px] h-[250px] overflow-hidden bg-black cursor-pointer'
            >
                <Image
                    className='group-hover:opacity-90 duration-300 transition'
                    alt={title}
                    src={`http://localhost:3001/${image}`}
                    width={250}
                    height={250}
                    onClick={handleRedirect}
                />
                <button
                    className='text hover:text-stone-600 transition duration-300 absolute top-4 right-4 text-xl flex items-center justify-center bg-[#F0EEEF] rounded-full w-[40px] h-[40px]'
                    onClick={handleAddToWishlist}
                >
                    {isAddedToWishlist ? <GoHeartFill /> : <GoHeart />}
                </button>
                <div className='flex bg-[#F0EEEF] group-hover:-translate-y-[40px] duration-300 transition opacity-0 group-hover:opacity-100'>
                    <button
                        onClick={openDetailModal}
                        className='w-full h-[40px] text-xl hover:text-stone-600 transition duration-300 flex items-center justify-center'
                    >
                        <FaRegEye />
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className='w-full h-[40px] text-xl hover:text-stone-600 transition duration-300 flex items-center justify-center'
                    >
                        {isAddedToCart ? <MdDone /> : <HiOutlineShoppingCart />}
                    </button>
                </div>
            </div>
            <div>
                <p
                    className='font-medium text-xl hover:text-main duration-300 transition cursor-pointer'
                    onClick={handleRedirect}
                >
                    {title}
                </p>
                <span className='text-lg text-gray-600'>${formattedPrice}</span>
                <div className='text-[#FFC107] text-sm flex gap-1'>
                    {Array(rating)
                        .fill(0)
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                </div>
            </div>

            {isWishlistModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1]">
                    <div className="bg-white p-6 w-[360px] h-[291px] flex flex-col justify-between">
                        <div className='flex flex-col items-center gap-3 text-stone-500'>
                            {isAddedToWishlist ? (
                                <TbHeartCheck className='text-6xl' />
                            ) : (
                                <IoCloseCircleOutline className='text-6xl' />
                            )}
                            <h3 className="text-lg">{wishlistModalMessage}</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button
                                className="bg-main w-full uppercase text-white flex items-center gap-2 font-medium justify-center py-3"
                            >
                                <FaRegHeart />
                                View Wishlist
                            </button>
                            <button
                                className="bg-main w-full uppercase text-white flex items-center gap-2 font-medium justify-center py-3"
                                onClick={closeWishlistModal}
                            >
                                <IoMdClose />
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ShopCardModal
                isOpen={isDetailModalOpen}
                onClose={closeDetailModal}
                title={title}
                price={price}
                rating={rating}
                image={image}
                id={id}
                category={category}
            />
        </div>
    );
};

export default ShopCard;
