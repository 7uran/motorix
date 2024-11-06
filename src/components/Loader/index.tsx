import React from "react";
import { GiCarWheel } from "react-icons/gi";

const Loader: React.FC = () => {
    return (
        <div className="loader flex items-center bg-green-50 flex-col justify-center min-h-screen w-full overflow-hidden">
            <div>
                <GiCarWheel className="text-[#F56E21] text-[100px] animate-spin" />
            </div>

        </div>
    );
};

export default Loader;
