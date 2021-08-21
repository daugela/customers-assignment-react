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
    const err = error ? 'is-invalid' : '';
    const classes = `form-control ${err}`;

    return (
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
            {error ? <div className="invalid-value">{error}</div> : ''}
        </div>
    );
};
