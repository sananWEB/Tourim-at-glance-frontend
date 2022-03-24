import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "../Styles/Carasaoul.css";
import FeaturesCard from "./FeaturesCard";
import { API } from "../config";
import moment from "moment";
import { Link } from "react-router-dom";

const FeaturesCarasoul = ({ productsByArrival }) => {
  //   const settings = {
  //     // fade: true,
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     swipe: true,
  //     fade: true,
  //   };
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // dots: true,
    // infinite: false,
    // // speed: 500,
    // speed: 2000,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carasoul__gallary">
        <Slider {...settings}>
          {productsByArrival.map((item) => {
            return (
              <Link to={{ pathname: "/tripDetails", state: item }}>
                <FeaturesCard
                  img={`${API}/${"product"}/photo/${item._id}`}
                  title={item.name}
                  subname={item.subname}
                  days={item.days}
                  subTitle={item.shipping}
                  price={item.price}
                  data={moment(item.createdAt).fromNow()}
                  // item.createdAt
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default FeaturesCarasoul;
