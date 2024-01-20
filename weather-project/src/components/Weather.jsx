import React, { useState } from "react";

const Weather = () => {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState({});

  const api = {
    key: "b81b8d1dbdfe942876f0a341884b53a2",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  async function searchWeather() {
    try {
      const reps = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const data = await reps.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      error.message = "City not found";
    }
  }

  return (
    <div className=" h-screen flex justify-center items-center my-6 text-blue-600">
      <header>
        {/* Header */}
        <h1 className="font-bold text-3xl ">Weather App</h1>
        {/* Search Bar */}
        <div>
          <input
            className="my-6 bg-sky-100 rounded-md p-2"
            type="text"
            placeholder=" Search City or Town ...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="hover:bg-blue-700 hover:text-white  bg-blue-300  text-blue-700 rounded-md p-2 mx-3 "
            onClick={searchWeather}
          >
            Search
          </button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            {/* Location*/}
            <p className="flex justify-center my-1">
              {weather.name}, {weather.sys.country}
            </p>
            {/* Temperatur Celsius */}
            <p className="flex justify-center my-1">{weather.main.temp}°F</p>
            {/* Condition */}
            <p className="flex justify-center">{weather.weather[0].main}</p>
            <p className="flex justify-center">
              ({weather.weather[0].description})
            </p>
          </div>
        ) : (
          <p className="flex justify-center my-1">{weather.message}</p>
        )}
      </header>
    </div>
  );
};

export default Weather;
