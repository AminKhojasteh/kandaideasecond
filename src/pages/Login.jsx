import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthContext } from "../context/useAuthContext";

function Login() {
  const { setUser } = useAuthContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = function (e) {
    setUsername(e.target.value);
  };

  const handlePasswordChange = function (e) {
    setPassword(e.target.value);
  };

  const handleLogin = function (e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      return setError("لطفا هر دو فیلد را پر کنید.");
    }
    const storedValue = localStorage.getItem("user");

    const storedUser = JSON.parse(storedValue);
    if (
      storedUser?.username === username &&
      storedUser?.password === password
    ) {
      setUser(storedUser);
      return navigate("/", { replace: true });
    }
    setError("نام کاربری یا رمز عبور اشتباه است.");
  };

  return (
    <div className="flex w-72 flex-col items-center">
      <form
        onSubmit={handleLogin}
        className="flex w-full flex-col items-center"
      >
        <h2 className="mb-2 text-4xl font-extrabold">کندا ایده</h2>
        <p className="mb-10 text-gray-400">تجربه مهندسی خلاق</p>
        <Input
          placeholder="نام کاربری"
          type="text-left"
          value={username}
          onChange={handleUsernameChange}
          className="mb-8"
        />
        <Input
          placeholder="کلمه عبور"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="mb-3"
        />
        <Link
          to="/forget"
          className="mb-8 block self-end text-[0.5rem] text-gray-300 transition-all duration-300 hover:text-violet-600"
        >
          آیا نام کاربری یا کلمه عبور را فراموش کردید؟
        </Link>
        <button className="rounded-full bg-violet-600 px-4 py-2.5 text-sm text-white transition-all duration-300 hover:bg-violet-800">
          ورود به سامانه
        </button>
        <p className="flex h-10 items-end self-start text-xs text-red-500">
          {error}{" "}
        </p>
      </form>
      <div className="my-4 grid grid-cols-3 grid-rows-[1rem_1rem] gap-x-2">
        <div className="border-b-2"></div>
        <span className="row-span-2 self-center justify-self-center text-[0.5rem] text-gray-300">
          آیا حساب کاربری ندارید؟
        </span>
        <div className="border-b-2"></div>
      </div>
      <Link
        to="/signup"
        className="rounded-full bg-violet-300 px-4 py-3 text-[0.6rem] text-white transition-all duration-300 hover:bg-violet-400"
      >
        ساخت حساب کاربری
      </Link>
    </div>
  );
}

export default Login;
