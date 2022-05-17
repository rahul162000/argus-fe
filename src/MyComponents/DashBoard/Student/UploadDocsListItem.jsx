import { IconButton } from "@mui/material";
import React, { useState } from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import axiosInstance from "../../../helpers/axiosInstance";
import CircularProgress from "@mui/material/CircularProgress";
import ShowDocStudent from "./ShowDocStudent";

const UploadDocsListItem = ({ status, note, docName, index, refresh, doc }) => {
  const color = {
    Approved: "bg-green-1",
    Disapproved: "bg-red-1",
    Pending: "bg-yellow-1",
    "Not Uploaded": "bg-gray-2",
  };

  const [img, setImg] = useState({
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const upload = (e) => {
    e.preventDefault();
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("jwt"));
    const formdata = new FormData();
    formdata.append("name", docName);
    formdata.append("image", img);
    axiosInstance
      .post(`/docs2/create`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        refresh(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const reupload = (e) => {
    e.preventDefault();
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("jwt"));
    const formdata = new FormData();
    formdata.append("name", docName);
    formdata.append("image", img);
    axiosInstance
      .put(`/docs2/reUpload`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        refresh(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <ShowDocStudent show={show} setShow={setShow} data={doc} />
        <div
          onClick={() => {
            if (!(status === "Not Uploaded")) {
              setShow(true);
            }
          }}
          className={`flex flow-col items-center cursor-pointer justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 font-bold ${
            status === "Not Uploaded"
              ? "cursor-not-allowed"
              : "hover:bg-red-1 hover:text-white cursor-pointer"
          }`}
        >
          <h1>{docName}</h1>
        </div>
        <h1 className="lg:w-5/12 px-3 py-3 text-gray-2 rounded-xl border-2  mx-1 my-1 lg:my-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          at natus aut delectus.
        </h1>
        <div
          className={`flex flow-col flex-col items-center justify-center text-center lg:w-4/12 px-3 py-3 rounded-xl border-2 mx-1 my-1 lg:my-0  text-white font-bold ${color[status]}`}
        >
          <h1>{status}</h1>
          <p className="text-left text-base">
            {doc?.note ? (doc?.note !== "" ? doc?.note : null) : null}
          </p>
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {status === "Not Uploaded" || status === "Disapproved" ? (
                <div className="flex items-center justify-center w-full">
                  <input
                    type="file"
                    id={`file${index}`}
                    hidden
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <label
                    htmlFor={`file${index}`}
                    className="flex items-center w-full justify-center"
                  >
                    {img.file === null ? (
                      <>
                        <FileUploadRoundedIcon
                          style={{ fontSize: "3rem", cursor: "pointer" }}
                        />
                      </>
                    ) : (
                      <p className="text-sm truncate w-3/4">{img.name}</p>
                    )}
                  </label>
                  {img.file !== null ? (
                    <div className="flex items-center">
                      <IconButton
                        onClick={() => setImg({ file: null })}
                        style={{ height: "3rem", width: "3rem" }}
                      >
                        <ClearRoundedIcon
                          style={{
                            height: "2rem",
                            width: "2rem",
                            color: "white",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        onClick={(e) => {
                          if (status === "Not Uploaded") {
                            upload(e);
                          } else if (status === "Disapproved") {
                            reupload(e);
                          }
                        }}
                        style={{ height: "3rem", width: "3rem" }}
                      >
                        <DoneOutlineRoundedIcon
                          style={{
                            height: "2rem",
                            width: "2rem",
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
      <div className="py-2.5"></div>
    </div>
  );
};

export default UploadDocsListItem;
