import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function Startup() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse border-bottom" id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <Link class="nav-link" to="/startup">
                    Startup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/startup/startup-doc">
                    Startup document
                  </Link>
                </li>
              </ul>
            </div>
          </nav> */}
          <div className="d-flex border-bottom">
            <span>
              {" "}
              <Link class="nav-link" to="/startup">
                Startup
              </Link>
            </span>
            <span>
              <Link class="nav-link" to="/startup/startup-doc">
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
