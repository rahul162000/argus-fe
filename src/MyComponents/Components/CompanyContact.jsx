import React from "react";
import { useSelector } from "react-redux";
import phone_logo from "./../../argus website/SVG/3. Contact icon phone.svg";
import email_logo from "./../../argus website/SVG/1. Contact icon email.svg";
import location_logo from "./../../argus website/SVG/2. Contact icon location.svg";

const CompanyContact = () => {
  const contact = useSelector((state) => state.contact);

  return (
    <div className="">
    <a href={`tel:${contact.phoneNumber}`} className="flex flex-row items-center py-1">
       <img src={phone_logo} alt="Phone Logo" className="w-5"/>
        <p className="pl-5">{contact?.phoneNumber}</p>
    </a>
    <a href={`mailto:${contact.email}`} className="flex flex-row items-center py-1">
      <img src={email_logo} alt="Phone Logo" className="w-5"/>
      <p className="pl-5">{contact?.email}</p>
    </a>
    <div className="flex flex-row items-start py-1">
      <img src={location_logo} alt="Phone Logo" className="w-5"/>
      <p className="pl-5">{contact?.address}</p>
    </div>
  </div>
  );
};

export default CompanyContact;
