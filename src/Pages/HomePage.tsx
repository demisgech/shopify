import { Link } from "react-router-dom";
import banner from "../assets/wallpaper-ecommerce-web-portal.webp";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <section className="m-auto bg-base-200 shadow-2xl rounded-2xl p-2 lg:m-10">
        <div className="flex justify-center items-center bg-base-200 min-h-screen lg:w-[90vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <img src={banner} className="rounded-lg max-w-[100%]" />
            <div>
              <h1 className="text-6xl bg-linear-to-bl from-violet-800 to-green-300 text-blue-650 bg-clip-text text-transparent sm:mb-5">
                Shop Smarter, Live Better – Discover the Best Deals Today!
              </h1>
              <p className="py-6 text-xl">
                Find the best deals on top-quality products at unbeatable
                prices. Shop smarter with curated collections, exclusive
                discounts, and fast shipping—because you deserve the best
                without overspending!
              </p>
              <Link to="/products" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
