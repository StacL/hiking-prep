import React from "react";
import "../styles/welcome.css";
import hiker from "../images/manHiking.jpg"

export default function Welcome() {
  return (
    <div className="page welcome">
      <div className="welcome--text">
        <h1>Hiking Buddy</h1>
        <h2>Planing to explore, made easy</h2>
        <p>Planning for a hike? A day trip? A backpacking trip? </p>
        <p>
          We got you. This is a simple planner that lets you prepare for all
          your outdoor adventures--no matter if its 1 hour or 1 week.
        </p>
        <div className="welcome--bottomButtons">
          <p>Sign Up</p>
          <p>Login</p>
        </div>
      </div>
      <img className="welcome--img" src={hiker} alt="hiker exploring a trail" />
    </div>
  );
}
