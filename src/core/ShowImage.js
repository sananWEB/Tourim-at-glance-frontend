import React, { useState } from "react";
import { API } from "../config";
import ModalVideo from "react-modal-video";

const ShowImage = ({ item, url }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="product-img">
      <div className="overflow-hidden h-72 mb-2">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={item.youtubelink}
          onClose={() => setOpen(false)}
        />
        {/* <button className="btn-primary">VIEW DEMO</button> */}
        <img
          src={`${API}/${url}/photo/${item._id}`}
          alt={item.name}
          className="h-72 w-full transform hover:scale-125 transition-all duration-300"
          onClick={() => setOpen(true)}
        />
      </div>
    </div>
  );
};

export default ShowImage;
