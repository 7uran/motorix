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
            />
            <span
                className={`w-5 h-5  border-2 ${isChecked ? 'bg-black' : 'bg-transparent'} border-gray-400 flex items-center justify-center rounded-sm`}
            >

            </span>
            <span className="text-lg font-medium">{label}</span>
        </label>
    );
}

export default ShopCustomCheckbox;
