import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

export default function LoginFooter({ login = false, ...props }) {
  return (
    <div className="my-container">
      <div
        className={`flex items-center mx-auto gap-10 uppercase text-white text-xl relative z-10 ${
          login ? "justify-start" : "justify-center"
        }`}
      >
        <Socials />
        <img
          className="w-auto block"
          src="../../assets/dfinity-logo.png"
          alt="dfinity logo"
        />
        <p className="text-sm font-medium capitalize">Haunted Hamsters 2021</p>
      </div>
    </div>
  );
}
