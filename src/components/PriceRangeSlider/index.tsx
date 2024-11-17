import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeSlider = () => {
    const [values, setValues] = useState([100, 1000]);

    return (
        <div className="px-2">


            <Range
                step={10}
                min={10}
                max={1200}
                values={values}
                onChange={([min, max]) => setValues([min, max])}
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

            <div className="flex justify-between items-center  select-none ">
                <span className="text-stone-500 select-none">{values[0]}</span>
                <span className="text-stone-500 select-none">{values[1]}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
