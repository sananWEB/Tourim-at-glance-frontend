import React from "react";
import Slider from "react-slick";
import "../Styles/ImageSlider.css";
import { data } from "../ConfigFile/Config";

const ImageSlider = () => {
  let settings = {
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="image__slider">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <>
                <img src={item.img} alt="image" />
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
