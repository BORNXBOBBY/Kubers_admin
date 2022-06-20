import React, { useContext, useEffect, useState } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./startup.css";
import { getRequest } from "../../Constant/apiCall";
import { addSubStr } from "../../Constant/Substring";

export default function Startup() {
  const [startupDoc, setStartupDoc] = useState([]);

  const getDocument = async () => {
    try {
      var res = await getRequest("/dashboard/startup_documents", true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      setStartupDoc(responseData);
    } catch (e) {
      console.log(e);
    }
  };

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
              <Link class="topLink" to="/startup">
                Startup
              </Link>
            </span>
            <span className="">
              <Link class="topLink" to="/startup/startup-doc">
                Startup document
              </Link>
            </span>
          </div>
          <div className="row">
            <Typography variant="h4" className="my-4">
              Startup Document
            </Typography>
          </div>
          <div className="container">
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
                      <td>{item.startups.name}</td>
                      <td>{item.document_type}</td>
                      <td>{addSubStr(item.description, 20)}</td>
                      <td>
                        <>
                          <Link className="link" to={item.documents}>
                            view
                          </Link>
                        </>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
