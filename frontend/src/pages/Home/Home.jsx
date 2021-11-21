import "./home-page.scss"
import React from "react"
import { Outlet } from "react-router-dom"
import HomeHeader from "../../components/HomeHeader/HomeHeader"
import LoginFooter from "../../components/LoginFooter"
import { motion } from "framer-motion"
export default function Home() {
  return (
    <div
      key="home"
      id="home"
      className="flex flex-col items-center justify-between w-full overflow-hidden relative bg-black"
    >
      <div className="absolute w-full h-auto top-0 left-0">
        <img
          className=" w-full h-full object-cover lg:object-contain lg:h-auto z-0"
          src="assets/home-bg.jpg"
          alt="home-screen"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="my-container h-full flex-grow flex flex-col relative z-10">
        <HomeHeader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full  pt-14 pb-12 flex flex-col flex-grow justify-between"
        >
          <Outlet />
        </motion.div>
      </div>
      <LoginFooter />
    </div>
  )
}
