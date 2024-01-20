import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
const Input = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" />
      </div>

      <UilSearch />
      <UilLocationPoint />
    </div>
  );
};

export default Input;
