import React from "react";
import LastPage from "./LastPage";
import NextPage from "./NextPage";
import "./pagination.scss";
export default function Pagination({ total, perPage, currentPage, setCurrentPage }) {
  const lastPageIndex = Math.ceil(total / perPage);
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastpage = () => {
    setCurrentPage(lastPageIndex);
  };
  const goToPrevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goToNextPage = () =>
    currentPage < lastPageIndex && setCurrentPage((prev) => prev + 1);
  return (
    <div className="flex items-center gap-3 py-5 justify-center w-full pagination">
      <LastPage first onClick={goToFirstPage} />
      <NextPage prev onClick={goToPrevPage} />
      <p className="px-1">Page</p>
      <div className="page">{currentPage}</div>
      <p className="px-1">
        / <span className="ml-1">{lastPageIndex}</span>
      </p>
      <NextPage onClick={goToNextPage} />
      <LastPage go onClick={goToLastpage} />
    </div>
  );
}
