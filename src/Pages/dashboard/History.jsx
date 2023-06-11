
import usePayments from "../../hooks/usePayments";

const History = () => {
   
    const [AllPayments] = usePayments()
    console.log(AllPayments);
    return (
        <div>
              <h2 className="font-semibold text-center text-3xl uppercase my-4
            ">My Payments</h2>
        <table
          className="w-full border"
        >
             {
                
                AllPayments.map( (i, index) =>
                 <tr className="border w-full p-2" key={i._id}>
                    <td className="font-semibold m-3 p-2">{index+1}</td>
                    
                    <td className="font-semibold m-3 p-2">
                        email: {i?.email}</td>
                  
                    <td className="font-semibold m-3 p-2">transactionId : {i?.transactionId}</td>
                    <td className="font-semibold m-3 p-2">Date: {i?.date}</td>
                    <td className="font-semibold m-3 p-2">${i?.price}</td>
                </tr>)

             }
        </table>
        </div>
    );
};

export default History;