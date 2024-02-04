import {  createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/main";
import { HomePage } from "../../pages/Home/home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '/typopgraphy',
                element: <div>profile</div>
            },
            {
                path: '/contact',
                element: <div>contact</div>
            },
            {
                path: '/myaccount',
                element: <div>myaccount</div>
            }
        ]
    }
])