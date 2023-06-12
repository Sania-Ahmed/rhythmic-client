/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useContext } from 'react';
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProviders";



const InstructorRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext) ; 
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();
    
    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor?.instructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;