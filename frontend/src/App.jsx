import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import "./common.scss"
import HomeDashboard from "./components/HomeDashboard"
import RequireAuth from "./components/RequireAuth"
import Home from "./pages/Home/Home"
import Leaderboard from "./pages/Leaderboard"
import Login from "./pages/Login/Login"
import Marketplace from "./pages/Marketplace/Marketplace"
import Minigames from "./pages/Minigames"
import Store from "./pages/Store"
import HelpCenter from "./pages/HelpCenter/HelpCenter"
import MyHams from "./pages/MyHams"
import Settings from "./pages/Settings"

function App() {
  const location = useLocation()

  return (
    <div className="">
      {/* <AnimatePresence exitBeforeEnter> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/my-hams" element={<MyHams />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/minigames" element={<Minigames />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  )
}

export default App
