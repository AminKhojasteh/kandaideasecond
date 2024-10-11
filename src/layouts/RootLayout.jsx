import { Link, Outlet, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import { useAuthContext } from "../context/useAuthContext";

function RootLayout() {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleExitClick = function () {
    if (confirm("آیا مطمئن هستید که می خواهید خارج شوید؟")) {
      setUser("");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="mx-auto h-screen max-w-[100rem] px-5 font-yekan">
      <nav className="mb-10 flex h-20 items-center justify-between bg-violet-500 pl-10 pr-5">
        <div className="flex h-full items-center gap-2 py-2">
          <img src="./icons/main-logo.svg" className="h-full" />
          <Link to="/" className="text-4xl font-extrabold text-white">
            کندا ایده
          </Link>
        </div>
        {!user && (
          <Link to="login" className="w-36 text-left text-white">
            ورود / ثبت نام
          </Link>
        )}
        {user && (
          <span className="text-sm text-white">{`${user.name} عزیز خوش آمدید`}</span>
        )}
        {user && (
          <div className="flex w-36 items-center justify-between">
            <Link to="/profile" className="text-white">
              پروفایل من
            </Link>
            <button onClick={handleExitClick} className="text-white">
              خروج
            </button>
          </div>
        )}
      </nav>
      <div className="flex justify-evenly">
        <Outlet />
        <Slider />
      </div>
    </div>
  );
}

export default RootLayout;
