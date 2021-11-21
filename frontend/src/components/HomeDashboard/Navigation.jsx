import React from "react";
import { Link } from "react-router-dom";
import ButtonTemplate from "../ButtonTemplate";
const buttons = [
  {
    href: "/my-hams",
    text: "My Hamsters",
    iconSrc: "assets/navigation-icons/star.svg",
    color: "#D88535",
    strokeColor: "#AD6016",
    textColor: "my-hams",
  },
  {
    href: "/minigames",
    text: "Mini Games",
    iconSrc: "assets/navigation-icons/play.svg",
    color: "#9E9171",
    strokeColor: "#696251",
    textColor: "mini-games",
  },
  {
    href: "/leaderboard",
    text: "Leaderboard",
    iconSrc: "assets/navigation-icons/leaderboard.svg",
    color: "#252525",
    strokeColor: "#000",
    textColor: "leader",
  },
  {
    href: "/store",
    text: "Store",
    iconSrc: "assets/navigation-icons/store.svg",
    color: "#FFD83A",
    strokeColor: "#ba970a",
    textColor: "store",
  },
  {
    href: "https://entrepot.app/marketplace/hauntedhamsters",
    text: "Marketplace",
    iconSrc: "assets/navigation-icons/marketplace.svg",
    color: "#ABA6A5",
    strokeColor: "#635e5d",
    textColor: "marketplace",
  },
  {
    href: "/settings",
    text: "Settings",
    iconSrc: "assets/navigation-icons/settings.svg",
    color: "#976D34",
    strokeColor: "#4D3719",
    textColor: "settings",
  },
];
export default function Navigation() {
  return (
    <div className="navigation-buttons">
      {buttons.map((btn, i) =>
        btn.text === "Marketplace" ? (
          <a href={btn.href}>
            <ButtonTemplate color={btn.color} strokeColor={btn.strokeColor}>
              <div className={` button-text-container ${btn.textColor}`}>
                <img src={btn.iconSrc} alt={btn.text} />{" "}
                <span className="ml-2">{btn.text}</span>
              </div>
            </ButtonTemplate>
          </a>
        ) : (
          <Link key={`${i}_${btn.text}`} to={btn.href}>
            <ButtonTemplate color={btn.color} strokeColor={btn.strokeColor}>
              <div className={` button-text-container ${btn.textColor}`}>
                <img src={btn.iconSrc} alt={btn.text} />{" "}
                <span className="ml-2">{btn.text}</span>
              </div>
            </ButtonTemplate>
          </Link>
        )
      )}
    </div>
  );
}
