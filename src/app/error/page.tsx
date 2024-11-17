"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Custom404 = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/');
    };

    return (
        <div className="text-center py-16 flex items-center flex-col min-h-screen gap-3 bg-white">
            <h1 className="text-[270px] font-medium">404</h1>
            <p className="text-5xl font-medium -mt-10">Oops...</p>
            <p className='text-xl text-stone-500'>We're sorry, but<br />
                something went wrong</p>
            <button
                onClick={handleRedirect}
                className='text-white uppercase text-lg font-medium bg-main hover:bg-orange-600 transition duration-0 w-[163px] h-[56px]'
            >
                homepage
            </button>
        </div>
    );
};

export default Custom404;
