import React from "react";
import { useLocation } from "react-router-dom";
import { API } from "../config";
import Card from "../core/Card";

import "../Styles/TripDetails.css";

const TripDetails = () => {
  const { state } = useLocation();
  const { name, subname, _id } = state;
  console.log("details of state", state);
  return (
    <div className="tripdetail__container">
      <Card
        desc={state.description.substring(0, 400)}
        product={state}
        days={state.days}
      />

      {/* <img
        src={`${API}/${"product"}/photo/${_id}`}
        alt={name}
        className="h-40 w-44"
      />
      <div className="tripdetail__infor">
        <h4>{name}</h4>
        <p>{subname}</p>
      </div> */}
    </div>
  );
};

export default TripDetails;
