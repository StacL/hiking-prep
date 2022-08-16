import React from "react";
import WeatherCard from "../components/Dashboard/WeatherCard";
import Nav from "../components/Nav";
import WaterfallVideo from "../images/background/waterfall.mp4";
import DailyChecklist from "../components/Dashboard/DailyChecklist";

const Home = () => {
  return (
    <>
      <Nav />
      <video
        className="object-cover w-full h-28 brightness-25"
        src={WaterfallVideo}
        autoPlay
        loop
        muted
      />
      <div className="min-h-[75vh] p-5 bg-primary flex flex-col w-full lg:flex-row">
        <div className="">
          <WeatherCard />
        </div>

        <div className="divider m-4 lg:divider-horizontal"></div>

        <div className="">
          <DailyChecklist />
        </div>
      </div>
    </>
  );
};

export default Home;
