import { useState, useEffect } from "react";
const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const api = {
    key: "b81b8d1dbdfe942876f0a341884b53a2 ",
    url: `https://api.openweathermap.org/data/2.5/`,
  };

  // Fetching data from the API
  async function searchWeather() {
    try {
      const resp = await fetch(
        `${api.url}weather?q=${search}&appid=${api.key}`
      );
      const data = await resp.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchWeather();
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-blue-600 font-bold  text-center text-3xl ">
          Weather Creazy
        </h1>
        <input
          type="text"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-300 px-3 rounded-lg text-white my-3 "
          onClick={searchWeather}
        >
          Search
        </button>
      </div>

      <div className="bg-gray-300 rounded-xl py-5 px-6 flex justify-center items-center flex-col w-1/2">
        {/* <p>
          {weather.name}, {weather.sys.country}
        </p>
        <img
          className="w-1/2  "
          src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt=""
        />
        <p> {weather.weather[0].description} </p>
        <p> {weather.main.temp} </p>
        <p> {weather.main.humidity} </p>
        <p> {weather.main.pressure} </p>
        <p> {weather.wind.speed} </p>
        <p> {weather.wind.deg} </p> */}
      </div>
    </div>
  );
};

export default App;
