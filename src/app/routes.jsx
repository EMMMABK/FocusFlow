import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/home/Home.jsx";
import Register from "../pages/auth/register/Register.jsx";
import Login from "../pages/auth/login/Login.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])