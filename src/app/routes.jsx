import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/home/Home.jsx";
import Profile from "../pages/profile/Profile.jsx";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile/>
    }
])