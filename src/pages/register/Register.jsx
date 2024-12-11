import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/user-slice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const user = useSelector((s) => s.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    let newUser = Object.fromEntries(formData)
    
    if (user.findIndex(item => item.email === newUser.email) >= 0){
      return alert("email is already exists")
    }
    dispatch(addUser({...newUser, id:uuidv4()}))

    e.target.reset()
    navigate("/login")
  };
  

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
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
            name="password"
            id="password"
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all"
        >
          Register
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          If you have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
