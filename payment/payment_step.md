
ক্লায়েন্ট সাইট : কার্ড টি ঠিক আছে কিনা
সার্ভার সাইট : টাকা যে রিসিভ করবে সেটা ঠিক আছে কিনা



    const res = await axiosSecure.post('/create-payment-intent', {
            amountInCents,
            parcelId
      });

      console.log("Payment success:", paymentMethod);
      console.log("Payment Intent Response:", res.data);

      const clientSecret = res.data.clientSecret;
      

এই ইনটেন্ট থেকে সিক্রেট কি দিচ্ছে
    
