import React from "react";
import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = userStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>User info</div>
                </header>
            </div>
            <Outlet />
        </div>
    );
}
