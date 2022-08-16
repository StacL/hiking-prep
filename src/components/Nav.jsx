import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // Log out user and return to Welcome Page
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out.");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="navbar bg-base-100">
      {/* MOBILE / SMALL SCREENS */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* List of Items in Navbar */}
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* home */}
            <li>
              <p>Home</p>
            </li>

            {/* Plan */}
            <li tabIndex="0">
              <p className="justify-between">Plan</p>
            </li>

            {/* Settings */}
            <li>
              <p>Settings</p>
            </li>
          </ul>
        </div>

        {/* APP NAME */}
        <button className="btn btn-ghost normal-case text-xl lg:ml-10">Hiking Buddy</button>
      </div>

      {/* LARGE SCREENS */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* Home */}
          <li>
            <p>Home</p>
          </li>
          {/* Plan */}
          <li tabIndex="0">
            <p>Plan</p>
          </li>
          {/* Settings */}
          <li>
            <p>Settings</p>
          </li>
        </ul>
      </div>

      {/* LOG OUT BUTTON */}
      <div className="navbar-end">
        <button onClick={handleLogout} className="btn btn-accent m-0 lg:mr-10">
          Log Out
        </button>
      </div>
    </div>
  );
}
