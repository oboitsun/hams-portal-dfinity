import React from "react";
import "./ham-card.scss";
// {
//     name: "Fish Man #29",
//     imgSrc: "assets/nfts/fishman.png",
//     type: {
//       value: "fishman",
//       label: "Fish Man",
//     },
//     background: {
//       value: "creepy",
//       label: "Creepy Corridor",
//     },
//     rarity: {
//       tier: 4,
//       label: "common",
//     },
//     price: 1, //might be a problem if it will be a bigNum
//   },
export default function MyHamCard({ ham, isMarketplace = false }) {
  const backs = { creepy: "assets/nfts/creepy.png", house: "assets/nfts/house.png" };
  return (
    <div className={`ham-card ${ham.rarity.label}`}>
      <div className="w-full relative">
        <img className="ham-nft-pic" src={ham.imgSrc} alt={ham.name} />
        {ham.background?.value && (
          <img
            className="absolute w-full h-full object-cover abs-centering"
            src={backs[ham.background.value]}
            alt={ham.background.label}
          />
        )}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col ">
          <p className="ham-name">{ham.name}</p>
          <p className="nft-back-name">{ham.background.label}</p>
        </div>
      </div>
    </div>
  );
}
