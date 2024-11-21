"use client";
import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoTicketOutline } from "react-icons/io5";

export default function Cart() {
    const [cartItems, setCartItems] = useState<any[]>([]);

    const loadCartItems = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    };

    const handleRemoveItem = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateSubtotal = (price: number, quantity: number) => price * quantity;

    const updateQuantity = (index: number, quantity: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = Math.max(quantity, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        loadCartItems();
    }, []);
    const router = useRouter();
    return (
        <div className="min-h-screen bg-white">
            <PageBanner title="Cart" />

            <div className="max-w-[1219px] mx-auto w-full py-20 flex flex-col gap-20">
                {cartItems.length > 0 ? (
                    <>
                        <div className="flex md:flex-row flex-col gap-10 justify-center items-center py-10">
                            <div className="flex items-center gap-2 text-xl font-medium">
                                <p className="text-lg w-[34px] h-[34px] bg-main rounded-full text-white flex items-center justify-center">1</p>
                                Shopping Cart
                            </div>
                            <FaArrowRightLong className="text-xl text-stone-400" />
                            <div className="flex items-center gap-2 text-xl font-medium">
                                <p className="text-lg w-[34px] h-[34px] bg-black rounded-full text-white flex items-center justify-center">2</p>
                                Payment & Delivery Options
                            </div>
                            <FaArrowRightLong className="text-xl text-stone-400" />
                            <div className="flex items-center gap-2 text-xl font-medium">
                                <p className="text-lg w-[34px] h-[34px] bg-black rounded-full text-white flex items-center justify-center">3</p>
                                Order Received
                            </div>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-[#F0EEEF]">
                                <tr>
                                    <th className="p-6 border-b font-normal text-lg border-gray-200">Product</th>
                                    <th className="p-6 border-b font-normal text-lg border-gray-200">Price</th>
                                    <th className="p-6 border-b font-normal text-lg border-gray-200">Quantity</th>
                                    <th className="p-6 border-b font-normal text-lg border-gray-200">Subtotal</th>
                                    <th className="p-6 border-b font-normal text-lg border-gray-200">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 font-medium text-xl">
                                        <td className="p-8 w-[300px] border-b border-gray-200">
                                            <div className="flex items-center gap-6">
                                                <Image
                                                    alt=""
                                                    width={80}
                                                    height={80}
                                                    src={`http://localhost:3001/${item.image}`}
                                                />
                                                {item.name}
                                            </div>
                                        </td>
                                        <td className="p-8 border-b border-gray-200">${item.price.toFixed(2)}</td>
                                        <td className="p-8 border-b border-gray-200">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => updateQuantity(index, Number(e.target.value))}
                                                className="w-24 h-12 border text-center font-normal outline-none bg-transparent border-gray-400 rounded-sm"
                                            />
                                        </td>
                                        <td className="p-8 border-b border-gray-200">
                                            ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                                        </td>
                                        <td className="p-8 border-b border-gray-200">
                                            <button
                                                onClick={() => handleRemoveItem(index)}
                                                className="text-red-500 hover:underline"
                                            >
                                                <IoMdClose />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex md:flex-row flex-col md:justify-between">
                            <div className="flex items-center ">
                                <IoTicketOutline className="text-2xl translate-x-8" />
                                <input placeholder="Coupon Code" type="text" className="px-10 w-[362px] h-[53px] border outline-none border-r-transparent" />
                                <button className=" uppercase border h-[53px] px-4 text-sm hover:text-main transition duration-300">
                                    apply cupon
                                </button>
                            </div>

                            <button onClick={() => router.push("/shop")} className="uppercase bg-[#F0EEEF] w-[244px] h-[55px] hover:bg-black transition duration-300 hover:text-white">
                                continue shopping
                            </button>
                        </div>
                        <div className="flex items-end flex-col">
                            <p className="text-2xl font-medium">Cart totals</p>
                            <div className="flex flex-col gap-6">
                                <div className="md:w-[615px]  bg-white border border-gray-200 p-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <span className=" text-lg w-1/3 ">Subtotal</span>
                                            <span className="text-lg ">$297.00</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-medium text-lg w-1/3 ">Shipping</span>
                                            Flat rate Shipping to 79 South Green Cowley Extension, <br />
                                            Impedit magna sequi, Laudantium quas sap, <br />
                                            NY 23855.
                                        </div>

                                        <div className="flex justify-between items-center  border-gray-300 pt-4">
                                            <span className="font-medium text-lg w-1/3 text-gray-600">Total</span>
                                            <span className="text-xl ">$297.00</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => router.push("/checkout")} className="uppercase bg-main text-white  h-[55px] hover:bg-orange-600 w-full transition duration-300 ">
                                    procced to checkout
                                </button>
                            </div>



                        </div>
                    </>) : (
                    <div className="flex items-center justify-center flex-col gap-6 min-h-[500px] " >
                        <p className="text-stone-500 text-lg">Your cart is currently empty.</p>
                        <button onClick={() => router.push("/shop")} className="bg-main text-white px-8 py-3 mt-4 uppercase" >
                            return to shop
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
