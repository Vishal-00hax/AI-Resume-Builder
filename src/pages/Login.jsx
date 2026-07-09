import { User2Icon, Mail, Lock } from "lucide-react";
import React from "react";
import { useState } from "react";
import api from "../components/utils/axios";
import { login } from "../components/utils/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState("login");
  console.log(state);
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload =
        state === "login"
          ? { emailId: formData.emailId, password: formData.password }
          : formData;
      const url = state === "login" ? "/api/user/login" : "/api/user/register";
      const response = await api.post(url, payload);
      console.log("FULL RESPONSE:", response);
      console.log("DATA:", response.data);
      console.log("TOKEN:", response.data.token);
      localStorage.setItem("token", response?.data?.token);
      console.log("LOCAL STORAGE:", localStorage.getItem("token"));
      dispatch(
        login({
          user: response?.data?.user?.name,
          token: response?.data?.token,
        }),
      );
      navigate("/app");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-96 max-w-md text-center border border-gray-300/60 rounded-2xl px-6 sm:px-8 py-8 bg-white shadow-sm"
      >
        <h1 className="text-gray-900 text-3xl font-medium">
          {state === "login" ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          {state === "login"
            ? "Sign in to your account"
            : "Start your journey with us"}
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 pr-2 gap-2 focus-within:border-green-500 transition-colors">
            <User2Icon size={16} color="#6B7280" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="flex-1 border-none outline-none ring-0 bg-transparent py-2 text-sm"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              autoComplete="name"
            />
          </div>
        )}

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 pr-2 gap-2 focus-within:border-green-500 transition-colors">
          <Mail size={16} color="#6B7280" />
          <input
            type="email"
            id="email"
            name="emailId"
            placeholder="Email address"
            className="flex-1 border-none outline-none ring-0 bg-transparent py-2 text-sm"
            value={formData.emailId}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 pr-2 gap-2 focus-within:border-green-500 transition-colors">
          <Lock size={16} color="#6B7280" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="flex-1 border-none outline-none ring-0 bg-transparent py-2 text-sm"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="current-password"
          />
        </div>

        <div className="mt-4 text-right">
          <button
            type="button"
            className="text-sm text-green-500 hover:underline focus:outline-none"
            onClick={() => {
              /* handle forgot password */
            }}
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all duration-200"
        >
          {state === "login" ? "Sign In" : "Create Account"}
        </button>

        <p className="text-gray-500 text-sm mt-4">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-green-500 hover:underline font-medium focus:outline-none"
          >
            {state === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
