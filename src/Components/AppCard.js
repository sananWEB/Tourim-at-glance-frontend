import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/Card.css";
const AppCard = ({
  title,
  img,
  subTitle,
  price,
  catagory,
  detailHandler,
  OrderHandler,
}) => {
  // const Navigation = useNavigate();
  return (
    <div className="appCard">
      <img src={img} alt={title} className="appCard__img" />
      <div className="card__info">
        <p className="text-orange-700 font-bold capitalize">{title}</p>
        <p className="text-gray-500">{subTitle}</p>
        <p className="text-gray-500 font-bold">${price}</p>
        <div className="card__btn">
          <button className="card__order">Order Now</button>
          <Link to="/TripDetails" state={detailHandler}>
            <button
              className="card__details"
              // onClick={() => Navigation("/TripDetails", { state: detailHandler })}
            >
              More Details
            </button>
          </Link>
        </div>
        <div className="card__bottom">
          <p className="font-bold text-gray-700">Ratings : 4.3</p>
          <p className="font-bold text-gray-900 capitalize">{catagory}</p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
