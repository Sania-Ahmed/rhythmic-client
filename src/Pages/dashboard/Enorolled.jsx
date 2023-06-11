import usePayments from "../../hooks/usePayments";

const Enorolled = () => {
    const [AllPayments] = usePayments()
    return (
        <div>
            <h2 className="font-semibold text-center text-3xl uppercase my-4
            ">My Enrolled Classes</h2>
        <table
          className="w-full border"
        >
             {
                
                AllPayments.map( (i, index) =>
                 <tr className="border w-full p-2" key={i._id}>
                    <td className="font-semibold m-3 p-2">{index+1}</td>
                    <td className="p-4 m-4">
                        <img className="avatar w-20 rounded" src={i?.image} />
                    </td>
                    <td className="font-semibold m-3 p-2">{i?.name}</td>
                    <td className="font-semibold m-3 p-2">{i?.instructor}</td>
                    <td className="font-semibold m-3 p-2">${i?.price}</td>
                </tr>)

             }
        </table>
           
        </div>
    );
};

export default Enorolled;