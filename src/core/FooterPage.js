import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
  return (
    <MDBFooter className="page-footer font-small lighten-5 pt-0">
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-500">
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <Link className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-1 mr-lg-4"> </i>
              </Link>
              <Link className="tw-ic">
                <i className="fab fa-twitter white-text mr-1  mr-lg-4"> </i>
              </Link>
              <Link className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-1 mr-lg-4">
                  {" "}
                </i>
              </Link>
              <Link className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-1 mr-lg-4"> </i>
              </Link>
              <Link className="ins-ic">
                <i className="fab fa-instagram white-text mr-1 mr-lg-4"> </i>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="font-weight-bold">Tourism at Glance</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p className="text-justify">
              A Solution that activates the travelling bug with vibrant imagery
              and working on to continuously provides enjoyable quality
              excursions/trips on time and on budget.We Focus on developing
              enthusiastically satisfied customers all of the time.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Services</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <Link to="/shop" className="dark-grey-text">
                Places
              </Link>
            </p>
            <p>
              <Link to="/gallery" className="dark-grey-text">
                Gallery
              </Link>
            </p>
            
            <p>
              <Link to="/about" className="dark-grey-text">
                About Us
              </Link>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <Link to="./../user/dashboard" className="dark-grey-text">
                Your Account
              </Link>
            </p>
            <p>
              <Link to="/cart" className="dark-grey-text">
                Wishlist
              </Link>
            </p>
            <p>
              {/* <Link to="/contact" className="dark-grey-text">
                Contact Us
              </Link> */}
            </p>
           
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Peshawar, Hayatabad 25000, Pakistan
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@alamkhan.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 923157443446
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 923157564481
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 py-5 text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href=""> www.alamkhan.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
