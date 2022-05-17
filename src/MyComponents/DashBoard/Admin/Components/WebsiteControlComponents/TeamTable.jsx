import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../../api";
import {
  deleteTeam,
  setupdateteam,
} from "../../../../../context/actions/adminActions/teamAction";
import Loader from "react-loader-spinner";

export const TeamTable = () => {
  const teamMember = useSelector((state) => state.team.team);
  const loading = useSelector((state) => state.team.loading);
  const deleteloading = useSelector((state) => state.team.deleteloading);
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      {/* Card of table */}
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {" "}
          {teamMember.map((team) => {
            return (
              <div
                key={team._id}
                className="flex flex-col md:flex-row border-2 text-lg items-center"
              >
                <div className="flex flex-col items-center text-center w-full md:w-2/12">
                  <img
                    src={
                      `${API}/team/get-photo/${team._id}?` +
                      new Date().getTime()
                    }
                    alt=""
                    className="w-24 h-24 rounded-full p-1 "
                  />
                  <h1 className="px-3 text-red-1 font-bold">{team.name}</h1>
                  <h1 className="px-3  leading-tight">{team.role}</h1>
                </div>
                <h1 className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
                  {team.description}
                </h1>
                <div className="flex flex-col items-center mx-auto">
                  <div className="flex flex-col items-center mx-auto">
                    <button
                      onClick={() => {
                        dispatch(deleteTeam(team._id));
                        setDeleteId(team._id);
                      }}
                      className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
                    >
                      {deleteloading && deleteId === team._id ? (
                        <div className="w-full flex items-center justify-center">
                          <Loader
                            type="ThreeDots"
                            color="white"
                            height={30}
                            width={30}
                          />
                        </div>
                      ) : (
                        "Delete"
                      )}
                    </button>
                    <button
                      onClick={() => {
                        dispatch(setupdateteam({ state: true, data: team }));
                      }}
                      className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-blue-400 hover:bg-blue-100 hover:border-blue-400"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
