import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Allusers = () => {
  const [axiosSecure] = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (id) => {
    fetch(`https://rhythmic-server-sania-ahmed.vercel.app/users/admin/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch() ;
            alert('updated')
        }
    })
    }

    const handleMakeInstructor = (id) => {
        fetch(`https://rhythmic-server-sania-ahmed.vercel.app/users/instructor/${id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch() ;
                alert('updated')
            }
        })
        }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       
        </th>
        <th>Name</th>
        <th>email</th>
        <th>Take Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
           users.map( user => <tr
           key={user._id}
           >
            <th>
              
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.image}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.name}</div>
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{user.email}</div>
            </td>
            <td>
            {
                user.role === 'instructor' ? <p className="font-bold">Instructor</p> : <button onClick={() => handleMakeInstructor(user._id)} className="btn btn-ghost btn-xs">make Instructor</button>
              }
            </td>
            <th>
              {
                user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">make admin</button>
              }
            </th>
          </tr>)
           }
 
    </tbody>
   
  </table>
</div>
         
        </div>
    );
};

export default Allusers;