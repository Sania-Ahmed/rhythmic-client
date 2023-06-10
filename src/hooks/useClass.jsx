// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useClass = () => {
    const {loading} = useContext(AuthContext)
    // const [Allclasses, setClasses] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch( 'http://localhost:5000/class' )
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //             setLoading(false)
    //         });
    // }, [])
    // return [Allclasses,loading] ;

    const {data: Allclasses = [], isLoading, refetch} = useQuery({
        queryKey: ['class'],
        enabled: !loading ,
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })

    return [Allclasses, isLoading, refetch]

}

export default useClass ;