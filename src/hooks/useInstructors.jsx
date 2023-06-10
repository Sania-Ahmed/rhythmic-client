import { useEffect, useState } from "react";

const useInstructors = () => {
    const [Allinstructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false)
            });
    }, [])
    return [Allinstructors,loading] ;
}
export default useInstructors;