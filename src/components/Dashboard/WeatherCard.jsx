import React, { useState } from "react";
import background from "../../images/background/backgroundCanyon.jpg"

// Warnings
import HeatWarning from "../Warnings/Heat/HeatWarning";
import HeatAdvisoryWarning from "../Warnings/Heat/HeatAdvisoryWarning";
import ExcessiveHeatWarning from "../Warnings/Heat/ExcessiveHeatWarning";

// Weather API variables
const api = {
  key: `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherCard = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // Search for weather location
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          // console.log(result);
        });
    }
  };

  return (
    <>
      {/* Search Location */}
      <div className="card w-80 bg-secondary shadow-xl">
        <div className="card-body">
          {/* card title */}
          <h2 className="card-title justify-center">Weather Alert</h2>

          {/* search location */}
          <input
            type="text"
            placeholder="Search Location..."
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>

      {/* DISPLAY AFTER USER HAS SEARCHED */}
      {/* Basic Temperature */}
      {typeof weather.main != "undefined" ? (
        <>
        <div className="card card-compact mt-1 w-80 bg-base-100 shadow-xl image-full">
          {/* background photo */}
          <figure>
            <img src={background} alt="" />
          </figure>

          {/* display info */}
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="flex">
              <img
                className="mr-5 w-20 h-15"
                src={
                  "http://openweathermap.org/img/w/" +
                  weather.weather[0].icon +
                  ".png"
                }
                alt=""
              />
              <div className="text-lg">
                <p>{Math.round(weather.main.temp)} &#8457;</p>
                <p>{weather.weather[0].main}</p>
                <p>Feels Like: {Math.round(weather.main.temp)} &#8457;</p>
              </div>
            </div>
          </div>
        </div>

          {/* warnings */}
          {(weather.main.temp > 105) && <ExcessiveHeatWarning/>}
          {(weather.main.temp > 100) && <HeatAdvisoryWarning/>}
          {(weather.main.temp > 90) && <HeatWarning/>}
        </>
      ) : (
        ""
      )}
      
    </>
  );
};

export default WeatherCard;
