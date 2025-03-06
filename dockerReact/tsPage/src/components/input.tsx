import React, { useState } from 'react';
import {Eye, EyeOff} from "lucide-react";

interface InputComponentProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ label, type, id, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                type={type === 'password' && showPassword ? 'text' : type}
                id={id}
                className="bg-purple-4 text-white-500 rounded-lg focus:ring-purple-1 focus:outline-none block w-full p-5 py-6"
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 mt-7"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            )}
        </div>
    );
};

export default InputComponent;