import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Title from "../../shared/Title";




const MyAddedClass = () => {
    const {user} = useContext(AuthContext)
    const [addedClass, setAddedClass ] = useState([]) ;
    
  useEffect(() => {
    fetch(`https://rhythmic-server-sania-ahmed.vercel.app/class/${user.email}`)
    .then(res => res.json())
    .then(data => setAddedClass(data) )
  },[user?.email])

  console.log(addedClass)
    return (
        <>
        <Title heading={"MY CLASSES"}></Title>
        <div className="w-full grid md:grid-cols-2  ">
            {
               addedClass.map(item => <div
               key={item._id}
                className="card  border rounded-none">
               <figure className="px-10 pt-10">
                 <img src={item.image}alt="Shoes"/>
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">{item.name}</h2>
                 <p className="font-semibold text-purple-400 text-lg">${item.price}</p>
                 <p className="font-semibold text-purple-400 text-lg">seats:{item?.available_seats}</p>
                 <p className="font-semibold text-purple-400 text-lg">status:{item?.status}</p>
                 <p className="font-semibold text-purple-400 text-lg">feedback:{item?.feedback?.feedback}</p>
                 <p className="font-semibold text-purple-400 text-lg">students:{item?.students}</p>
               </div>
             </div>)
            }
        </div>
        </>
    );
};

export default MyAddedClass;