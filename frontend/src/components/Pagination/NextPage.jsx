import React from "react";

export default function NextPage({ prev, onClick }) {
  return (
    <button onClick={onClick} className={`page ${prev ? "" : "rotate-180"}`}>
      <img className="block" src="/assets/back-icon.svg" alt="back to home" />
    </button>
  );
}
