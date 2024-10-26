import React, { useState } from 'react';

const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="cursor-pointer">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
            />
            <div
                className='w-4 h-4 border-2 border-stone-600 rounded-md flex items-center justify-center'
            >
                {isChecked && <div className="w-2 h-2 bg-white rounded-md"></div>}
            </div>
        </label >
    );
};

export default CustomCheckbox;
