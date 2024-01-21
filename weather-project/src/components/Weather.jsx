import React, { useState, useEffect } from "react";

const Weather = () => {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState({});

  const api = {
    key: "b81b8d1dbdfe942876f0a341884b53a2",
    base: "https://api.openweathermap.org/data/2.5/",
    url: "api.openweathermap.org/data/2.5/",
  };

  async function searchWeather() {
    try {
      // const reps = await fetch(
      //   `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      // );
      const reps = await fetch(
        `${api.url}forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${api.key}`
      );

      const data = await reps.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      error.message = "City not found";
    }
  }

  useEffect(() => {
    searchWeather();
  }, []);

  // // Function to determine background color
  // const getBackgroundColor = (condition) => {
  //   switch (condition) {
  //     case "Rain":
  //       return "grey";
  //     case "Clear":
  //       return "lightblue";
  //     case "Clouds":
  //       return "lightgrey";
  //     case "Snow":
  //       return "whitegrey";
  //     case "Thunderstorm":
  //       return "grey";
  //     case "Drizzle":
  //       return "grey";
  //     case "Haze":
  //       return "grey";
  //     case "Mist":
  //       return "grey";
  //     case "Smoke":
  //     // Add more cases for other conditions
  //     default:
  //       return "defaultColor";
  //   }
  // };

  return (
    <div className=" h-screen flex justify-center  my-6 text-blue-600 ">
      <header className="my-20">
        {/* Header */}
        <h1 className="font-bold text-5xl  ">Weather App</h1>
        {/* Search Bar */}
        <div>
          <input
            className="my-6 bg-sky-100 rounded-3xl p-4 border-none outline-none shadow-xl bg"
            type="text"
            placeholder=" Search City or Town ...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="hover:bg-blue-700 hover:text-white  bg-blue-300  text-blue-700 rounded-3xl p-4 mx-4 "
            onClick={searchWeather}
          >
            Search
          </button>
        </div>
        {typeof weather.main != "undefined" ? (
          // Display weather data
          <div
            className=" border-none  rounded-xl p-6 shadow-xl text-white"
            style={{ backgroundColor: "#b2b2b2a1" }}
          >
            {/* Location*/}
            <p className="flex justify-center mx-1 text-4xl">
              {weather.name}, {weather.sys.country}
            </p>
            <img
              className="w-1/2 flex justify-center  items-center "
              src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=""
            />
            {/* Temperatur Celsius */}
            <p className="flex justify-center my-1  py-3">
              Temp {weather.main.temp} °C
            </p>
            {/* Condition */}
            <p className="flex justify-center  py-3">
              {weather.weather[0].main}
            </p>
            {/* Description */}
            <p className="flex justify-center">
              {weather.weather[0].description}
            </p>
            <p className="flex justify-center"> Temp {weather.main.temp} </p>
            <p className="flex justify-center">
              Humidity {weather.main.humidity} %
            </p>
            <p className="flex justify-center">
              Feeling {weather.main.feels_like}°C
            </p>
            <p className="flex justify-center">
              Pressure {weather.main.pressure}
            </p>
            <p className="flex justify-center"> {weather.wind.speed} </p>
            <p className="flex justify-center"> {weather.wind.deg} </p>
          </div>
        ) : (
          " "
        )}
      </header>
    </div>
  );
};

export default Weather;
