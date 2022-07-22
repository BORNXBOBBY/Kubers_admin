import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import { addSubStr } from "../../Constant/Substring";
import Header from "../../Header/Header";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";

export default function Documents() {
  const [startupDoc, setStartupDoc] = useState([]);
  const [docSkeleton, setDocSkeleton] = useState(true);

  const getDocument = async () => {
    try {
      //   setNetworkDoc(true);
      var res = await getRequest(`/dashboard/startup_documents/`, true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      setStartupDoc(responseData);
      setDocSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDocument();
  }, []);
  const current = window.location.pathname;

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="d-flex border-bottom">
            <span className="">
              {" "}
              <Link
                className={`${
                  current === "/startup" ? "topLink-active" : "topLink"
                }`}
                to="/startup"
              >
                Startups
              </Link>
            </span>
            <span className="">
              <Link
                className={`${
                  current === "/startup/documents"
                    ? "topLink-active"
                    : "topLink"
                }`}
                to="/startup/documents"
              >
                Documents
              </Link>
            </span>
          </div>
          {docSkeleton ? (
            <NetworksSkeleton />
          ) : (
            <>
              <div className="px-sm-5 px-lg-5 px-md-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr align="center">
                        <th scope="col">Document Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Documents</th>
                      </tr>
                    </thead>
                    {startupDoc.map((item, id) => (
                      <tbody>
                        <tr align="center">
                          <td>
                            {" "}
                            {item.document_type === "pitch_desk"
                              ? "Pitch Desk"
                              : item.document_type === "startupdocuments"
                              ? "Startup Documents"
                              : item.document_type}
                          </td>
                          <td>{addSubStr(item.description, 30)}</td>
                          <td>
                            {new Date(
                              item.uploaded_date_time
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            <>
                              <Button
                                className="link"
                                target="_blank"
                                href={item.documents}
                                rel="noreferrer"
                                variant="outlined"
                                size="small"
                                hre
                              >
                                View
                              </Button>
                            </>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
