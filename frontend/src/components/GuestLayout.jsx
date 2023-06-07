import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
    const { token } = userStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
}
