import React, { useDebugValue, useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  
  const [currentPage, setCurrenPage] = useState(1)
  
  const {pages, residentsInPage} = paginationLogic(currentPage, residents)

  useEffect(() =>{
    setCurrenPage(1)
  }, [residents])

  return (
    <section>
    <section className="grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
      {residentsInPage.map((resident) => (
        <ResidentCard key={resident} residentEndpoint={resident} />
      ))}
    </section>

    {/*Paginacion*/}
        <ul className="text-leg flex gap-3 justify-center flex-wrap">
          {
            pages.map((page) =>(
              <li key={page}>
                <button className={`bg-white text-black p-2 ${page === currentPage && "bg-green-300"} mb-4 rounded-lg`} onClick={() => setCurrenPage(page)}>
                  {page}
                </button>
              </li>
            ))
          }
        </ul>
    </section>
  );
};

export default ResidentList;
