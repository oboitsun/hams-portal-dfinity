import React from "react";
import { useDispatch } from "react-redux";
import ButtonTemplate from "../../components/ButtonTemplate";
import Modal from "../../components/Modal";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import { setShowModal } from "../../reducers/uiReducer";
import SettingsChanges from "./SettingsChanges";
import "./settings.scss";

export default function Settings() {
  const dispatch = useDispatch();
  return (
    <div id="settings" className="flex gap-5 ">
      <div className="w-1/4 flex flex-col gap-5">
        <SectionHeaderBackNav pageName="Settings" />
        <div className="border-2 border-turf p-[30px] w-full">
          <p className="text-white text-sm leading-tight">
            If you need help, you can always write to us in support and we will help you!
          </p>
          <div className="w-full mt-4">
            <ButtonTemplate
              onClick={() => {
                dispatch(setShowModal(true));
              }}
              color="#252525"
              strokeColor="#000"
            >
              <p className="w-full text-center relative z-10">Help Center</p>
            </ButtonTemplate>
          </div>
        </div>
      </div>
      <div className="w-3/4 ">
        <SettingsChanges />
      </div>
      <Modal />
    </div>
  );
}
