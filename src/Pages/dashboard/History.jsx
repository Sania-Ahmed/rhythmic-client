
import usePayments from "../../hooks/usePayments";

const History = () => {
   
    const [AllPayments] = usePayments()
    console.log(AllPayments);
    return (
        <div>
             {
                
                AllPayments.map( i => <p key={i._id}>{i.transactionId
                    }</p>)

             }
        </div>
    );
};

export default History;