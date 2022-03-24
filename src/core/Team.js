import React from "react";
import Layout from "./Layout";
import Sarvesh from "./../image/desk.jpg";
import Satyam from "./../image/desk.jpg";
import Sachi from "./../image/desk.jpg";
import Sarveshbg from "./../image/team/img-top1.jpeg";
import Satyambg from "./../image/team/img-top2.jpeg";
import Sachibg from "./../image/team/img-top3.jpeg";
import "./../CSS/team.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Team() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className=" rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Sarveshbg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Sarvesh} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">alamkhan</h5>
                    <p className="card-text">
                      Data Science Enthusiastic & Web Developer
                    </p>
                    <div className="p-2">
                      <h6 className="text-yellow-600 border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-blue-700 text-center">
                          {" "}
                          Data Science
                        </li>
                        <li className="text-blue-700 text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          className="fab fa-github fa-2x text-yellow-600 "
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          class="fab fa-twitter fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-linkedin fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-medium fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className=" rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Sachibg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Sachi} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">shahidullah</h5>
                    <p className="card-text">Web Developer & java developer</p>
                    <div className="p-2">
                      <h6 className="text-yellow-600 border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-blue-700 text-center">
                          {" "}
                          MS office
                        </li>
                        <li className="text-blue-700 text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          className="fab fa-github fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          class="fab fa-twitter fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-linkedin fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-medium fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className=" rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Satyambg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src={Satyam} alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">um i habiba</h5>
                    <p className="card-text">Web Develope & Java Developer</p>
                    <div className="p-2">
                      <h6 className="text-yellow-600 border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-blue-700 text-center">JAVA</li>
                        <li className="text-blue-700 text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          className="fab fa-github fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        <i
                          class="fab fa-twitter fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-linkedin fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045126%7Ce%7Cfacebook%27%7C&placement=&creative=318307045126&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011084%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrBEbNNKH8UXhdtgHtfgEUFzokf2L6hiMHsX-hogEw3psVN_4QaOCXxoCqsYQAvD_BwE">
                        {" "}
                        <i
                          class="fab fa-medium fa-2x text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
