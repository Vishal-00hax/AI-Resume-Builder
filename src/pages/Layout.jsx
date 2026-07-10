import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Login from "./Login";

function Layout() {
  const auth = useSelector((store) => store.auth);
  console.log("Auth", auth);
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
