import React from "react";

const TopNavbar = ({ renderTopStepNumbers }) => {
  return (
    <div className="border-b-2 px-0 mx-0 w-full shadow-sm bg-white">
      <div className="w-9/12 mx-auto py-4">{renderTopStepNumbers()}</div>
    </div>
  );
};

export default TopNavbar;
