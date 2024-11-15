
import Image from "next/image";
import React from "react";


const Loader: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <Image className="animate-spin" src={"https://static.thenounproject.com/png/119081-512.png"} alt="Loading..." width={100} height={100} />
        </div>


    );
};

export default Loader;
