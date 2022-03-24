import React from "react";

import "../Styles/AppIcons.css";
const AppIcons = ({ title, icon, subTitle }) => {
  return (
    <div className="icon__container">
      <span className="icon__name">{icon}</span>
      <div className="icon__subcontainer">
        <p>{title}</p>
        <p1>{subTitle}</p1>
      </div>
    </div>
  );
};

export default AppIcons;
