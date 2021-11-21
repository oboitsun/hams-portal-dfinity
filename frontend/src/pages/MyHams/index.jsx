import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonTemplate from "../../components/ButtonTemplate";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./my-hams.scss";
import { hams } from "./db";
import MyHamCard from "../../components/MyHamCard/MyHamCard";
import Pagination from "../../components/Pagination";
export default function MyHams() {
  const btn = {
    href: "/marketplace",
    text: "Marketplace",
    iconSrc: "assets/navigation-icons/marketplace.svg",
    color: "#ABA6A5",
    strokeColor: "#635e5d",
    textColor: "marketplace",
  };
  const [page, setPage] = useState(1);
  const perPage = 12;
  const paginated = hams.slice(page * perPage - perPage, page * perPage);
  return (
    <div id="my-hams" className="">
      <div className="hams-grid mb-10">
        <SectionHeaderBackNav pageName="My Hamsters" />
        <div></div>
        <div></div>
        <a href="https://entrepot.app/marketplace/hauntedhamsters">
          <ButtonTemplate color={btn.color} strokeColor={btn.strokeColor}>
            <div className={` button-text-container ${btn.textColor}`}>
              <img src={btn.iconSrc} alt={btn.text} />{" "}
              <span className="ml-2 relative z-10 text-[#635E5D]">{btn.text}</span>
            </div>
          </ButtonTemplate>
        </a>
      </div>
      <div className="hams-grid">
        {paginated.map((ham, i) => (
          <MyHamCard key={i} ham={ham} />
        ))}
      </div>
      <div className="flex">
        <Pagination
          perPage={perPage}
          total={hams.length}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}
