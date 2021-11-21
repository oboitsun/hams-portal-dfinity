import "./home-dashboard.scss"
import Navigation from "./Navigation"
import React from "react"
export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <div className="navigation h-full w-full">
        <Navigation />
      </div>
      <div className="banner relative">
        <p className="text-7xl leading-none uppercase font-creep text-white absolute pt-10 left-0 w-full text-center ">
          WElcome to the <br /> haunted house
        </p>
        <img
          className=""
          src="assets/welcome-to.png"
          alt="welcome to haunted hamsters"
        />
      </div>
    </div>
  )
}
