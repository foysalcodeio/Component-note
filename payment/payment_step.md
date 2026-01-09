payment working following step
-------------------------------------
1. which payment gateway
2. Format a payment form
3. validate card information
4. create a payment intent in the server
5. confirm payment
6. after payment is successful: update payment status on the parcel also enter an entry in the parcel history collection



ক্লায়েন্ট সাইট : কার্ড টি ঠিক আছে কিনা <br />
সার্ভার সাইট : টাকা যে রিসিভ করবে সেটা ঠিক আছে কিনা



    const res = await axiosSecure.post('/create-payment-intent', {
            amountInCents,
            parcelId
      });

      console.log("Payment success:", paymentMethod);
      console.log("Payment Intent Response:", res.data);

      const clientSecret = res.data.clientSecret;
      

এই ইনটেন্ট থেকে সিক্রেট কি দিচ্ছে
    
