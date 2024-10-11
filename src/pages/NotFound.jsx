import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-72">
      <h2 className="mb-5 mt-20 text-center text-5xl text-red-500">404</h2>
      <p className="mb-5 text-center text-xl font-bold text-gray-700">
        متاسفانه چنین صفحه ای یافت نشد!!
      </p>
      <div className="flex flex-col items-center">
        <Link
          to="/"
          replace={true}
          className="font-bold text-violet-500 hover:text-violet-600"
        >
          برو به خانه
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
