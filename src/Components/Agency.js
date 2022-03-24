import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import { getAgency, getProducts } from "../core/apiCore";
import "../Styles/Agency.css";

const Agency = () => {
  const [Agency, setAgency] = useState([]);

  const loadAgencyData = () => {
    getAgency("sort").then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(Agency);
        setAgency(data);
      }
    });
  };
  useEffect(() => {
    loadAgencyData();
  }, []);

  return (
    <>
      <h4 className="text-3xl font-bold text-black text-center my-3">
        All Agencies
      </h4>
      <div className="flex flex-col gap-24">
        {Agency.map((it) => {
          return (
            <Link
              to={{
                pathname: "/agencyDetails",
                state: it,
              }}
            >
              <div className="flex items-center justify-center h-32 gap-20 border-2 bg-gray-200">
                <p className="capitalize font-bold text-gray-600 tracking-wider text-xl hover:text-black">
                  Name : {it.name1}
                </p>

                <p className=" font-bold text-gray-600 tracking-wider text-xl hover:text-black">
                  Email : {it.email}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Agency;
