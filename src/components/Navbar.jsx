import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(removeUser());
    toast.success("Logout successful");
    navigate("/");
  };

  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        <Link to="/">
          <img
            src="/application_paperedit_12787.ico"
            alt="logo"
            className="h-11 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
