import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

function Notification({ notification }) {
  const loading = useSelector(
    (state) => state.notification.notificationLoading
  );
  const activity = useSelector((state) => state.notification.notification);

  return (
    <div
      className={`w-full h-96 mb-2 font-medium text-gray-3 bg-bg-card overflow-y-scroll rounded ${
        notification
          ? "transition-all duration-300 opacity-100 block"
          : "transition-all duration-300 opacity-0 hidden"
      }`}
    >
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          {activity.length === 0 ? (
            <>
              <p className="w-full text-center text-xl font-bold text-gray-400 mt-10">
                No notification to show
              </p>
            </>
          ) : (
            <>
              {activity.map((a) => {
                return (
                  <div className="border-b-3 border-white text-sm p-3 leading-snug rounded-lg text-gray-2">
                    {a.activityDetails}
                    <div className="text-xs font-bold text-right mt-1">
                      {new Date(a.createdAt).toLocaleDateString("en-GB")}{" "}
                      <span className="">
                        {new Date(a.createdAt).toLocaleTimeString(`en-US`, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Notification;
