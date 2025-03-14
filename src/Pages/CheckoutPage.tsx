import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl bg-gradient-to-br from-blue-500 to-green-300 bg-clip-text text-transparent mb-8">
            Checkout
          </h1>
          <p className="my-6 text-lg">
            Please review your order details below and proceed to complete your
            purchase. Ensure all information is correct before finalizing the
            checkout.
          </p>
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
