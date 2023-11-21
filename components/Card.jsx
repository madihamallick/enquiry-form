import React from "react";

const Card = ({ title, description, active, setStep }) => {
  return (
    <div
      className={`border rounded-md flex justify-between w-[26rem] h-auto my-5 cursor-pointer ${
        active
          ? "border-normalblue bg-normalblue bg-opacity-5 shadow-lg"
          : "border-gray-900"
      }`}
      onClick={() => (setStep ? setStep(title) : window.location.reload())}
    >
      <div
        className={`w-20 h-20 m-3 rounded-md ${
          active ? "bg-normalblue bg-opacity-20" : "bg-boxgrey"
        }`}
      ></div>
      <div className="flex-1">
        <h2 className="text-md mt-3">{title}</h2>
        <span className="text-[10px] text-gray-600 my-2">{description}</span>
      </div>
    </div>
  );
};

export default Card;
