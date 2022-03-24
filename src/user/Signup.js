import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";
// import "./../CSS/signup.css";
import towerimage from "./../image/signup/bg2.jpeg";
import "../Styles/SignUp.css";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    console.log(values)
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <div className="signup__container">
      <div id="signup-form-intro2" className="signup__main">
        <h2 className="my-2 p-2 text-white font-bold text-center text-3xl border-bottom">
          Signup
        </h2>
        <form className="signup__form">
          <div className="flex flex-col">
            <label className="text-white font-bold">Name</label>
            <input onChange={handleChange("name")} type="text" value={name} />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-bold">Email</label>
            <input
              onChange={handleChange("email")}
              type="email"
              value={email}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-bold">Password</label>
            <input
              onChange={handleChange("password")}
              type="password"
              value={password}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-bold">Password again</label>
            <input type="password" />
          </div>
          <button onClick={clickSubmit} className="signup__btn">
            Submit
          </button>
          <div className="text-center py-3 my-2">
            <span className="text-white">Already have an Account ? &nbsp;</span>
            <Link
              to="/signin"
              className="text-yellow-500 hover:text-white font-bold"
            >
              Signin
            </Link>
          </div>
        </form>
      </div>
      {/* <div className="col-xs-12 col-sm-6 col-md-5 rounded-right my-3 shadow-lg" id="signup-intro">
                <h2 className="text-white text-center my-3 p-2 h2">Welcome to TravelYaari</h2>
                <p className="text-center text-warning py-2">We Are Happy to see you here. We are working to provide the best services to you.</p>
                <img className="img-fluid rounded" src={towerimage} alt="signup" />
                <div>
                    <p className="text-center text-light py-1">By Signin, you Agree to our terms and Services. </p>
                </div>
                <p className="h5 text-center text-white py-1 my-1 font-bold">Let's Explore the World !!!!</p>

            </div> */}
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger mt-3"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info mt-3"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
