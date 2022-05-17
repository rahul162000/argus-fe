import React, { useEffect, useState } from "react";
import Profile from "../../../../../../argus website/PNG/IMG_0118.png";
import SideNav from "../../SideNav";
import ProfileBar from "../../ProfileBar";
import { useParams } from "react-router";
import axiosInstance from "../../../../../../helpers/axiosInstance";
import Loader from "react-loader-spinner";
import { docsName } from "../../../../Student/DocsData";
import ShowDoc from "./ShowDoc";
import { CircularProgress } from "@mui/material";
import PersonalDetails from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/PersonalDetailsAdmin";
import Tasks from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/TasksAdmin";
import BackgroundDetails from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/BackgroundDetailsAdmin";
import JobHistory from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/JobHistoryAdmin";
import ContactDetails from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/ContactDetailsAdmin";
import JobSearch from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/JobSearchAdmin";
import AddJobHistory from "../../../../Admin/Components/LMS/Form/StudentProfileUpdate/AddJobHistoryAdmin";

// import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
// import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

export default function StudentProfleLookup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [refreshData, setRefreshData] = useState(null);

  const token = JSON.parse(localStorage.getItem("jwt"));
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/user/getUserAdmin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [refreshData, id, token]);

  const blockunblock = (e) => {
    e.preventDefault();
    axiosInstance
      .put(
        `/user/block`,
        { userId: user?._id, block: !user?.blocked },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setRefreshData(res);
      })
      .catch((err) => {
        setRefreshData(err);
      });
  };

  return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <AddJobHistory
        show={show}
        setShow={setShow}
        user={user}
        setRefreshData={setRefreshData}
      />

      <div className="w-36 md:w-56 lg:w-60 xl:w-64 bg-red-1">
        <SideNav />
      </div>
      <div className="w-9/12 sm:w-10/12">
        <ProfileBar />
        <div className="bg-white px-4 pb-10 shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto mt-36 md:mt-0 md:my-16 rounded-2xl mb-20">
          {/* <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        COURSE
      </h1> */}
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
            </div>
          ) : (
            <>
              {!user ? (
                <p className="w-full text-center text-xl font-bold text-gray-400">
                  No user
                </p>
              ) : (
                <>
                  <div className="mx-4 md:mx-8 my-4 p-2 md:p-4 flex flex-col md:flex-row items-center justify-between text-gray-3">
                    <div className="flex items-center flex-col md:flex-row">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/user/profilePhoto/${user._id}`}
                        className="rounded-full w-20 h-20"
                        alt=""
                      />
                      <h1 className="text-3xl font-bold p-2 md:p-4">
                        {user.name ? user.name : null}
                        {user.lastname ? user.lastname : null}
                      </h1>
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-3xl font-bold pr-4">
                        {user.docId ? user.docId : null}
                      </h1>

                      <button
                        onClick={(e) => {
                          blockunblock(e);
                        }}
                        className={`${
                          user?.blocked
                            ? "bg-green-1 border-green-1 hover:text-green-1"
                            : "bg-red-1 border-red-1 hover:text-red-1"
                        } w-max mx-auto my-4 text-lg lg:text-2xl p-2 text-white font-bold hover:bg-white border-4   border-double  rounded-lg hover:shadow-button-inner`}
                      >
                        {user?.blocked ? "UNBLOCK" : "BLOCK"}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <PersonalDetails
                      user={user}
                      setRefreshData={setRefreshData}
                    />
                    <Tasks user={user} />
                    <BackgroundDetails
                      user={user}
                      setRefreshData={setRefreshData}
                    />
                    <JobHistory
                      user={user}
                      setShow={setShow}
                      setRefreshData={setRefreshData}
                    />
                    <ContactDetails
                      user={user}
                      setRefreshData={setRefreshData}
                    />
                    <JobSearch user={user} setRefreshData={setRefreshData} />
                    <Documents id={id} />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const Documents = ({ id }) => {
  const [docs, setDocs] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    setLoading(true);
    axiosInstance
      .get(`/docs2/getUserDocsAdmin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setDocs(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [refresh, id]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        DOCUMENTS
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loader type="TailSpin" color="#BA0913" height={60} width={60} />
        </div>
      ) : (
        <>
          <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
            <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Document
            </h1>
            <h1 className="text-center w-full lg:w-5/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Description
            </h1>
            <h1 className="text-center w-full lg:w-4/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
              Status
            </h1>
          </div>
          {docsName.map((docName, index) => {
            let doc = docs.filter((d) => d.name === docName)[0];
            return (
              <>
                {doc ? (
                  doc.isApproved === null ? (
                    <DocsListItem
                      status="Pending"
                      note={""}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  ) : doc.isApproved ? (
                    <DocsListItem
                      status="Approved"
                      note={doc?.note}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  ) : (
                    <DocsListItem
                      status="Disapproved"
                      note={doc?.note}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  )
                ) : (
                  <DocsListItem
                    status="Not Uploaded"
                    note={""}
                    docName={docName}
                    index={index}
                    refresh={setRefresh}
                    doc={doc}
                  />
                )}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

const DocsListItem = ({ status, note, docName, index, refresh, doc }) => {
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

  // const upload = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const token = JSON.parse(localStorage.getItem('jwt'));
  //   const formdata = new FormData();
  //   formdata.append('name', docName);
  //   formdata.append('image', img);
  //   axiosInstance
  //     .post(`/docs2/create`, formdata, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       refresh(res);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  // };

  // const reupload = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const token = JSON.parse(localStorage.getItem('jwt'));
  //   const formdata = new FormData();
  //   formdata.append('name', docName);
  //   formdata.append('image', img);
  //   axiosInstance
  //     .put(`/docs2/reUpload`, formdata, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       refresh(res);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  // };

  return (
    <div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <ShowDoc
          show={show}
          setShow={setShow}
          data={doc}
          refreshDoc={refresh}
        />
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
              {/* {status === 'Not Uploaded' || status === 'Disapproved' ? (
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
                          style={{ fontSize: '3rem', cursor: 'pointer' }}
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
                        style={{ height: '3rem', width: '3rem' }}
                      >
                        <ClearRoundedIcon
                          style={{
                            height: '2rem',
                            width: '2rem',
                            color: 'white',
                          }}
                        />
                      </IconButton>
                      <IconButton
                        onClick={(e) => {
                          if (status === 'Not Uploaded') {
                            upload(e);
                          } else if (status === 'Disapproved') {
                            reupload(e);
                          }
                        }}
                        style={{ height: '3rem', width: '3rem' }}
                      >
                        <DoneOutlineRoundedIcon
                          style={{
                            height: '2rem',
                            width: '2rem',
                            color: 'white',
                          }}
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : null} */}
            </>
          )}
        </div>
      </div>
      <div className="py-2.5"></div>
    </div>
  );
};
