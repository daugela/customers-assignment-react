import React from 'react';

interface ButtonProps {
    title: string;
    clickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, clickHandler }) => {
    return (
        <button className="button" onClick={() => clickHandler()}>
            {title}
        </button>
    );
};
