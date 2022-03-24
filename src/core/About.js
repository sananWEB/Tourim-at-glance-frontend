import React from "react";
import Layout from "./Layout";
import aboutimg from "./../image/about.png";
import { Link } from "react-router-dom";

export default function about() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-4 mb-2">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="rounded">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-gradient-to-r from-yellow-500 to-yellow-700">
                  <i class="fa fa-tree" aria-hidden="true"></i> WHO ARE WE
                </h5>
                <img src={aboutimg} class="img-thumbnail" alt="" />
                <div class="card-body m-0 p-0">
                  <p className="text-justify p-3">
                  Tourism at Glance is a pakistan Tourism website created by
                    CECOS university Students. It is the design to get place in
                    the top tourism website in Pakistan and all over the
                    World.Sanan Travelyaari started as a mini project, but
                    intended to become a major project.Sanan TravelYaari will
                    provide many tourism packages in upcoming years. TravelYaari
                    aim to have a website with different language support for
                    different regions of the country and also allowing booking
                    to places of different countries also. Most travel websites
                    charges international charges for certain booking when
                    opting internationally, but we aim to provide booking free
                    of any international charges across the globe without a
                    single penny. We also aim to have branches in many countries
                    and we shall provide facility of user interest as per their
                    needs. We aim to deal with the best hotels , motels and
                    lauge, so we provide quality services to our costumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="rounded">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-gradient-to-r from-yellow-500 to-yellow-700 text-uppercase">
                  <i class="fa fa-history" aria-hidden="true"></i> Our History
                </h5>
                <div class="card-body m-0 p-0 mt-2">
                  <a href="#" className="p-3 font-weight-bold text-warning">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> ---2020---
                  </a>
                  <p className="text-justify p-3">
                  Tourism at Glance is created by (Students
                    at CECOS university),credited with developing the predecessor to online
                    website. The motivation behind is Most travel websites
                    charges international charges for certain booking when
                    opting internationally, but we aim to provide booking free
                    of any international charges across the globe without a
                    single penny. We also aim to have branches in many countries
                    and we shall provide facility of user interest as per their
                    needs. We aim to deal with the best hotels , motels and
                    lauge, so we provide quality services to our costumers.
                    <br />
                    <a href="#" className="font-weight-bold text-yellow-500">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> ---
                      January 2022---
                    </a>
                    <br />
                    In the 2022, Tourism at Glance website get Deployed to various
                    platform including github pages and heroku <br />
                    <a href="#" className="font-weight-bold text-yellow-500">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> ---
                      2022---
                    </a>
                    <br />
                    In the 2022, Tourism at Glance website get itself developed by
                    MERN Stack & Deployed to various platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="rounded">
              <div className="card m-2 ">
                <h5 className="m-0 text-white font-weight-bold card-header bg-gradient-to-r from-yellow-500 to-yellow-700 text-uppercase">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Developers
                </h5>
                <div class="card-body m-0 p-0">
                  <ul className="list-group">
                    <li className="list-group-item text-yellow-500 h6 font-weight-bold">
                      alam khan
                    </li>
                    <li className="list-group-item text-yellow-500 h6 font-weight-bold">
                      shahidullah
                    </li>
                    <li className="list-group-item text-yellow-500 h6 font-weight-bold">
                      um i habiba
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
