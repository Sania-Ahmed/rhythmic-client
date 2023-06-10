/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Title from "../../shared/Title";
const Allinstructors = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json() ;
    })

    const instructors = users.filter(item => item.role === 'instructor');
    return (
        <div>
            <Title heading={"Our Instructors"}></Title>
            <div className="grid md:grid-cols-3 mt-16 mb-40 p-10" >
                 {
                    instructors.map( instructor => <div 
                    key={instructor._id} className="border  hover:bg-green-400 bg-base-100">
                    <div className="h-50 w-full">
                    <figure> <img src={instructor.image} className="w-full " alt="Shoes" /></figure>
                    </div>
                   <div className="card-body">
                       <h2 className="card-title">{instructor.name}</h2>
                       <p className="text-purple-400 font-semibold">{instructor.email}</p>
                   </div>
               </div> )
                 }
            </div>
        </div>
    );
};

export default Allinstructors;