/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const Single = ({single}) => {
    const{name, image ,instructor, available_seats, price, _id , students  } = single
    const location = useLocation() ;
    const navigate = useNavigate() ;
    const {user} = useContext(AuthContext) ;
    const handleAddToList = (single) => {
      if(user && user.email) {
        const selectedItem = {
            itemId: _id, name , image , available_seats, instructor, price, email : user.email ,
            students, enrolled: false 
        }
        fetch('http://localhost:5000/lists', {
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
        <div className="border  hover:bg-green-400 bg-base-100">
             <div className="h-50 w-full">
             <figure> <img src={single.image} className="w-full " alt="Shoes" /></figure>
             </div>
            <div className="card-body">
                <h2 className="card-title">{single.name}</h2>
                { single.instructor && <p className="text-purple-400 font-semibold">{single.instructor}</p>}
                <p className="font-semibold text-lg ">Available seats:{single.available_seats}</p>
                <p className="font-semibold text-lg ">price:${single.price}</p>
                <button onClick={() => handleAddToList(single)} className="btn btn-primary">Select</button>
            </div>
        </div>
    );
};

export default Single;