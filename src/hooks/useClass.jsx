import { useEffect, useState } from "react";

const useClass = () => {
    const [Allclasses, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch( 'http://localhost:5000/class' )
            .then(res => res.json())
            .then(data => {
                setClasses(data)
                setLoading(false)
            });
    }, [])
    return [Allclasses,loading] ;
}

export default useClass ;