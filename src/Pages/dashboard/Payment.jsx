import { loadStripe } from "@stripe/stripe-js";
import Title from "../../shared/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env. VITE_Payment_Pk);
const Payment = () => {
    const location = useLocation();
    const price = location.state.price ;
   
    console.log(price)
    return (
        <div>
            <Title heading={"Make payment"}></Title>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;