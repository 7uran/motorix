import React, { useState, useEffect } from "react";
import { Range } from "react-range";

interface PriceRangeSliderProps {
    value: [number, number];
    onChange: (value: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ value, onChange }) => {
    const min = 10;
    const max = 1200;


    const [values, setValues] = useState<[number, number]>(
        [
            Math.max(min, value[0]),
            Math.min(max, value[1])
        ]
    );

    const handleRangeChange = (newValues: number[]) => {
        const [newMinValue, newMaxValue] = newValues;


        const validValues: [number, number] = [
            Math.max(min, Math.min(newMinValue, max)),
            Math.max(min, Math.min(newMaxValue, max))
        ];

        setValues(validValues);
        onChange(validValues);
    };

    useEffect(() => {

        setValues([
            Math.max(min, value[0]),
            Math.min(max, value[1])
        ]);
    }, [value]);

    return (
        <div className="px-2">
            <Range
                step={10}
                min={min}
                max={max}
                values={values}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "3px",
                            width: "100%",
                            backgroundColor: "black",
                            borderRadius: "4px",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "10px",
                            width: "6px",
                            backgroundColor: "black",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                )}
            />

            <div className="flex justify-between items-center select-none">
                <span className="text-stone-500 select-none">{values[0]}</span>
                <span className="text-stone-500 select-none">{values[1]}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
