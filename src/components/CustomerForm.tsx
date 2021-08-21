import React from 'react';
import { Input } from '.';

interface CustomerFormProps {
    updateHandler: (event: any) => void;
    [field: string]: any;
}
export const CustomerForm: React.FC<CustomerFormProps> = ({ updateHandler, fullName, email, ...rest }) => {
    const submitForm = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={submitForm} autoComplete="false">
                <span className="title">Customer</span>
                <Input
                    id="fullName"
                    placeholder="Full name"
                    handleChange={updateHandler}
                    value={fullName}
                    label="Full name"
                />
                <Input
                    id="email"
                    placeholder="Email address"
                    handleChange={updateHandler}
                    value={email}
                    label="Email address"
                />
                <span className="title">Address</span>
                <Input id="city" placeholder="City" handleChange={updateHandler} value={rest.city} label="City" />
                <Input
                    id="street"
                    placeholder="Street name"
                    handleChange={updateHandler}
                    value={rest.street}
                    label="Street name"
                />
                <Input
                    id="house"
                    placeholder="House number"
                    handleChange={updateHandler}
                    value={rest.house}
                    label="House"
                />
                <Input
                    id="zip"
                    placeholder="ZIP number"
                    handleChange={updateHandler}
                    value={rest.zip}
                    label="Zip code"
                />
                <button style={{ marginTop: '1.2rem' }}>Save</button>
            </form>
        </>
    );
};
