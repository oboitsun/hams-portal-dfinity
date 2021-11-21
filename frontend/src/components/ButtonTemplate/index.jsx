import React from "react";
import "./button-template.scss";
export default function ButtonTemplate({
  innerText,
  type,
  color = "#ABA6A5",
  strokeColor = "#635E5D",
  children,
  ...props
}) {
  return (
    <button {...props} className={`btn-template ${type}`}>
      <svg
        className="absolute w-full h-full top-0 left-0"
        preserveAspectRatio="none"
        viewBox="0 0 335 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="331" height="68" fill={color} />

        <rect x="2" y="2" width="331" height="68" stroke={strokeColor} strokeWidth="4" />
        <path
          opacity="0.06"
          d="M4 51C4 51 70.4601 60.7143 168.315 60.7143C266.171 60.7143 331 51 331 51V68H4V51Z"
          fill="black"
        />
        <path
          opacity="0.07"
          d="M331 21C331 21 264.54 11.2857 166.685 11.2857C68.8292 11.2857 4 21 4 21L4 4L331 3.99997L331 21Z"
          fill="white"
        />
        <path d="M53 51.2727L2 54L2 49L53 51.2727Z" fill={strokeColor} />
        <path d="M149.273 61L152 70H147L149.273 61Z" fill={strokeColor} />
        <path d="M309.364 53L311 70H308L309.364 53Z" fill={strokeColor} />
        <path d="M258.727 10L256 1L261 1L258.727 10Z" fill={strokeColor} />
        <path d="M78.6364 18L77 1L80 1L78.6364 18Z" fill={strokeColor} />
        <path d="M30 21.3636L2 23L2 20L30 21.3636Z" fill={strokeColor} />
        <path d="M283 22.7273L334 20L334 25L283 22.7273Z" fill={strokeColor} />
        <path d="M306 52.6364L334 51L334 54L306 52.6364Z" fill={strokeColor} />
      </svg>

      {children}
    </button>
  );
}
