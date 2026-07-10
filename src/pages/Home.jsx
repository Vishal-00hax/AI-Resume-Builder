import React from "react";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import CalltoAction from "../components/home/CalltoAction";
import Footer from "../components/home/Footer";
import { useSelector, useDispatch } from "react-redux";
import api from "../components/utils/axios";
import { useEffect } from "react";
import { addUser } from "../components/utils/userSlice";
import { useNavigate } from "react-router-dom";
function Home() {
  const auth = useSelector((store) => store.auth);
  const token = auth.token;
  console.log("Auth", auth);
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
  }, []);

  const user = useSelector((store) => store.user);

  console.log("User", user);

  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonials />
      <CalltoAction />
      <Footer />
    </div>
  );
}

export default Home;
