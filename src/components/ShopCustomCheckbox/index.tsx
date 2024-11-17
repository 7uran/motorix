import { ShopCustomCheckboxProps } from '@/types/type';
import React, { useState } from 'react';

const ShopCustomCheckbox: React.FC<ShopCustomCheckboxProps> = ({ label, value, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        if (onChange) onChange(e);
    };

    return (
        <label className="flex items-center gap-3 cursor-pointer">
            <input
                type="checkbox"
                value={value}
                onChange={handleCheckboxChange}
                className="hidden"
                checked={isChecked}
                aria-checked={isChecked ? 'true' : 'false'}
            />
            <span
                className={`w-5 h-5 border-4 border-[#F0EEEF] ${isChecked ? 'bg-black' : 'bg-[#F0EEEF]'}  flex items-center justify-center rounded-sm`}
            >

            </span>
            <span className="text-lg font-medium flex ">{label}</span>
        </label>
    );
};

export default ShopCustomCheckbox;
