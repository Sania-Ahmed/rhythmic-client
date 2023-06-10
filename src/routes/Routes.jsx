import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/home/Home";
import Classes from "../Pages/classes/Classes";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";

import MyList from "../Pages/dashboard/MyList";
import Dashboard from "../layouts/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../Pages/dashboard/Allusers";
import Allinstructors from "../Pages/instructors/Allinstructors";
import AddClass from "../Pages/dashboard/AddClass";
import MyAddedClass from "../Pages/dashboard/MyAddedClass";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element:<Allinstructors></Allinstructors>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myList',
                element: <MyList></MyList>
            },
            {
                path: 'users',
                element: <Allusers></Allusers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path:'myAddedClass',
                element:<MyAddedClass></MyAddedClass>
            }

            
        ]
    }
]);

export default router;