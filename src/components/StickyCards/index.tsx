import { StickyCardsProps } from '@/types/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const StickyCards: React.FC<StickyCardsProps> = ({ index, type, title, desc, slug, image }) => {
    const [mounted, setMounted] = useState(false);

    const router = useRouter();



    const handleClick = () => {
        if (mounted) {
            router.push(`/wheels-and-tires/${slug}`);
        }
    };

    return (
        <div

            className="w-full sticky top-10 z-10 h-fit transition-transform duration-300"

        >
            <div className="md:flex justify-between w-full gap-2">
                <div className="md:w-[685px]">
                    <Image
                        className="md:h-[635px] w-full object-cover"
                        alt={title}
                        src={image}
                        width={685}
                        height={635}
                    />
                </div>

                <div className="bg-[#F0EEEF] md:w-[685px] md:h-[635px] p-20 flex flex-col justify-between">
                    <div>
                        <p className="text-3xl font-medium">0{index}</p>
                    </div>

                    <div className="font-medium flex flex-col gap-5">
                        <p className="uppercase">{type}</p>
                        <p className="md:text-6xl">{title}</p>
                        <p className="text-gray-500 md:text-lg font-normal">{desc}</p>
                    </div>

                    <div>
                        <button
                            className="capitalize font-medium flex text-lg items-center group"
                            onClick={handleClick}
                        >
                            view project
                            <div className="flex w-fit overflow-hidden ml-2">
                                <IoIosArrowRoundForward className="text-2xl group-hover:animate-slideIn transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyCards;
