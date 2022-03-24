import React from "react";

import { FaCalendar, FaMapMarker, FaPlane } from "react-icons/fa";
import "../Styles/FeaturesCard.css";

const FeaturesCard = ({ img, title, days, price, subTitle, data, subname }) => {
  return (
    <div className="features__container">
      <img src={img} alt={title} />
      <p className="text-gray-500 font-bold m-2">{subname}</p>
      <div className="feature__main">
        <div className="feature__left">
          <span>
            <FaPlane />
            <p>{days} Days Plane</p>
          </span>
          <span>
            <FaMapMarker />
            <p> {subTitle}</p>
          </span>
          <span>
            <FaCalendar />
            <p>
              {/* {new Date()} */}
              {data}
            </p>
          </span>
        </div>
        <div className="feature__right">
          <p>Pkr{price}</p>
          <p1>per Person</p1>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
