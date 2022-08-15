import React from "react";

export default function Nav() {
  return (
    <div class="navbar bg-base-100">

      {/* MOBILE / SMALL SCREENS */}
      <div class="navbar-start">
        {/* Mobile Dropdown */}
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* List of Items in Navbar */}
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* home */}
            <li>
              <a>Home</a>
            </li>

            {/* Plan */}
            <li tabindex="0">
              <a class="justify-between">Plan</a>
            </li>

            {/* Settings */}
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>

      {/* APP NAME */}
        <a class="btn btn-ghost normal-case text-xl">Hiking Buddy</a>
      </div>

      {/* LARGE SCREENS */}
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {/* Home */}
          <li>
            <a>Home</a>
          </li>
          {/* Plan */}
          <li tabindex="0">
            <a>
              Plan
            </a>
          </li>
          {/* Settings */}
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>

      {/* FINAL BUTTON */}
      <div class="navbar-end">
        <a class="btn m-0">Log In</a>
      </div>
    </div>
  );
}
