import { useEffect } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) {
        navigate("/login", { replace: true });
      }
    },
    [user, navigate],
  );

  return (
    <div className="flex w-72 flex-col rounded-md bg-violet-500 p-5 text-white">
      <h2 className="mb-5 text-2xl font-bold">اطلاعات کاربری</h2>
      <p className="mb-3">{`نام: ${user.name}`}</p>
      <p className="mb-3">{`نام خانوادگی: ${user.familyName}`}</p>
      <p className="mb-3">{`نام کاربری: ${user.username}`}</p>
      <p className="mb-3">{`ایمیل: ${user.email}`}</p>
      <p>{`شماره موبایل: ${user.tel}`}</p>
    </div>
  );
}

export default Profile;
