import React from "react";
import ButtonTemplate from "../../components/ButtonTemplate";
import SettingsInput from "./SettingsInput";

export default function SettingsChanges() {
  const wallets = [
    {
      name: "stoic",
      onClick: () => {},
      btnStyle: "turf",
      strokeColor: "#696251",
      color: "#9E9171",
    },
    {
      name: "plug",
      onClick: () => {},
      btnStyle: "crimson",
      strokeColor: "#AD6016",
      color: "#D88535",
    },
    {
      name: "earth",
      onClick: () => {},
      btnStyle: "charcoal",
      strokeColor: "#000",
      color: "#252525",
    },
  ];
  return (
    <div className="w-full border-white border-2 p-[30px]">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10">
        <SettingsInput label="First Name" />
        <SettingsInput label="Last Name" />
        <SettingsInput label="Email" type="email" />
        <SettingsInput label="Phone" />
      </div>
      <p className="input-label mt-6">My Wallet</p>
      <div className="flex flex-col w-full gap-6">
        {wallets.map((wallet, i) => (
          <ButtonTemplate
            color={wallet.color}
            strokeColor={wallet.strokeColor}
            key={i}
            type={wallet.btnStyle}
            className={`wallet ${wallet.name}`}
            onClick={wallet.onClick}
          >
            <p className={`text-center z-10 relative ${wallet.name}`}>
              connect {wallet.name} wallet
            </p>
          </ButtonTemplate>
        ))}
      </div>
    </div>
  );
}
