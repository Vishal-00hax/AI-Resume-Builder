import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import api from "../components/utils/axios";
import { useEffect } from "react";
import { addUser } from "../components/utils/userSlice";

function Layout() {
  const auth = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const getuser = async () => {
    try {
      const res = await api.get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      console.log(res.data.data);
      dispatch(addUser(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
