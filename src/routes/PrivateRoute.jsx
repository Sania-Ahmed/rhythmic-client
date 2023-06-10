/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"> </progress>
    }

    if (user) {
        return children;
    }
    else{
        alert('please log in first')
    }
    return <>
        < Navigate state={{ from: location }} to="/login" replace></Navigate>
    </>;
};

export default PrivateRoute;