import React from "react";
import AppIcons from "../Components/AppIcons";
import "./../CSS/HomeIcon.css";

import { FaPlane, FaMapMarker, FaShopware } from "react-icons/fa";

const iconsData = [
  {
    id: 1,
    name: <FaPlane />,
    title: "Fly Low Price",
    subTitle: "Dream,Explore,Discover",
  },
  {
    id: 2,
    name: <FaMapMarker />,
    title: "Pick Where",
    subTitle: "Feed Your WonderLust",
  },
  {
    id: 3,
    name: <FaShopware />,
    title: "Travel Shop",
    subTitle: "Answer it Royally",
  },
];

const HomeIcon = () => {
  return (
    <div className="flex flex-wrap justify-evenly my-10 gap-10">
      {iconsData.map((it) => {
        return (
          <AppIcons
            key={it.id}
            icon={it.name}
            title={it.title}
            subTitle={it.subTitle}
          />
        );
      })}
    </div>
  );
  //   return (
  // <section className="mb-3 pb-5 pt-5" style={{ background: "#ebeae8" }}>
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-sm-12 col-md-4 mb-2">
  //         <div className="card-body text-center homeicon-shadow rounded bg-white">
  //           <i className="fa fa-map-marker" aria-hidden="true"></i>
  //           <h2 className="h2  m-2 cursor-pointer">Pick Where</h2>
  //           <p className="cursor-pointer">Feed your wanderlust.</p>
  //         </div>
  //       </div>
  //       <div className="col-sm-12 col-md-4 mb-2">
  //         <div className="card-body text-center homeicon-shadow rounded bg-white">
  //           <i className="fa fa-building" aria-hidden="true"></i>
  //           <h4 className="h2  m-2">Travel Shop</h4>
  //           <p>Answer it Royally.</p>
  //         </div>
  //       </div>
  //       <div className="col-sm-12 col-md-4 mb-2">
  //         <div className="card-body text-center homeicon-shadow rounded bg-white">
  //           <i class="fa fa-plane" aria-hidden="true"></i>
  //           <h4 className="h2  m-2">Fly Cheap</h4>
  //           <p>Dream. Explore. Discover.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>

  //   );
};
export default HomeIcon;
