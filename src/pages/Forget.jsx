import { useState } from "react";
import { isEmail } from "validator";

import Input from "../components/Input";

function Forget() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = function (e) {
    setEmail(e.target.value);
  };

  const handleEmailRecoveryClick = function () {
    setError("");
    if (!email) {
      setError("لطفا آدرس ایمیل را وارد نمایید.");
      return;
    }
    if (!isEmail(email)) {
      setError("لطفا یک آدرس ایمیل معتبر وارد نمایید.");
      return;
    }
    setMessage(
      "ایمیلی حاوی لینک بازیابی رمز عبور به آدرس ایمیل وارد شده ارسال شد.",
    );
  };

  return (
    <div className="flex w-72 flex-col items-start">
      <h3 className="mb-10 text-2xl font-bold">بازیابی رمز عبور</h3>
      <p className="mb-5 text-xs">لطفا آدرس ایمیل خود را وارد کنید.</p>
      <Input
        placeholder="ایمیل"
        type="text-left"
        value={email}
        onChange={handleEmailChange}
        className="mb-8"
      />
      <button
        onClick={handleEmailRecoveryClick}
        className="mb-8 self-center rounded-full bg-violet-600 px-4 py-2.5 text-sm text-white transition-all duration-300 hover:bg-violet-800"
      >
        ارسال لینک بازیابی
      </button>
      <p className="self-start text-xs text-red-500">{error} </p>
      <p className="self-start text-xs text-green-600">{message} </p>
    </div>
  );
}

export default Forget;
