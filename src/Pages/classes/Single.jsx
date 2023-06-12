/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const Single = ({single}) => {
    const{name, image ,instructor, available_seats, price, _id , students  } = single
    const location = useLocation() ;
    const navigate = useNavigate() ;
    const isAdmin = useAdmin() ;
    const isInstructor = useInstructor() ;

    console.log(isAdmin)
    
    const {user} = useContext(AuthContext) ;
    const handleAddToList = (single) => {
      if(user && user.email) {
        const selectedItem = {
            itemId: _id, name , image , available_seats, instructor, price, email : user.email ,
            students, enrolled: false 
        }
        fetch('https://rhythmic-server-sania-ahmed.vercel.app/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(selectedItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('added class to your my class list')
            }
        })
      }
      else{
        alert('please log in first !')
        navigate('/login', {state:{ from: location }})
      }
    }
    return (
        <div className={`border  ${single?.available_seats === "0" ?
        "bg-red-300 " :"bg-base-100"}`}>
             <div className="h-50 w-full p-5">
             <figure> <img src={single.image} className="w-full " alt="Shoes" /></figure>
             </div>
            <div className="card-body">
                <h2 className="card-title">{single?.name}</h2>
                { single?.instructor && <p className="text-purple-400 font-semibold">{single.instructor}</p>}
                <p className="font-semibold text-lg ">Available seats:{single?.available_seats}</p>
                <p className="font-semibold text-lg ">price:${single.price}</p>
                <button disabled={ isAdmin[0]?.admin || isInstructor[0]?.instructor || single?.available_seats == 0 } onClick={() => handleAddToList(single)} className="btn btn-primary">Select</button>
            </div>
        </div>
    );
};

export default Single;