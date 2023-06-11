/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";




// eslint-disable-next-line no-unused-vars
const MyListItem = ({item}) => {
  const navigate = useNavigate() ;
    const handleDelete = (id) => {
        const process = confirm('are you sure you want to delete? ') ;
        if(process) {
            fetch(`https://rhythmic-server-sania-ahmed.vercel.app/lists/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0) {
                    alert('deleted successfully') 
                }
            })
        }
    }
    const handleSendPrice = (price) => {
         console.log(price)
             navigate('/dashboard/pay', 
             {state:{ price : price, 
              item: item 
             }}) ;
    }
    return (
        <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                < img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
          {item?.instructor}
        </td>
        <td>${item?.price}</td>
        <th>
          <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">delete</button>
          <button onClick={() => handleSendPrice(item?.price)} className="btn btn-ghost btn-xs">pay</button>
         
        </th>
      </tr>
    );
};

export default MyListItem;