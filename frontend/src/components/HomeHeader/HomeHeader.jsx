import React from "react";
import "./home-header.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
import { Link } from "react-router-dom";
import ButtonTemplate from "../ButtonTemplate";
export default function HomeHeader() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setUser(null));
  };
  return (
    <div className="home-header">
      <Link className="block w-1/5" to="/">
        <img className="w-full block" src="../../assets/logo.png" alt="Dino logo" />
      </Link>
      <div className="flex items-center gap-5">
        <img className="w-auto" src="../../assets/dfinity-logo.png" alt="Dfinity logo" />
        <div className="header-balance min-w-max">2.70195258 ICP</div>
        <div className="w-full">
          <ButtonTemplate onClick={logOut} color="#D88535" strokeColor="#AD6016">
            <p className="text-white text-center font-bold relative z-10 px-5">
              Disconnect
            </p>
          </ButtonTemplate>
        </div>
      </div>
    </div>
  );
}
