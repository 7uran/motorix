import { CommentCardComponentProps, CommentCardProps } from '@/types/type';
import Image from 'next/image';
import React from 'react';
import { ImQuotesRight } from "react-icons/im";



const CommentCard: React.FC<CommentCardComponentProps> = ({ name, location, img, isSelected, onCardClick }) => {
    return (
        <div className="flex md:flex-col gap-5 group w-fit ">
            <button className="relative" onClick={onCardClick}>
                <Image
                    className={`rounded-full transition duration-300 ${isSelected ? 'opacity-100' : 'opacity-45 group-hover:opacity-100'}`}
                    src={img}
                    width={103}
                    height={103}
                    alt=""
                />
                <div
                    className={`bg-main text-sm w-[30px] h-[30px] items-center justify-center rounded-full text-white flex absolute bottom-0 right-0 transition duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                    <ImQuotesRight />
                </div>
            </button>
            <div className={`transition duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <p className="text-lg font-medium">{name}</p>
                <p className="text-gray-500">{location}</p>
            </div>
        </div>
    );
};

export default CommentCard;
