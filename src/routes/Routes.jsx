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
import ManageClasses from "../Pages/dashboard/ManageClasses";
import Payment from "../Pages/dashboard/Payment";
import History from "../Pages/dashboard/History";
import Enorolled from "../Pages/dashboard/Enorolled";
import FeedBack from "../Pages/dashboard/FeedBack";
import ErrorPage from "../Pages/ErrorPage";
import DashHome from "../Pages/dashboard/DashHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


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
              path: 'dashHome',
              element: <DashHome></DashHome>
            },
            {
                path: 'myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'myAddedClass',
                element:<InstructorRoute><MyAddedClass></MyAddedClass></InstructorRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
               path: 'feedback',
               element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
            },
            {
                path: 'pay',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
               path: 'history',
               element: <PrivateRoute><History></History></PrivateRoute>
            },
            {
                path: 'enrolled' ,
                element: <PrivateRoute><Enorolled></Enorolled></PrivateRoute>
            },
            

            
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;