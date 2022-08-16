import React from "react";
import hiker from "../images/manHiking.jpg";
import WelcomeNav from "../components/WelcomeNav";
import { Link } from "react-router-dom";
import WaterfallVideo from "../images/background/waterfall.mp4"


export default function Welcome() {
  return (
    <>
      <WelcomeNav />

      <div className="hero min-h-screen pt-0">
        <video
          className="object-cover w-full h-full brightness-25"
          src={WaterfallVideo}
          autoPlay
          loop
          muted
        />
        <div className="hero-content flex-col lg:flex-row-reverse lg:pr-20">
          <img src={hiker} alt="hiker" className="max-w-sm rounded-lg shadow-2xl md:max-w-xl" />
          <div className=" p-5 flex flex-col items-center lg:p-10">
            <h1 className="text-center text-5xl font-bold lg:text-left">
              Planing to explore, made easy!
            </h1>

            <p className="text-center py-8 lg:text-left">
              A simple planner that lets you prepare for all your outdoor
              adventures--no matter if its 1 hour or 1 week. With real weather
              risks and packing advice, we keep you safe on the trails.
            </p>

            <Link to="/signup">
              <button className="btn btn-accent">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
