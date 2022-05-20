import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwBbYK8FymIQMDeqz4N6PyRJtMhqTT3t18qOIofVjqPsaEuZVymxOGjgPWL9jmUweO8bKFV9KBO91o2s8ko7zCv00ymHbc3FB"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/service/${id}`;
  const { isLoading, data } = useQuery(["booking", id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) return "Loading...";

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Pay for</h2>
        <p>Please pay: {data.price}</p>
      </div>
      <figure></figure>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
