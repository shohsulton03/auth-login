import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container flex justify-center items-center gap-6">
        <NavLink
          to="/"
          className="text-lg font-semibold hover:text-yellow-400 transition-all"
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className="text-lg font-semibold hover:text-yellow-400 transition-all"
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className="text-lg font-semibold hover:text-yellow-400 transition-all"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
