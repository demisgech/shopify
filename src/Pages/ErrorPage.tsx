import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import notFoundImage from "../assets/404NotFound.png";
const ErrorPage = () => {
  const routeError = useRouteError();
  const isResponseTrue = isRouteErrorResponse(routeError);
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <h1 className="text-6xl">Oops...</h1>
        {isResponseTrue ? (
          <img
            src={notFoundImage}
            alt=""
            className="max-w-[100%] object-cover"
          />
        ) : (
          <h2 className="text-5xl">Unexpected error!</h2>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
