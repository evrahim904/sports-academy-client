import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import './CheckOutForam.css'
import Swal from "sweetalert2";

const CheckOutFrom = ({ price, item }) => {


    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState()
    const [clientSecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState(true)
 

    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }



        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'unknown',
                        email: user.email || 'anonymous'

                    },
                },
            },
        );

        if (confirmError) {
            console.log('[error]', confirmError);
            setCardError(confirmError.message)
        }
         
        else {
            setProcessing(false)
            console.log('[paymentIntent]', paymentIntent);
            
            if (paymentIntent.status === 'succeeded') {
                const payment = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    price,
                    cartId: item._id,
                    date: new Date(),
                    classId: item.classId,
                    className: item.name,
                    instructorName: item.instructorName,
                };
            
                axiosSecure.post('/payment', payment)
                    .then(res => {
                        
                        console.log(res.data);
                        if (res.data.result.insertedId) {


                        //     const selectedClass = classes.find(cls => cls._id === item.classId);
                        //     axiosSecure.patch(`/classes/${selectedClass}`)
                        // .then(data =>{
                        //     console.log(data)
                        //     if(data.modifiedCount){
                             
                        //         Swal.fire({
                        //             position: 'top-end',
                        //             icon: 'success',
                        //             title: 'Your item has been selected',
                        //             showConfirmButton: false,
                        //             timer: 1500

                        //         })
                        //     }
                        // })


                        }
                    });
            }


            // if (paymentIntent.status === 'succeeded') {
            //     const payment =
            //     {
            //         email: user.email,
            //         transactionId: paymentIntent.id,
            //         price,
            //         cartId : item._id,
            //         date: new Date(),
            //         classId:item.classId,
            //         className:item.name,
            //         instructorName:item.instructorName,
                    
            //     }
            //     axiosSecure.post('/payment', payment)
            //     .then(res =>{
            //         console.log(res.data)
            //         if(res.data.insertedId){
            //             // dis
            //         }
            //     })
            // }
        }

    }


    return (
        <form className="w-2/3 text-center" onSubmit={handleSubmit}>
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

            <button className="btn btn-success btn-sm text-center" type="submit" disabled={!stripe }>
                Pay
            </button>
            {
                cardError && <p> {cardError} </p>
            }
        </form>
    );
};

export default CheckOutFrom;