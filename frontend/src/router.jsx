import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import Users from "./Views/Users";
import NotFound from "./Views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        Children: [
            {
                path: "/signup",
                element: <Signup />,
            },
            { path: "/login", element: <Login /> },
        ],
    },
    {
        path: "/defaultLayout",
        element: <DefaultLayout />,
        children: [
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/",
                element: <Navigate to="users" />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
