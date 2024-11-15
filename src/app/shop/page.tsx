"use client"
import React, { useState, useEffect } from 'react';
import PageBanner from "@/components/PageBanner";
import ShopAccordion from "@/components/ShopAccordion";
import ShopCustomCheckbox from "@/components/ShopCustomCheckbox";
import { getData } from '@/utils/api';
import ShopCard from '@/components/ShopCard';
import "react-double-range-slider/dist/cjs/index.css";
import PriceRangeSlider from '@/components/PriceRangeSlider';
import { MdOutlineStar } from 'react-icons/md';

interface ShopPageProps { }

const ShopPage: React.FC<ShopPageProps> = () => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]); // Rating filter state
    const [shopCards, setShopCards] = useState<any[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedBrands((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const rating = parseInt(value);
        setSelectedRatings((prev) =>
            checked ? [...prev, rating] : prev.filter((item) => item !== rating)
        );
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

    // Filter shop cards based on selected ratings and brands
    const filteredShopCards = shopCards.filter((card) => {
        const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(card.rating);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(card.brand);
        return matchesRating && matchesBrand;
    });

    return (
        <div className="bg-white">
            <PageBanner title="Shop" />
            <div className="max-w-[1440px] mt-20 min-h-screen flex gap-12 mx-auto w-full">
                <div className="w-[270px] flex flex-col">
                    <ShopAccordion
                        title="Filter by category"
                        content={
                            <div className="flex flex-col cursor-pointer">
                                {["All categories", "Uncategorized", "Audio", "Climate control", "Custom wheels", "Dash and gauge", "Engine", "Exhaust", "Exterior", "Filters", "Hardware", "Interior", "Lighting", "Mirrors", "Switches", "Tires"].map((category, index) => (
                                    <span key={index} className="hover:text-gray-500 transition duration-300">
                                        {category}
                                    </span>
                                ))}
                            </div>
                        }
                    />
                    <ShopAccordion
                        title="Brand"
                        content={
                            <div className="space-y-2 text-lg">
                                {["Buffalo", "Interstate", "Optima"].map((brand) => (
                                    <ShopCustomCheckbox
                                        key={brand}
                                        label={brand}
                                        value={brand}
                                        onChange={handleCheckboxChange}
                                    />
                                ))}
                            </div>
                        }
                    />
                    <ShopAccordion
                        title="Price"
                        content={<PriceRangeSlider />}
                    />
                    <ShopAccordion
                        title="Rating"
                        content={
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <ShopCustomCheckbox
                                        key={rating}
                                        label={
                                            <>
                                                {Array(5)
                                                    .fill(null)
                                                    .map((_, index) => (
                                                        <MdOutlineStar
                                                            key={index}
                                                            className={index < rating ? "text-black" : "text-[#CFCECE]"}
                                                        />
                                                    ))}
                                            </>
                                        }
                                        value={rating.toString()}
                                        onChange={handleRatingChange}
                                    />
                                ))}
                            </div>

                        }
                    />
                </div>

                <div className="flex-1 grid grid-cols-4 gap-6">
                    {filteredShopCards.map((card) => (
                        <ShopCard
                            key={card._id}
                            title={card.name}
                            price={card.price}
                            rating={card.rating}
                            image={card.image}
                            id={card._id}
                            category={card.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
