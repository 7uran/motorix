import { ProgressBarProps } from "@/types/type";
import { FC } from "react";

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="flex flex-col gap-3">

            <div className=" text-right" style={{ width: `${progress}%` }}
            >
                <p className="font-medium text-lg">
                    {progress}%
                </p>
            </div>
            <div className="w-full bg-white h-1.5 mb-4">
                <div
                    className="bg-main h-1.5 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                >

                </div>
            </div>


        </div>
    );
};

export default ProgressBar;
