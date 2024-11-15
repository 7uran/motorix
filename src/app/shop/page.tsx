"use client";
import PageBanner from "@/components/PageBanner";
import ShopAccordion from "@/components/ShopAccordion";
import ShopCard from "@/components/ShopCard";
import ShopCustomCheckbox from "@/components/ShopCustomCheckbox";
import { useState } from "react";

interface ShopPageProps { }

const ShopPage: React.FC<ShopPageProps> = () => {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedBrands((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };

    return (
        <div className="bg-white">
            <PageBanner title="Shop" />
            <div className="max-w-[1440px] mt-20 min-h-screen flex gap-12 mx-auto w-full">
                <div className="w-[270px] flex flex-col">
                    <ShopAccordion
                        title="Filter by category"
                        content={
                            <div className="flex flex-col cursor-pointer">
                                {[
                                    "All categories",
                                    "Uncategorized",
                                    "Audio",
                                    "Climate control",
                                    "Custom wheels",
                                    "Dash and gauge",
                                    "Engine",
                                    "Exhaust",
                                    "Exterior",
                                    "Filters",
                                    "Hardware",
                                    "Interior",
                                    "Lighting",
                                    "Mirrors",
                                    "Switches",
                                    "Tires",
                                ].map((category, index) => (
                                    <span
                                        key={index}
                                        className="hover:text-gray-500 transition duration-300"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        }
                    />
                    <ShopAccordion
                        title="Brand"
                        content={
                            <div className="space-y-2">
                                {["Buffalo", "Interstate", "Optima"].map(
                                    (brand) => (
                                        <ShopCustomCheckbox
                                            key={brand}
                                            label={brand}
                                            value={brand}
                                            onChange={handleCheckboxChange}
                                        />
                                    )
                                )}
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <ShopCard />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
