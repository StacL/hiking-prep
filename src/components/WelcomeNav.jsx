import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeNav() {
  return (
    <div class="navbar bg-base-100">

      {/* APP NAME */}
      <Link to="/" class="btn ml-10 btn-ghost normal-case text-xl">Hiking Buddy</Link>

      {/* FINAL BUTTON */}
        <Link class ="navbar-end" to="/login">
        <button class="btn m-0">Log In</button>
        </Link>
    </div>
  );
}
