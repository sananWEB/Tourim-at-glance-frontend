import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaAddressBook,
  FaUser,
  FaRegAddressBook,
  FaAddressCard,
} from "react-icons/fa";
import "../Styles/AgencyDetails.css";

const AgencyDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex flex-col gap-4 font-bold text-gray-600 h-96 w-96 border-2 m-4 p-3">
      <p className="flex gap-2 cursor-pointer">
        <FaUser />
        {state.name1}
      </p>
      <a href="mailto:info@example.com?subject=subject&cc=cc@example.com">
        <p className="flex gap-2 cursor-pointer">
          <FaEnvelope />
          {state.email}
        </p>
      </a>
      <a href={`tel:${state.number}`}>
        <p className="flex gap-2 cursor-pointer">
          <FaPhone />
          {state.number}
        </p>
      </a>
      <p className="cursor-pointer">
        <FaAddressCard />
        {state.about}
      </p>
    </div>
  );
};

export default AgencyDetails;
