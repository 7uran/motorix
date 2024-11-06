"use client"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TeamCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 w-fit group cursor-pointer">
            <div className="w-[410px] h-[500px] overflow-hidden">
                <Skeleton height={500} width={410} />
            </div>
            <div>
                <Skeleton height={30} width={250} />
                <Skeleton height={20} width={150} />
            </div>
        </div>
    );
}

export default TeamCardSkeleton;
