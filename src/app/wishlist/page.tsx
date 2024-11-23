"use client"
import { useState, useEffect } from 'react';
import PageBanner from "@/components/PageBanner";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState<any[]>([]);
    const [isAddedToCart, setIsAddedToCart] = useState<boolean[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlistItems(storedWishlist);
        setIsAddedToCart(new Array(storedWishlist.length).fill(false));
    }, []);

    const handleAddToCart = (index: number, item: any) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex((cartItem: any) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({
                id: item.id,
                image: item.image,
                name: item.title,
                price: item.price,
                quantity: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));


        const updatedWishlist = wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        const updatedAddedToCart = [...isAddedToCart];
        updatedAddedToCart[index] = true;
        setIsAddedToCart(updatedAddedToCart);
    };

    const handleAddAllToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        wishlistItems.forEach(item => {
            const existingItemIndex = cart.findIndex((cartItem: any) => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: item.id,
                    image: item.image,
                    name: item.title,
                    price: item.price,
                    quantity: 1,
                });
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));


        localStorage.setItem('wishlist', JSON.stringify([]));
        setWishlistItems([]);
        setIsAddedToCart([]);
    };

    return (
        <div className="min-h-screen bg-white">
            <PageBanner title="Wishlist" />
            <div className="container mx-auto p-6 max-w-[1319px]">
                {wishlistItems.length > 0 ? (
                    <div>
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className='bg-[#F0EEEF]'>
                                    <th className="py-8 px-6 text-left font-normal text-xl"></th>
                                    <th className="py-8 px-6 text-left text-xl font-normal">Unit Price</th>
                                    <th className="py-8 px-6 text-left text-xl font-normal">Product Name</th>
                                    <th className="py-8 px-6 text-left text-xl font-normal"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.map((item, index) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="px-4 py-2">
                                            <Image
                                                src={`http://localhost:3001/${item.image}`}
                                                alt={item.title}
                                                width={120}
                                                height={120}
                                                className="object-cover"
                                            />
                                        </td>
                                        <td className="px-4 py-2 text-xl">${item.price}</td>
                                        <td className="px-4 py-2 text-xl">{item.title}</td>

                                        <td className="px-4 py-2">
                                            <button
                                                onClick={() => handleAddToCart(index, item)}
                                                className={`w-[180px] h-[56px] px-4 py-2 uppercase text-white bg-orange-500 hover:bg-orange-600`}
                                                disabled={isAddedToCart[index]}
                                            >

                                                add to cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleAddAllToCart}
                                className="px-6 w-[180px] h-[56px] py-2 uppercase bg-orange-500 hover:bg-orange-600 text-white font-medium"
                            >
                                Add All to Cart
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center flex-col gap-6 min-h-[500px]">
                        <p className="text-stone-500 text-lg">Your wishlist is  empty.</p>
                        <button onClick={() => router.push("/shop")} className="bg-main text-white px-8 py-3 mt-4 uppercase">
                            Return to Shop
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
