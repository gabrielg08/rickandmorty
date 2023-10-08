import axios from "axios";
import React, { useEffect, useState } from "react";
import { characterStatus } from "../constants/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative">
        <img className="border border-green-500" src={resident?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-2 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
                characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border border-green-500">
        <h4 className="border border-b-2 border-slate-500 text-xl">{resident?.name}</h4>
        <ul>
          <li className="">
            <span className="text-slate-400 pl-2 pr-12">Species</span> {resident?.species}
          </li>
          <li>
            <span className="text-slate-400 pl-2 pr-14">Origin</span> {resident?.origin.name}
          </li>
          <li>
            <span className="text-slate-400 pl-2 pr-1">Times appear</span> {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ResidentCard;
