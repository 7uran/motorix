import React from "react";
import { GiCarWheel } from "react-icons/gi";

const Loader: React.FC = () => {
    return (
        <div className="loader flex items-center flex-col justify-center min-h-screen overflow-hidden">
            <GiCarWheel className="text-[#F56E21] text-[100px] animate-spin" />
            <div className="road  w-full h-1 rounded-full bg-gray-600 animate-road-move translate-y-10" />
        </div>
    );
};

export default Loader;
