import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container m-auto min-h-screen flex justify-center items-center">
      <div className="m-auto lg:max-w-[1040px] hero bg-base-200 shadow-2xl min-h-[70vh] rounded-2xl py-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl bg-linear-to-bl from-violet-800 to-green-300 text-blue-650 bg-clip-text text-transparent sm:mb-5">
              Login now!
            </h1>
            <p className="py-6 text-lg">
              Welcome back! Access your account to manage orders, track
              deliveries, and enjoy a personalized shopping experience. Please
              enter your email and password below. New to our store? Sign up
              here.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label text-lg">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label text-lg">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <Link
                    to="#"
                    className="link link-hover text-lg text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-success btn-block mt-4 text-lg text-white">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
