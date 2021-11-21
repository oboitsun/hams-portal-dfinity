import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";

export default function Minigames() {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <SectionHeaderBackNav pageName="Mini games" />
      <div className="flex flex-grow w-full h-full justify-center items-center">
        <p className="text-9xl text-white font-creep">Coming Soon</p>
      </div>
    </div>
  );
}
