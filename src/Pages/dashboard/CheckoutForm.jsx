/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const CheckoutForm = ({price}) => {
    const {user} = useContext(AuthContext) ;
    const  stripe = useStripe() ;
    const [axiosSecure] = useAxiosSecure();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing ] = useState(false) ;
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            setClientSecret(res.data.clientSecret) ;
            console.log(clientSecret)
        })
    },[])

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const {paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
           
        }
        else {
            
            console.log('payment method', paymentMethod)
        }

       setProcessing(true) ;

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)

        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      < button className="btn btn-outline btn-primary btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {transactionId && <p className="text-green-500">Transaction completed with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;