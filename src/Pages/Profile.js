import { Typography } from "@mui/material";
import React from "react";
import Header from "../Header/Header";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="main">
        <Typography variant="caption"> Profile</Typography>
        <div className="container">
          <div className="row">
            <div className="col-12 rounded shadow">
              <div className="row">
                <div className="col col-md-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
