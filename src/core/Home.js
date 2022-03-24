import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import Corosal from "./Corosal";
import HomeIcon from "./HomeIcon";
import Gallery from "./GalleryimgHome";
import MainPage from "../Components/MainPage";
import ImagesCarasol from "../Components/ImagesCarasol";
import FeaturesCarasoul from "../Components/FeaturesCarasoul";
import ImageSlider from "../Components/ImageSlider";
import ClassTrips from "../Components/ClassTrips";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  /* eslint-disable no-unused-vars */
  const [error, setError] = useState(false);
  const loadProductsBySell = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
        console.log(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="" description="" className="container-fluid m-0 p-0">
      {/* <Corosal /> */}
      <MainPage />
      {/* <Search /> */}
      <HomeIcon />
      <div className="pt-3">
        <h2 className="text-center h2 mt-3 mb-3" id="home-popularplace">
          <span style={{ color: "orange" }}>Popular </span>Places
        </h2>
        <ImagesCarasol productsBySell={productsBySell} />
        {/* <div className="row">
          {productsBySell.map((product, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-6  mb-3">
              <Card product={product} />
            </div>
          ))}
        </div> */}
        <h2 className="text-center h2 mt-3 mb-3">
          <span style={{ color: "orange" }}>New </span>Places
        </h2>
        <FeaturesCarasoul productsByArrival={productsByArrival} />
        {/* <div className="row">
          {productsByArrival.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-3 col-sm-6 col-xs-12 offset-xs-2 mb-3"
            >
              <Card product={product} />
            </div>
          ))}
        </div> */}
        <h2 className="text-center h2 mt-3 mb-3">
          <span style={{ color: "orange" }}>Class </span>Trips
        </h2>
        <ClassTrips productsByArrival={productsByArrival} />
      </div>
      <h2 className="text-center h2 mt-3 mb-3">
        <span style={{ color: "orange" }}>Most Visited </span>Places
      </h2>
      <FeaturesCarasoul productsByArrival={productsByArrival} />
      <h2
        className="mb-3 p-3 text-center text-yellow-700 font-weight-bold h2"
        id="homegallery"
      >
        Few Places
      </h2>
      <ImageSlider />
      <div className="mb-6"></div>
      {/* <Gallery /> */}
    </Layout>
  );
};

export default Home;
