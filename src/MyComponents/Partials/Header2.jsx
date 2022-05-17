import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header2 extends Component {
  Header;

  render() {
    return (
      <div className="hidden lg:block px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 text-sm -mb-16 font-for-para z-10">
        <nav class="flex flex-wrap items-center text-base font-bold font-for-para">
          <Link
            to="/about"
            className="w-1/5 text-white py-4 text-center bg-black bg-opacity-40 hover:bg-red-1 hover:bg-opacity-60"
          >
            ABOUT
          </Link>

          <Link
            to="/services"
            className="w-1/5 text-white py-4 text-center bg-black bg-opacity-40 hover:bg-red-1 hover:bg-opacity-60"
          >
            SERVICES
          </Link>

          <Link
            to="/jobs"
            className="w-1/5 text-white py-4 text-center bg-black bg-opacity-40 hover:bg-red-1 hover:bg-opacity-60"
          >
            JOBS
          </Link>

          <Link
            to="/courses"
            className="w-1/5 text-white py-4 text-center bg-black bg-opacity-40 hover:bg-red-1 hover:bg-opacity-60"
          >
            COURSES
          </Link>

          <Link
            to="/contact"
            className="w-1/5 text-white py-4 text-center bg-black bg-opacity-40 hover:bg-red-1 hover:bg-opacity-60"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header2;
