"use client"
import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function Checkout() {
    const PaymentForm = () => {
        const [state, setState] = useState<{
            number: string;
            expiry: string;
            cvc: string;
            name: string;
            focus: "number" | "expiry" | "cvc" | "name" | "";
        }>({
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            focus: '',
        });

        const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = evt.target;

            if (name === 'number' && value.length <= 16) {
                setState((prev) => ({ ...prev, [name]: value }));
            }


            if (name === 'expiry' && value.length <= 4) {
                setState((prev) => ({ ...prev, [name]: value }));
            }


            if (name === 'cvc' && value.length <= 3) {
                setState((prev) => ({ ...prev, [name]: value }));
            }


            if (name !== 'number' && name !== 'expiry' && name !== 'cvc') {
                setState((prev) => ({ ...prev, [name]: value }));
            }
        };

        const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
            setState((prev) => ({
                ...prev,
                focus: evt.target.name as "number" | "expiry" | "cvc" | "name"
            }));
        };

        return (
            <div className="min-h-screen pb-20 ">
                <PageBanner title="Checkout" />
                <div className="flex md:flex-row flex-col gap-10 justify-center items-center py-20 ">
                    <div className="flex items-center gap-2 text-xl font-medium">
                        <p className="text-lg w-[34px] h-[34px] bg-main rounded-full text-white flex items-center justify-center">1</p>
                        Shopping Cart
                    </div>
                    <FaArrowRightLong className="text-xl text-stone-400" />
                    <div className="flex items-center gap-2 text-xl font-medium">
                        <p className="text-lg w-[34px] h-[34px] bg-main rounded-full text-white flex items-center justify-center">2</p>
                        Payment & Delivery Options
                    </div>
                    <FaArrowRightLong className="text-xl text-stone-400" />
                    <div className="flex items-center gap-2 text-xl font-medium">
                        <p className="text-lg w-[34px] h-[34px] bg-black rounded-full text-white flex items-center justify-center">3</p>
                        Order Received
                    </div>
                </div>

                <div className="max-w-lg mx-auto p-8 bg-white  shadow-lg h-fit ">
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
                    <form className="mt-8">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="number"
                                placeholder="Card Number"
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 py-3 border-b-stone-300"
                                maxLength={16}
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="mb-4 w-1/2">
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={state.expiry}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 py-3 border-b-stone-300"
                                    maxLength={4}
                                />
                            </div>
                            <div className="mb-4 w-1/2">
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="CVV"
                                    value={state.cvc}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 py-3 border-b-stone-300"
                                    maxLength={3}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Cardholder Name"
                                value={state.name}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 focus:border-b-black w-full border-b-2 outline-none hover:border-b-black transition duration-300 py-3 border-b-stone-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-main text-white text-xl  shadow-lg hover:bg-main-dark"
                        >
                            Confirm Payment
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    return <PaymentForm />;
}
