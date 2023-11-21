import React from "react";
import Card from "../components/Card";

const SideNavbar = ({renderSideNavItems}) => {
  return (
    <div className="flex-col flex border-r-2 bg-white">
      <div className="lg:flex md:flex-col hidden">
        <div className="space-y-4">
          <div className="mx-6">
            <Card
              title="New Form"
              description="Start creating a new form with the wide options of fields available"
            />
            <span>Explore the following Templates:</span>
            {renderSideNavItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
