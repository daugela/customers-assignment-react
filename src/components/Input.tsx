import React from 'react';

interface InputProps {

    /** Unique field name */
    id: string;
    /** Input type */
    type: "text" | "email" | "password" | "number";
    /** Change handler */
    handleChange: any,

    /** Field label text */
    label?: string;
    /** Field value */
    value?: any;
    /** Disabled field */
    disabled?: boolean;
    /** Hidden field */
    hidden?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Autocomplete tag value */
    autocomplete?: string;
    /** Validation error */
    error?: string;
    /** Any additional style classes passed */
    className?: string;
    // Props for later:

    //options?: string[]; // Drop down items
    //title?: string; // Some title maybe..
    //select?: boolean; // Dropdown selector - probably will go to separate component
}

export const Input = (props: InputProps) => {

    //const [some, setSome] = useState(0);
    //const [info, setInfo] = useState(0);

    const { id, label, value, disabled, type, hidden, placeholder, autocomplete, error, handleChange, className } = props;


    const err = error ? 'is-invalid' : '';
    const classes = `form-control ${err}`;



    //aria-describedby="emailHelp" 

    if (hidden) {
        return null;
    }

    if (type === "email") {
        return (
            <>
                <input type="email" className={classes} placeholder={placeholder} onChange={e => handleChange(e.target.value)} autoComplete="off" value={value} disabled={disabled} />
                {error ? <div className="invalid-feedback">{error}</div> : ''}
            </>
        )
    }

    if (type === "password") {
        return (
            <>
                <input type="password" className={classes} placeholder={placeholder} onChange={e => handleChange(e.target.value)} value={value} disabled={disabled} />
                {error ? <div className="invalid-feedback">{error}</div> : ''}
            </>
        )
    }

    return (
        <>
            <input type="text" className={classes} placeholder={placeholder} onChange={e => handleChange(e.target.value)} autoComplete="off" value={value} disabled={disabled} />
            {error ? <div className="invalid-feedback">{error}</div> : ''}
        </>
    )
};