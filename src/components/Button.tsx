import React from 'react';

interface ButtonProps {
    title: string;
    outline?: boolean;
    clickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, outline, clickHandler }) => {
    const classes = outline ? 'button outline' : 'button';
    return (
        <button className={classes} onClick={() => clickHandler()}>
            {title}
        </button>
    );
};
