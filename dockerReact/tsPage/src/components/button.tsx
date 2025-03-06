import React from 'react';

interface ButtonComponentProps {
    type: 'button' | 'submit' | 'reset';
    value: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    id: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type, onClick, value, id }) => {
    const getColorClass = (id: string) => {
        switch (id) {
            case 'alternative':
                return 'bg-purple-4 border border-purple-1';
            default:
                return 'bg-purple-1';
        }
    };

    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full text-white ${getColorClass(id)} focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
            {value}
        </button>
    );
};

export default ButtonComponent;