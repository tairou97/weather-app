import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState({});

  const api = {
    key: "b81b8d1dbdfe942876f0a341884b53a2",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  useEffect(() => {
    const searchWeather = async () => {
      try {
        const reps = await fetch(
          `${api.base}weather?q=${search}&appid=${api.key}`
        );
        const data = await reps.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchWeather}>button</button>

      <p>
        {weather.name} {weather.sys.country}
      </p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.weather[0].main}</p>

      <p>{}</p>
    </>
  );
}

export default App;
