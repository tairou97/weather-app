import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Berlin",
    },
    {
      id: 3,
      title: "paris",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Tokyo",
    },
    {
      id: 6,
      title: "Madrid",
    },
  ];
  return (
    <div className="flex justify-around  items-center my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium ">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
