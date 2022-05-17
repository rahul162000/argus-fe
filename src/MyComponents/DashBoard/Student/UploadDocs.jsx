import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import axiosInstance from '../../../helpers/axiosInstance';
import { docsName } from './DocsData';
import UploadDocsListItem from './UploadDocsListItem';

const UploadDocs = () => {
  const [docs, setDocs] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    setLoading(true);
    axiosInstance
      .get(`/docs2/getUserDocs`, {
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
  }, [refresh]);

  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 pb-4">
      <h1 className="text-3xl text-center mb-8 leading-tight title-font font-bold text-white w-56 sm:w-96 mx-auto bg-red-1 rounded-b-xl px-3 pt-4 pb-5">
        UPLOAD DOCUMENTS
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
                    <UploadDocsListItem
                      status="Pending"
                      note={''}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  ) : doc.isApproved ? (
                    <UploadDocsListItem
                      status="Approved"
                      note={doc?.note}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  ) : (
                    <UploadDocsListItem
                      status="Disapproved"
                      note={doc?.note}
                      docName={docName}
                      index={index}
                      refresh={setRefresh}
                      doc={doc}
                    />
                  )
                ) : (
                  <UploadDocsListItem
                    status="Not Uploaded"
                    note={''}
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

export default UploadDocs;
