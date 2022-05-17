// Author @Manas

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Alert({ alert, rmAlert }) {
  setTimeout(() => {
    rmAlert({
      show: false,
      message: "",
      success: false,
    });
  }, 3500);
  return (
    <div className="px-1 mb-3 w-full">
      <div
        className={
          !alert.success
            ? " bg-red-1 border-l-4 border-red-1 text-red-1 p-2 w-full bg-opacity-10"
            : "bg-green-1 border-l-4  border-green-1 text-green-1 p-2 w-full bg-opacity-10"
        }
        role="alert"
      >
        {" "}
        {/*If Success Green Use Green Items Otherwise Red Items*/}
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <p className="font-bold">{alert.success ? "Success" : "Error"}</p>
            <p>{alert.message}</p>
          </div>
          <button
            onClick={() =>
              rmAlert({
                show: false,
                message: "",
                success: false,
              })
            }
            className="pl-3"
          >
            {" "}
            {/*Close Button*/}
            <FontAwesomeIcon icon="window-close" className="text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
}
