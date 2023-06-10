import { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProviders";


const MyAddedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])

    axiosSecure.get(`/class/${user.email}`)
    .then(data => {
           console.log(data) ;
    })
    return (
        <div>
            uu
        </div>
    );
};

export default MyAddedClass;