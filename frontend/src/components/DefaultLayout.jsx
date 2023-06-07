import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = userStateContext();

    if(!token) {
        return <Navigate to="/login"/>
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}
