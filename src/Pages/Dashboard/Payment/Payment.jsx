import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { useLocation } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const location = useLocation();
    const from = location.state?.item?.price || "null"
    // console.log(from)
    const item = location.state?.item || "null"
    return (
        <div className="w-full">
            <h3 className="uppercase mb-8 text-center ">payment</h3>
            <Elements stripe={stripePromise}>
                <CheckOutFrom price={from} item={item} ></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;