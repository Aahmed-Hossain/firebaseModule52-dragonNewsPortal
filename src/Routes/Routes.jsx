import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Register from './../Pages/Register/Register';

const createdRoutes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayouts></MainLayouts> ,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default createdRoutes;