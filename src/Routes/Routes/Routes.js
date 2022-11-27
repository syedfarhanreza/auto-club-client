import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AudiCars from "../../Pages/Cars/AudiCars/AudiCars";
import BenzCars from "../../Pages/Cars/BenzCars/BenzCars";
import HondaCars from "../../Pages/Cars/HondaCars/HondaCars";
import Dashboard from "../../Pages/Dashboard/DashBoard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;