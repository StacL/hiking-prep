import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  // Create account, if not already in system, and move user to Home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2"> Sign up for a free account</h1>
        <p className="py-2">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in.
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
            className="border p-3"
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
            className="border p-3"
            type="password"
            name=""
            id=""
          />
        </div>

        {/* Submit Button */}
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 p-4 m-2 w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
