import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "./Login";
import { useSelector } from "react-redux";

function Layout() {
  const auth = useSelector((store) => store.auth);
  const token = auth.token;
  return (
    <div>
      {auth?.token ? (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Layout;
