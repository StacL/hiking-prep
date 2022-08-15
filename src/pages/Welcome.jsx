import React from "react";
import hiker from "../images/manHiking.jpg";
import { Link } from "react-router-dom";
import WaterfallVideo from "../images/background/waterfall.mp4"


export default function Welcome() {
  return (
    <>
      <div class="hero min-h-screen">
        <video
          class="object-cover w-full h-full brightness-25"
          src={WaterfallVideo}
          autoPlay
          loop
          muted
        />
        <div class="hero-content flex-col lg:flex-row-reverse lg:pr-20">
          <img src={hiker} class="max-w-sm rounded-lg shadow-2xl md:max-w-xl" />
          <div class=" p-5 flex flex-col items-center lg:p-10">
            <h1 class="text-center text-5xl font-bold lg:text-left">
              Planing to explore, made easy!
            </h1>

            <p class="text-center py-8 lg:text-left">
              A simple planner that lets you prepare for all your outdoor
              adventures--no matter if its 1 hour or 1 week. With real weather
              risks and packing advice, we keep you safe on the trails.
            </p>

            <Link to="/signup">
              <button class="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
