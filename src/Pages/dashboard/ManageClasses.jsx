import useClass from "../../hooks/useClass";


const ManageClasses = () => {
    const [Allclasses, isLoading] = useClass([]) ;
    
   const manageClass = Allclasses.filter(item => (item.status));

   console.log(manageClass)
    return (
        <div className="w-full">
            <div className="overflow-x-auto w-[100%]">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
       
        </th>
        <th>Name</th>
        <th>Details</th>
        <th>Instructor</th>
        <th>Take action</th>
      </tr>
    </thead>
    <tbody>
    { !isLoading &&
           manageClass.map( item => <tr
           key={item._id}
           >
            <td></td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                  <p>${item.price}</p>
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">seats:{item.available_seats}</div>
            <p>status:{ item.status}</p>
            </td>
            <td>
             <p>{item?.instructor}</p>
             <p>{item?.email}</p>
            </td>
            <td className="flex flex-col gap-1">
             <button  className="btn btn-xs btn-success">APROVE</button>
             <button  className="btn btn-xs btn-error">DENY</button>
             <button  className="btn btn-xs btn-primary">Send Feedback</button>
            </td>
          </tr>)
           }
 
    </tbody>
   
  </table>
</div>
         
        </div>
    );
};

export default ManageClasses;