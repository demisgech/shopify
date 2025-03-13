import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <div className="bg-base-200 min-h-screen p-5 flex flex-col justify-around items-center">
      <h1 className="text-6xl bg-gradient-to-br  from-blue-500 to-green-300 text-blue-650 bg-clip-text text-transparent">
        Checkout your total
      </h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
