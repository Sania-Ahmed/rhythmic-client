// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";



const useClass = () => {
    
    // const [Allclasses, setClasses] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch( 'https://rhythmic-server-sania-ahmed.vercel.app/class' )
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //             setLoading(false)
    //         });
    // }, [])
    // return [Allclasses,loading] ;

    const {data: Allclasses = [], isLoading, refetch} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('https://rhythmic-server-sania-ahmed.vercel.app/class');
            return res.json();
        }
    })

    return [Allclasses, isLoading, refetch]

}

export default useClass ;