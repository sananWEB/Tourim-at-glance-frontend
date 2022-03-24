import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    // eslint-disable-next-line
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card my-5  bg-gradient-to-r from-yellow-500 to-yellow-700">
        <h4 className="card-header text-white">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Place
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/orders">
              View place Orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/products">
              Manage Places
            </Link>
          </li>
          
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card my-5  bg-gradient-to-r from-yellow-500 to-yellow-700">
        <h3 className="card-header text-white">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="w-72">{adminLinks()}</div>
        <div className="w-3/4">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
