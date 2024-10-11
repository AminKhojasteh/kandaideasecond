import { useState } from "react";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

function Input({ className = "", type = "text-right", ...otherProps }) {
  const [visible, setVisible] = useState(false);

  const genericStyles =
    "block w-full border-b-2 border-gray-200 py-1.5 text-sm text-gray-600 placeholder:text-right placeholder:text-gray-300 focus:border-gray-400 focus:outline-none ";

  let uniqueStyles;
  let inputType;

  switch (type) {
    case "text-right":
      uniqueStyles = "text-right ";
      inputType = "text";
      break;
    case "text-left":
      uniqueStyles = "text-left ";
      inputType = "text";
      break;
    case "email":
      uniqueStyles = "text-left ";
      inputType = "email";
      break;
    case "password":
      uniqueStyles = "text-left pl-5 ";
      inputType = "password";
      break;
    default:
  }

  if (inputType === "password")
    return (
      <div className={"relative w-full " + className}>
        <input
          type={visible ? "text" : "password"}
          {...otherProps}
          className={genericStyles + uniqueStyles}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300">
          {visible ? (
            <LuEye onClick={() => setVisible(false)} />
          ) : (
            <LuEyeOff onClick={() => setVisible(true)} />
          )}
        </div>
      </div>
    );

  return (
    <input
      type={inputType}
      {...otherProps}
      className={genericStyles + uniqueStyles + className}
    />
  );
}

export default Input;
