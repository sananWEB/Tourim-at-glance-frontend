import React, { useEffect, useState } from "react";
import { API } from "../config";
import { GetAllData } from "./apiCore";
import "../Styles/LocalTrips.css";
import Card from "./Card";

import { FaSearchLocation } from "react-icons/fa";
const LocalTrips = () => {
  const [Trips, setTrips] = useState([
    {
      name: "loading",
    },
  ]);

  const allData = () => {
    GetAllData().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setTrips(data);
      }
    });
  };
  useEffect(() => {
    allData();
  }, []);
  const [Search, setSearch] = useState("");
  return (
    <>
      <div className="search__item">
        <input
          type="text"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearchLocation className="searchItem__search" />
      </div>
      <p className="trips__heading">local Trips</p>
      <div className="local__container">
        {Trips.filter((it) => it.shipping === "local")
          .filter((it) => {
            if (Search === "") return it;
            else if (
              it.subname
                .toLocaleLowerCase()
                .includes(Search.toLocaleLowerCase())
            ) {
              return it;
            }
          })
          .map((it) => {
            console.log(it.shipping);
            return (
              <div
                key={it._id}
                className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mb-3"
              >
                <Card product={it} />
              </div>
            );
            {
              /* <div className="local__card">
                <div className="overflow-hidden">
                  <img
                    src={`${API}/${"product"}/photo/${it._id}`}
                    alt={it.name}
                  />
                </div>
                <div className="local__card__details">
                  <p>{it.name}</p>
                  <p>{it.subname}</p>
                  <h1>{it.shipping}</h1>
                </div>
              </div> */
            }
          })}
      </div>
    </>
  );
};

export default LocalTrips;
