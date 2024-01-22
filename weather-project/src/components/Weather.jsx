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
      const reps = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      console.log(reps);

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
    <div className=" h-screen flex justify-center  text-blue-600 bild">
      <header className="my-5 text-center ">
        {/* Header */}
        <h1 className="font-bold text-5xl ">Weather App</h1>
        {/* Search Bar */}
        <div>
          <input
            className="my-6 bg-sky-100 rounded-3xl py-3 px-9 border-none outline-none shadow-xl bg"
            type="text"
            placeholder=" Search City or Town ...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="hover:bg-blue-700 hover:text-white  bg-blue-300  text-blue-700 rounded-3xl py-3 px-9 mx-4 "
            onClick={searchWeather}
          >
            Search
          </button>
        </div>
        {typeof weather.main != "undefined" ? (
          // Display weather data
          <div
            className=" flex justify-center flex-col items-center border-none  rounded-xl p-8 shadow-xl text-white"
            style={{ backgroundColor: "#b2b2b2a1" }}
          >
            {/* Location*/}
            <p className="flex justify-center mx-1 text-5xl">
              {weather.name}, {weather.sys.country}
            </p>
            <img
              className="w-1/3 text-center mx-auto "
              src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=""
            />

            {/* Temperatur Celsius */}
            <p className="flex justify-center text-2xl">
              {weather.weather[0].description}
            </p>
            <p className="flex justify-center my-1  py-3 text-4xl">
              Temp {weather.main.temp} °C
            </p>
            {/* Condition */}
            <p className="flex justify-center  py-3 text-2xl">
              {weather.weather[0].main}
            </p>
            {/* Description */}
            <div
              className=" flex border-none p-4  rounded-lg shadow-2xl my-4 gap-4  w-1/1"
              style={{ backgroundColor: "#319af6b2" }}
            >
              <div
                className="flex flex-col hover:text-green-300 cursor-pointer p-3 broder  text-gray-200 shadow-lg rounded-xl  gap-4  w-1/1 text-xl"
                style={{ backgroundColor: "#c2c2c262" }}
              >
                <p>Feeling Like</p>
                <p className=""> {weather.main.feels_like}°C</p>
              </div>
              <div
                className="flex flex-col p-3  broder hover:text-green-300 cursor-pointer  text-gray-200 shadow-lg rounded-xl  gap-4  w-1/1 text-xl"
                style={{ backgroundColor: "#c2c2c262" }}
              >
                <p>Pressure</p>
                <p className="">{weather.main.pressure} mbar</p>
              </div>
              <div
                className="flex flex-col p-3  broder hover:text-green-300 cursor-pointer text-gray-200 shadow-lg rounded-xl gap-4  w-1/1 text-xl"
                style={{ backgroundColor: "#c2c2c262" }}
              >
                <p>Humidity</p>
                <p className=""> {weather.main.humidity} %</p>
              </div>
              <div
                className="flex flex-col p-3  broder hover:text-green-300 cursor-pointer text-gray-200 shadow-lg rounded-xl gap-4  w-1/1 text-xl"
                style={{ backgroundColor: "#c2c2c262" }}
              >
                <p>Speed</p>
                <p className=""> {weather.wind.speed} km/h </p>
              </div>
              <div
                className="flex flex-col p-3  broder hover:text-green-300 cursor-pointer text-gray-200 shadow-lg rounded-xl gap-4 m w-1/1 text-xl"
                style={{ backgroundColor: "#c2c2c262" }}
              >
                <p>Deg</p>
                <p className=""> {weather.wind.deg} °</p>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </header>
    </div>
  );
};

export default Weather;
