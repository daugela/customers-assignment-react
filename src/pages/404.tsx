import React from 'react';
import error404Svg from '../assets/svg/error-404.svg';

export const Error404 = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <img src={error404Svg} alt="404 error" style={{ width: "40%", marginTop: "50px" }} />
            <h1 className="display--2">Oops! You're lost</h1>
            <span style={{ fontSize: "16px", lineHeight: "24px" }}>We can not find the page you're looking for.</span>
            <span style={{ fontSize: "16px", lineHeight: "24px" }}>Try going back to the previous page</span>
        </div>
    )
};