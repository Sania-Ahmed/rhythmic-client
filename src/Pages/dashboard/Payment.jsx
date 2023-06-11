import { loadStripe } from "@stripe/stripe-js";
import Title from "../../shared/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env. VITE_Payment_Pk);
const Payment = () => {
    const location = useLocation();
    const price = location.state.price ;
    const item= location.state.item;
   
    console.log(item)
    return (
        <div>
            <Title heading={"Make payment"}></Title>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} item={item}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;