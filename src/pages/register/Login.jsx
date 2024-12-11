import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const users = useSelector(s => s.user.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  

  const handleLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target)
    let user = Object.fromEntries(formData)
    

    let existsUser = users.find(item => item.email === user.email)

    if (existsUser) {
      if (existsUser.password === user.password){
        dispatch(signIn("fake token"))
        navigate("/admin")
      }else{
        alert("email or password is incorrect");
      }
    }else{
      alert("email or password is incorrect")
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
