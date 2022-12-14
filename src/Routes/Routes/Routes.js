import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AudiCars from "../../Pages/Cars/AudiCars/AudiCars";
import BenzCars from "../../Pages/Cars/BenzCars/BenzCars";
import HondaCars from "../../Pages/Cars/HondaCars/HondaCars";
import Dashboard from "../../Pages/Dashboard/DashBoard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct";
import MyBuyers from "../../Pages/Dashboard/SellerDashboard/MyBuyers";
import MyProduct from "../../Pages/Dashboard/SellerDashboard/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WrongRoute from "../../Pages/WrongRoute/WrongRoute";
import Blog from "../../Pages/Blog/Blog";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/audis',
                element: <AudiCars></AudiCars>
            },
            {
                path: '/hondas',
                element: <HondaCars></HondaCars>
            },
            {
                path: '/mercedess',
                element: <BenzCars></BenzCars>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            }
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/myBuyer',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://auto-club-server.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <WrongRoute></WrongRoute>
    }
])

export default router;