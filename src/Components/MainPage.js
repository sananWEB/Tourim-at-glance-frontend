import React from "react";

import "../Styles/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage__container  h-screen w-screen bg-cover bg-blend-overlay">
      <div className="flex justify-center items-center h-44">
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-t from-white to-yellow-500 capitalize tracking-wider text-4xl font-bold">
          Life's too short for boring experiences.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
