import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../reducers/uiReducer";
import ContactUs from "./ContactUs/ContactUs";

export default function Modal() {
  const showModal = useSelector((state) => state.uiState.showModal);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-all ${
        showModal ? "z-30 opacity-100" : "z-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => {
          dispatch(setShowModal(false));
        }}
        className="backdrop absolute w-full h-full top-0 left-0 bg-black/70"
      ></div>
      <div className="relative z-30 w-3/4 max-w-lg bg-[#F1ECDF] p-6">
        <div className="flex items-center justify-between">
          <p className="text-black text-3xl font-bold">Help Center</p>
          <img
            onClick={() => {
              dispatch(setShowModal(false));
            }}
            className="block w-auto cursor-pointer"
            src="assets/close-icon.svg"
            alt="close"
          />
        </div>
        <div className="w-full bg-black/20 h-0.5 my-6"></div>
        <ContactUs />
      </div>
    </div>
  );
}
