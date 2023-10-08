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
        <img src={resident?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-2 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
                characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div>
        <h4>{resident?.name}</h4>
        <ul>
          <li>
            <span>Species</span> {resident?.species}
          </li>
          <li>
            <span>Origin</span> {resident?.origin.name}
          </li>
          <li>
            <span>Times appear</span> {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ResidentCard;
