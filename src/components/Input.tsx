import React from 'react';

interface InputProps {
    id: string;
    handleChange: any;
    label?: string;
    value?: any;
    placeholder?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ id, label, value, placeholder, error, handleChange }) => {
    const classes = error ? 'input invalid' : 'input';

    return (
        <>
            <div className="input-wrapper">
                {label && <label htmlFor="email">{label}</label>}
                <input
                    id={id}
                    type="text"
                    className={classes}
                    placeholder={placeholder}
                    onChange={e => handleChange(e.target)}
                    autoComplete="none"
                    value={value}
                />
            </div>
            {error && <div className="error-message">{error}</div>}
        </>
    );
};
