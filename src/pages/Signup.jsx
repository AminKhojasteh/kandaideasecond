import { useState } from "react";
import { isEmail, isMobilePhone, isStrongPassword } from "validator";

import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthContext } from "../context/useAuthContext";

function Signup() {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleNameChange = function (e) {
    setName(e.target.value);
  };
  const handleFamilyNameChange = function (e) {
    setFamilyName(e.target.value);
  };
  const handleUsernameChange = function (e) {
    setUsername(e.target.value);
  };
  const handlePasswordChange = function (e) {
    setPassword(e.target.value);
  };
  const handleEmailChange = function (e) {
    setEmail(e.target.value);
  };
  const handleTelChange = function (e) {
    setTel(e.target.value);
  };

  const inputsCheck = function () {
    if (!name || !familyName || !username || !password || !email || !tel) {
      setError("لطفا تمام فیلدها را پر بفرمایید.");
      return false;
    }
    if (!isEmail(email)) {
      setError("لطفا یک آدرس ایمیل معتبر وارد نمایید.");
      return false;
    }
    if (!isStrongPassword(password)) {
      setError(
        "لطفا یک رمز عبور قوی انتخاب کنید. رمز عبور باید شامل حداقل 8 حرف، حروف کوچک و بزرگ انگلیسی، عدد و کاراکتر خاص باشد.",
      );
      return false;
    }
    if (!isMobilePhone(tel, "fa-IR")) {
      setError("لطفا شماره موبایل را با صفر ابتدا به درستی وارد کنید.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!inputsCheck()) return;
    const newUser = { name, familyName, username, password, email, tel };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/", { replace: true });
  };

  return (
    <div className="flex w-72 flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center"
      >
        <h3 className="mb-5 self-start text-xl font-extrabold">
          ساخت حساب کاربری جدید!
        </h3>
        <Input
          placeholder="نام"
          type="text-right"
          value={name}
          onChange={handleNameChange}
          className="mb-6"
        />
        <Input
          placeholder="نام خانوادگی"
          type="text-right"
          value={familyName}
          onChange={handleFamilyNameChange}
          className="mb-6"
        />
        <Input
          placeholder="نام کاربری"
          type="text-left"
          value={username}
          onChange={handleUsernameChange}
          className="mb-6"
        />
        <Input
          placeholder="کلمه عبور"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="mb-6"
        />
        <Input
          placeholder="ایمیل"
          type="text-left"
          value={email}
          onChange={handleEmailChange}
          className="mb-6"
        />
        <Input
          placeholder="شماره موبایل"
          type="text-left"
          value={tel}
          onChange={handleTelChange}
          className="mb-6"
        />
        <button className="rounded-full bg-violet-600 px-8 py-2.5 text-sm text-white transition-all duration-300 hover:bg-violet-800">
          ثبت نام!!
        </button>
      </form>
      <div className="my-4 grid grid-cols-3 grid-rows-[1rem_1rem] gap-x-2">
        <div className="border-b-2"></div>
        <span className="row-span-2 self-center justify-self-center text-[0.5rem] text-gray-300">
          آیا حساب کاربری دارید؟
        </span>
        <div className="border-b-2"></div>
      </div>
      <Link
        to="/login"
        className="mb-6 rounded-full bg-violet-300 px-9 py-3 text-[0.6rem] text-white transition-all duration-300 hover:bg-violet-400"
      >
        وارد شوید!!
      </Link>
      <p className="self-start text-xs text-red-500">{error}</p>
    </div>
  );
}

export default Signup;
