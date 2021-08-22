import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { stringify } from 'uuid';
import { Button, Input } from '.';
import { GlobalReduxState } from '../types';

interface CustomerFormProps {
    updateHandler: (event: any) => void;
    submitHandler: () => void;
    [field: string]: any;
}
export const CustomerForm: React.FC<CustomerFormProps> = ({
    updateHandler,
    submitHandler,
    fullName,
    email,
    ...rest
}) => {
    const handleDefaultForm = (e: any) => {
        e.preventDefault();
    };

    const [formErrors, setFormErrors] = useState<{ [index: string]: string }>({});

    // Tap into reducers..
    const { coordsFetchStatus } = useSelector((state: GlobalReduxState) => ({
        coordsFetchStatus: state.modalsReducer.error,
    }));

    const validateFields = () => {
        const messages = { fullName: '', email: '', city: '', street: '', house: '', zip: '' };

        if (!/.+@.+\.[A-Za-z]+$/.test(email)) messages.email = 'Invalid email address';
        if (!/^([\wąčęėįšųūž]{3,})+\s+([\wąčęėįšųūž\s]{3,})+$/i.test(fullName))
            messages.fullName = 'Full name should me a first name and second name';
        if (!/^([A-Za-ząčęėįšųūž\s-]{3,})+$/i.test(rest.city)) messages.city = 'Please enter a valid city name';
        if (!/^([A-Za-ząčęėįšųūž\s-]{3,})+$/i.test(rest.street)) messages.street = 'Please enter a valid street name';
        if (!/^([0-9]{1,6})+$/.test(rest.house)) messages.house = 'Please enter a valid house number';
        if (!/^([0-9]{3,6})+$/.test(rest.zip)) messages.zip = 'ZIP code is expected to be 3-6 numbers';
        if (!Object.values(messages).some((message: string) => message.length > 0)) {
            submitHandler();
        }
        setFormErrors({ ...messages });
    };

    return (
        <>
            <form onSubmit={handleDefaultForm} autoComplete="false">
                <span className="title">Customer</span>
                <Input
                    id="fullName"
                    placeholder="Full name"
                    handleChange={updateHandler}
                    value={fullName}
                    label="Full name"
                    error={formErrors.fullName}
                />
                <Input
                    id="email"
                    placeholder="Email address"
                    handleChange={updateHandler}
                    value={email}
                    label="Email address"
                    error={formErrors.email}
                />
                <span className="title">Address</span>
                <Input
                    id="city"
                    placeholder="City"
                    handleChange={updateHandler}
                    value={rest.city}
                    label="City"
                    error={formErrors.city}
                />
                <Input
                    id="street"
                    placeholder="Street name"
                    handleChange={updateHandler}
                    value={rest.street}
                    label="Street name"
                    error={formErrors.street}
                />
                <Input
                    id="house"
                    placeholder="House number"
                    handleChange={updateHandler}
                    value={rest.house}
                    label="House number"
                    error={formErrors.house}
                />
                <Input
                    id="zip"
                    placeholder="ZIP number"
                    handleChange={updateHandler}
                    value={rest.zip}
                    label="Zip code"
                    error={formErrors.zip}
                />
                {coordsFetchStatus && <div className="error-message">{coordsFetchStatus}</div>}
                <Button title="Save" clickHandler={validateFields} />
            </form>
        </>
    );
};
