import React from "react";
import {
  Routes,
  Route,
  UNSAFE_withHydrateFallbackProps,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import api from "./components/utils/axios";
import { useEffect } from "react";
import { addUser } from "./components/utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const auth = useSelector((store) => store.auth);
  const token = auth.token;
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getuser = async () => {
    try {
      if (token) {
        const res = await api.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(addUser(res.data.data));
      }
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      console.log(err.response.message || err.response);
    }
  };

  useEffect(() => {
    getuser();
  }, [token, user._id]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>
        <Route path="/view/:resumeId" element={<Preview />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
