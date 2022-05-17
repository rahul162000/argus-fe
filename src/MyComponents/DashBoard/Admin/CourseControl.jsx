import React from "react";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";


export default function Home() {
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full md:w-10/12 bg-gray-1 flex flex-col-reverse md:flex-row">
        <div className="w-8/12">

          <div className="flex flex-col md:flex-row">
            <div className="w-6/12 px-4">
                
            </div>
                <div className="w-6/12">
                </div>
            </div>
        </div>

        <div className="w-full md:w-4/12 bg-white">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
