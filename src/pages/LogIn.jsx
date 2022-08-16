import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import WelcomeNav from "../components/WelcomeNav";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  // Log into account, if valid, and move user to Home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <WelcomeNav showLogin={false} />
      <div className="max-w-[400px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2"> Log in to your account</h1>
          <p className="py-2">
            Don't have an account yet?{" "}
            <Link to="/signup" className="underline">
              Sign up.
            </Link>
          </p>
        </div>

        {/* User Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 text-primary"
              type="email"
              name=""
              id=""
            />
          </div>

          {/* Password */}
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 text-primary"
              type="password"
              name=""
              id=""
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-accent w-full mt-4">Log in</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
