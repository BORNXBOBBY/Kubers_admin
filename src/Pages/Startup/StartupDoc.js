import React, { useContext, useEffect, useState } from "react";
import Header from "../../Header/Header";
import { Button, Typography } from "@material-ui/core";
import "./startup.css";
import { addSubStr } from "../../Constant/Substring";
import NetworkEmpty from "../Empty/NetworkEmpty";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import StartUpTopBar from "./StartUpTopBar";
import { useParams } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import "./StartupDoc.css"
export default function Startup() {
  const [startupDoc, setStartupDoc] = useState([]);
  const [networkDoc, setNetworkDoc] = useState(false);
  var { id } = useParams();

  const getDocument = async () => {
    try {
      setNetworkDoc(true);
      var res = await getRequest(`/dashboard/startup_documents/${id}`, true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      setStartupDoc(responseData);
      setNetworkDoc(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDocument();
  }, []);
  console.log(startupDoc);

  const date = new Date("2020-07-22T13:22:10.2566789+00:00");
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <div className="main">
        <StartUpTopBar />
        <div className="container">
          <div className="row">
            <Typography variant="" className="my-4  StartupDoc_Document_Name ">
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
                          <thead class="">
                            <tr className="StartupDoc_Table_head" align="center">
                              <th scope="col">Document Type</th>
                              <th scope="col">Description</th>
                              <th scope="col">Date</th>
                              <th scope="col">Documents</th>
                            </tr>
                          </thead>
                          {startupDoc.map((item, id) => (
                            <tbody className="StartupDoc_body">
                              <tr align="center">
                                <td> {addSubStr(item.document_type, 20)}</td>
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
