import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./startup.css";

export default function Startup() {
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
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Document Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Documents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
