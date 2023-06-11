import usePayments from "../../hooks/usePayments";

const Enorolled = () => {
    const [AllPayments] = usePayments()
    return (
        <div>
            {
                
                AllPayments.map( i => <p key={i._id}>{i._id}</p>)

             }
        </div>
    );
};

export default Enorolled;