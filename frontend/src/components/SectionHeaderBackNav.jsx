import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeaderBackNav({ pageName = "" }) {
  return (
    <div className="w-full flex items-center">
      <Link to="/">
        <div className="back-home-button">
          <img className="abs-centering" src="/assets/back-icon.svg" alt="back to home" />
        </div>
      </Link>
      <p className="capitalize font-bold text-2xl text-white ml-6">{pageName}</p>
    </div>
  );
}
