import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import ModalVideo from "react-modal-video";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import StarRating from "./StarRating";


import "../Styles/MainCard.css";

const Card = ({
  desc,
  days,
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="card__moreBtn" id="view-product">
            More Info!
          </button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="card__bookBtn" id="add-to-cart">
          Book Now!
        </button>
      )
    );
  };

  // const showStock = (shipping) => {
  //   return shipping == "local" ? (
  //     <span className="badge badge-success badge-pill">local</span>
  //   ) : (
  //     <span className="badge badge-success badge-pill">international</span>
  //   );
  // };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    <div className="border overflow-hidden rounded-2xl">
      <div className="card rounded-2xl overflow-hidden">
        <div className="view overlay">
          {shouldRedirect(redirect)}
          {/* <a href={product.youtubelink} data-toggle="lightbox" data-gallery="youtubevideos"> */}
          <ShowImage item={product} url="product" className="img-thumbnail" />
          <h5 className="ml-2 text-gray-700 h5 font-bold capitalize pb-2">
            {product.name}
          </h5>
        </div>
        <div class="card-body m-0 p-0">
          <div className="flex justify-between mx-2 mb-0">
            <h6 className="text-sm font-weight-bold capitalize">
              {product.subname}
            </h6>
            <StarRating />
          </div>
          <div className="mt-2 ">
            <p className=" my-2 px-2 text-gray-700">
              Price : PKR {product.price}
            </p>
            {days && <p className="px-2 ">{days} days planning</p>}
          </div>
        </div>
      </div>
      <div
        className="text-justify m-2 p-2"
        style={{ fontSize: "14px", fontWeight: "500" }}
      >
        <p classname="text-justify">{desc}</p>
        {showViewButton(showViewProductButton)}
        {showAddToCartBtn(showAddToCartButton)}
        {showRemoveButton(showRemoveProductButton)}
        {showCartUpdateOptions(cartUpdate)}
        {/* <div className="d-flex justify-content-around p-2 m-0">
          <div className="m-0 p-0 mx-1">{showStock(product.shipping)}</div>
          <p
            className=" text-warning mx-1"
            style={{ fontSize: "11px", fontWeight: "600" }}
          >
            Added on {moment(product.createdAt).fromNow()}
          </p>
          <p
            className="text-info mx-1"
            style={{ fontWeight: "600", fontSize: "0.7em" }}
          >
            <span>Category: </span>
            {product.category.name1 && product.category.name1}
          </p>
        </div> */}
        <p
          className="text-info mx-1"
          style={{ fontWeight: "600", fontSize: "0.7em" }}
        >
          {/* <span>Category: </span> */}
          {product.category.name1 && product.category.name1}
        </p>
      </div>
    </div>
  );
};

export default Card;
