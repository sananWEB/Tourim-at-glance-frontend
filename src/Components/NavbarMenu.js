import React, { useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";

import { FaTimes, FaBars, FaTree, FaArrowDown } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import { itemTotal } from "../core/cartHelpers";

import "../Styles/NavbarMenu.css";
// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#ff9900" };
//   } else {
//     return { color: "black" };
//   }
// };

const NavbarMenu = ({ history }) => {
  const [Icon, setIcon] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const [DropDown2, setDropDown2] = useState(false);
  return (
    <nav className="navbar__nav">
      <div className="navbar__icons">
        <span className="navbar__toggle" onClick={() => setIcon(!Icon)}>
          {Icon ? (
            <FaBars className="navbar__bar" />
          ) : (
            <FaTimes className="navbar__bar" />
          )}
        </span>
        <Link
          to="/"
          className="text-4xl text-green-800  hover:bg-green-800 rounded-xl hover:text-white"
        >
          <FaTree />
        </Link>
      </div>
      {/* Section for items */}

      <ul
        className={Icon ? "navbar__menu active" : "navbar__menu"}
        // onClick={() => setIcon(!Icon)}
      >
        {!isAuthenticated() && (
          <div className="navbar__trips" onClick={() => setDropDown(!DropDown)}>
            <Link className="navbar__items">
              <span className="flex items-center">
                Trips
                <FaArrowDown />
              </span>
            </Link>
            {DropDown ? (
              <div className="navbar__showtrips">
                <li className="trip__items" onClick={(e) => setIcon(!Icon)}>
                  <Link to="/local" className=" ">
                    Local Trips
                  </Link>
                </li>

                <li className="trip__items" onClick={(e) => setIcon(!Icon)}>
                  <Link to="/international" className=" ">
                    International
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        {isAuthenticated() && (
          <div className="navbar__trips" onClick={() => setDropDown(!DropDown)}>
            <Link className="navbar__items">
              <span className="flex items-center">
                Trips
                <FaArrowDown />
              </span>
            </Link>
            {DropDown ? (
              <div className="navbar__showtrips">
                <li className="trip__items" onClick={(e) => setIcon(!Icon)}>
                  <Link to="/local" className=" ">
                    Local Trips
                  </Link>
                </li>

                <li className="trip__items" onClick={(e) => setIcon(!Icon)}>
                  <Link to="/international" className=" ">
                    International
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        {/* {isAuthenticated() && (
          <li className="navbar__items">
            <Link className="navbar__items" to="/Shop">
              All places
            </Link>
          </li>
        )}

        {isAuthenticated() && (
          <li className="navbar__items">
            <Link className="navbar__items" to="/Gallery">
              Gallery
            </Link>
          </li>
        )} */}

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="navbar__items" onClick={() => setIcon(!Icon)}>
            <Link to="/user/dashboard">Dashboard</Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="navbar__items" onClick={() => setIcon(!Icon)}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
        )}

        {!isAuthenticated() && (
          <>
            <li className="navbar__items" onClick={() => setIcon(!Icon)}>
              <Link to="/signin">Signin</Link>
            </li>

            <li className="navbar__items" onClick={() => setIcon(!Icon)}>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        <li className="navbar__items" onClick={() => setIcon(!Icon)}>
          <Link to="/cart">
            Added Place{" "}
            <sup>
              <small className="cart-badge">{itemTotal()}</small>
            </sup>
          </Link>
        </li>
        <li className="navbar__items" onClick={() => setIcon(!Icon)}>
          <Link to="/agency">Agencies</Link>
        </li>
        {isAuthenticated() && (
          <li className="navbar__items" onClick={() => setIcon(!Icon)}>
            <span
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              Signout
            </span>
          </li>
        )}
        {/* {isAuthenticated() && (
          <li
            className="navbar__items"
            onClick={(e) => setDropDown2(!DropDown2)}
          >
            <span className="navbar__show">
              More <FaArrowDown />
            </span>
            {DropDown2 ? (
              <div className="navbar__dropdown">
                <Link
                  to="/about"
                  className="dropdown__option"
                  onClick={(e) => setIcon(!Icon)}
                >
                  About us
                </Link>
                <Link
                  to="/team"
                  className="dropdown__option"
                  onClick={(e) => setIcon(!Icon)}
                >
                  Our Team
                </Link>
                <Link
                  to="/contact"
                  className="dropdown__option"
                  onClick={(e) => setIcon(!Icon)}
                >
                  Contact us
                </Link>
              </div>
            ) : (
              ""
            )}
      
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default withRouter(NavbarMenu);
