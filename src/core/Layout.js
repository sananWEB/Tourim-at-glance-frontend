import React from "react";
import Menu from "./Menu";
import Footer from "./FooterPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./../CSS/menu.css";
import NavbarMenu from "../Components/NavbarMenu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    {/* <Menu /> */}
    {/* <NavbarMenu /> */}
    <div className={className}>{children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
