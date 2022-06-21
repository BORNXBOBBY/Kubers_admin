import React, { useContext, useEffect, useState } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import "./startup.css";
import { getRequest } from "../../Constant/apiCall";
import { addSubStr } from "../../Constant/Substring";
import NetworkEmpty from "../Empty/NetworkEmpty";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";

export default function Startup() {
  const [startupDoc, setStartupDoc] = useState([]);
  const [networkDoc, setNetworkDoc] = useState(false);

  const getDocument = async () => {
    try {
      setNetworkDoc(true);
      var res = await getRequest("/dashboard/startup_documents", true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      setStartupDoc(responseData);
      setNetworkDoc(false);
    } catch (e) {
      console.log(e);
    }
  };

  const current = window.location.pathname;

  useEffect(() => {
    getDocument();
  }, []);
  console.log(startupDoc);

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
                Startup
              </Link>
            </span>
            <span className="">
              <Link
                className={`${
                  current === "/startup/startup-doc"
                    ? "topLink-active"
                    : "topLink"
                }`}
                to="/startup/startup-doc"
              >
                Startup document
              </Link>
            </span>
          </div>
          <div className="row">
            <Typography variant="h4" className="my-4">
              Startup Document
            </Typography>
          </div>
          {networkDoc ? (
            <NetworksSkeleton />
          ) : (
            <>
              {startupDoc.length > 0 ? (
                <>
                  <div className="container">
                    <div className="px-sm-5 px-lg-5 px-md-0">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="thead-dark">
                            <tr align="center">
                              <th scope="col">Startup Name</th>
                              <th scope="col">Document Type</th>
                              <th scope="col">Description</th>
                              <th scope="col">Documents</th>
                            </tr>
                          </thead>
                          {startupDoc.map((item, id) => (
                            <tbody>
                              <tr align="center">
                                <td>{addSubStr(item.startups.name, 20)}</td>
                                <td> {addSubStr(item.document_type, 20)}</td>
                                <td>{addSubStr(item.description, 20)}</td>
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
                  </div>
                </>
              ) : (
                <NetworkEmpty />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
