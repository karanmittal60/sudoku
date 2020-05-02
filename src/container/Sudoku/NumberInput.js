import React from 'react';

const NumberInput = ({number, onChange}) => {
    const handleKeyDown = ({key}) => {
        if (key > 0 && key < 10 ){
            onChange(parseInt(key))
        }
    };
    return (
        <input
            className={`su-input `}
            type="number"
            name=""
            max={9}
            min={1}
            value={number}
            onKeyDown={handleKeyDown}
        />
    );
};

export default NumberInput;