import React from 'react';

const Input = ({ type = "text", name, value, onChange, placeholder, className, ...props }) => {
    return (
        <div>
            <input
                className={`border rounded-none focus:outline-none w-full py-4 px-3 text-2xl text-gray-700 placeholder-gray-400 ${className}`}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;


