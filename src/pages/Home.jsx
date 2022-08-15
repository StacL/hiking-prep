import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
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
    <div className="max-w-[600px] mx-auto my-12 p-4">
      <WeatherCard/>
      
      {/* Log out button */}
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Home;
