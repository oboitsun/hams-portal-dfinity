import React from "react";

export default function LastPage({ first, onClick }) {
  return (
    <button onClick={onClick} className={`page ${first ? "" : "rotate-180"}`}>
      <img className="block" src="/assets/back-icon.svg" alt="back to home" />
      <img className="block" src="/assets/back-icon.svg" alt="back to home" />
    </button>
  );
}
