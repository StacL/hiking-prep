import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeNav(props) {
  return (
    <div className="navbar bg-base-100">

      {/* APP NAME */}
      <Link to="/" className="btn ml-10 btn-ghost normal-case text-xl">Hiking Buddy</Link>

      {/* FINAL BUTTON */}
        {props.showLogin !== false && <Link className ="navbar-end" to="/login">
        <button className="btn btn-accent m-0">Log In</button>
        </Link>}
    </div>
  );
}
