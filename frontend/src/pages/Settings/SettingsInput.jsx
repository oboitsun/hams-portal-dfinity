import React from "react";

export default function SettingsInput({ label = "", type = "text" }) {
  return (
    <div className="flex flex-col">
      <p className="input-label">{label}</p>
      <input className="input" type={type} />
    </div>
  );
}
