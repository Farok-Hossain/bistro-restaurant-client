import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: add publishable key
const stripePromise = loadStripe("");

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
