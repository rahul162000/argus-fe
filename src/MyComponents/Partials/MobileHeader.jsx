import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../argus website/SVG/Logowith shadow.svg";
import Hamburger from "./Hamburger";

export default function MobileHeader({ open, setOpen }) {
  return (
    <div className="">
      <div className="w-full shadow-button-shadow fixed top-0 z-50 ">
        <div className=" h-16 lg:hidden bg-red-1 flex flex-row justify-between items-center bg-no-repeat bg-header-bg bg-center bg-cover bg-blend-multiply">
          <Link to="/">
            <img
              src={logo}
              alt="Logo of Argus Security"
              className="w-32 mx-4 my-3 fixed top-1 left-0 z-50"
            />
          </Link>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <div className="py-8 lg:hidden"></div>
    </div>
  );
}
