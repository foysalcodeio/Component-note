স্ট্রাইপে 2টা চাবি থাকে একটা পাবলিক কি আরেকটা সেকরেট কি
পাবলিক কি payment.jsx থাকে

```
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
```
secret key ইউজ হয় ব্যাকইন্ডে
```
const stripe = require("stripe")("process.env.PAYMENT_GATEWAY_KEY");
```




