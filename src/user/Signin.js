import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import LoadingOverlay from "react-loading-overlay";
import avatar from "./../image/login/avatar.png";
import sideimage from "./../image/login/side.jpg";
// import "./../CSS/signin.css";
import { FaTimes } from "react-icons/fa";
import "../Styles/SignIn.css";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signUpForm = () => (
    <div className="signin__container">
      <div className="signin__form" id="login-intro-form">
        <h2 className="text-center text-white h2 font-weight-bold mt-2">
          Hello Travellers
        </h2>
        <img className="rounded-circle mx-auto d-block" src={avatar} alt="" />
        <form className="p-3">
          <div className="flex flex-col my-3">
            <label className="text-white font-bold">Email</label>
            <input
              onChange={handleChange("email")}
              type="email"
              value={email}
            />
          </div>

          <div className="flex flex-col my-3">
            <label className="text-white font-weight-bold">Password</label>
            <input
              onChange={handleChange("password")}
              type="password"
              value={password}
            />
          </div>
          <button onClick={clickSubmit} className="signin__btn">
            Submit
          </button>
        </form>
        <div className="text-center">
          <span className="text-center d-block text-danger font-weight-bold text-italic">
            or
          </span>
          <Link
            to="/signup"
            className="text-yellow-400 hover:text-white font-bold "
          >
            Create an account
          </Link>
        </div>
      </div>
      {/* <div
        className="col-sm-8 col-xs-10 col-md-4 rounded-right py-4 px-3"
        id="login-intro"
      >
        <h2 className="login-login-title text-center mt-2 h2">
          Welcome toTravelYaari
        </h2>
        <img className="img-fluid img-rounded" src={sideimage} alt="signup" />
        <p className="text-center text-warning">
          We Are Happy to see you here. We are working to provide the best
          services to you.
        </p>
      </div> */}
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      // <div className="alert alert-info">
      //     <h2>Loading...</h2>
      // </div>
      <LoadingOverlay
        active={loading}
        spinner
        text="Loading......"
        className="loader"
      ></LoadingOverlay>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        // return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout className="container-fluid">
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
