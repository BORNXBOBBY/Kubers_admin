import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import { addSubStr } from "../../Constant/Substring";
import "./Document.css";
import Header from "../../Header/Header";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import NetworkEmpty from "../Empty/NetworkEmpty";

export default function StartupVcForm() {
  const [startup, setStartup] = useState([]);
  const [docSkeleton, setDocSkeleton] = useState(true);

  const getDocument = async () => {
    try {
      var res = await getRequest(`/startup/vc/form`, true);
      console.log("res", res);
      var responseData = await res.json();
    //   console.log("responseData", responseData);
      setStartup(responseData);
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
          <div className="d-flex border-bottom ">
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
            <span className="">
              <Link
                className={`${
                  current === "/startup/vc/form"
                    ? "topLink-active"
                    : "topLink"
                }`}
                to="/startup/vc/form"
              >
                Starup Vc Forms
              </Link>
            </span>
          </div>
          {docSkeleton ? (
            <NetworksSkeleton />
          ) : (
            <>
              <div className="px-sm-5 px-lg-5 px-md-0 mt-5">
                {startup?.length > 0 ? <div class="table-responsive">
                  <table class="table">
                    <thead class="">
                      <tr className="Document_Table_head" align="center">
                        <th> Startup Id </th>
                        <th scope="col">Startup Name</th>
                        <th scope="col">Applied Time</th>
                        <th scope="col" > View</th>
                      </tr>
                    </thead>
                    {startup.map((item, id) => (
                      <tbody key={id} className="Document_body">
                        <tr align="center">
                          <td>
                            {item.startup}
                          </td>
                          <td>{item.startup_name} </td>
                          <td>
                            {new Date(
                              item.created_time
                            ).toLocaleString()}
                          </td>
                          <td>
                              <Link to={`/startup/${item.startup}/${item.startup_slug}`}>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="default"
                                >
                                  View
                                </Button>
                              </Link>
                            </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div> : <NetworkEmpty />}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
