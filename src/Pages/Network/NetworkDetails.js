import { Button } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import TextField from "@mui/material/TextField";

export default function NetworkDetails() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-4">
              <div className="rounded shadow bg-light p-3">
                <h2 className="text-center">Network Details</h2>
                <hr />
                <div className="row mt-4 align-items-center">
                  <div
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    className="col-12 col-md-2 rounded-circle"
                  >
                    <img
                      className="img-fluid rounded-circle shadow"
                      style={{ width: "100%" }}
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                      alt="network img"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 style={{ color: "#1976d2" }}>Bihar Angel Network</h4>
                    <span className="text-muted">Founder : Anurag verma</span>
                    <p>
                      Discription -- Bihar Angel Network started in 2021 with
                      the aim to help young talent in bihar and help them
                      achieve growth in startup s...
                    </p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      <Button
                        style={{
                          color: "#1976d2",
                          border: "1px solid #1976d2",
                        }}
                        variant="outlined"
                        className="mb-md-3"
                        //   size="small"
                      >
                        Approve
                      </Button>
                    </div>
                    {/* <div className="text-center">
                      <Button
                        variant="outlined"
                        className="px-4"
                        style={{
                          color: "red",
                          border: "1px solid red",
                        }}
                        //   size="small"
                      >
                        Reject
                      </Button>
                    </div> */}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h5 className="ps-0 ps-md-4" style={{ color: "#1976d2" }}>
                    About :-{" "}
                  </h5>
                </div>
                <div className="container">
                  <div className="display-6">Basic Details : </div>
                  <div className="row px-4 mt-3">
                    <div className="col-md-6 mt-3">
                      <TextField
                        className="w-100"
                        id="outlined-disabled"
                        label="Compliance Officer"
                        variant="outlined"
                        value="Anurag Verma"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        className="w-100"
                        id="filled-disabled"
                        label="Email"
                        variant="filled"
                        value="abcdefghijklmn09876@gmail.com"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        className="w-100"
                        id="standard-disabled"
                        label="LinkedIn"
                        variant="standard"
                        value="abcdefghijklmn09876@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <h6 className="display-6">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>
                        Economy Sector :{" "}
                        <ul className="text-muted">
                          <li>Agriculture</li>
                          <li>Bank & Finance</li>
                          <li>Education</li>
                          <li>Basic Metal Production</li>
                          <li>Basic Metal Production</li>
                          <li>Basic Metal Production</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Sector :{" "}
                        <ul className="text-muted">
                          <li>Adtech</li>
                          <li>Agtech</li>
                          <li>Biotech</li>
                          <li>Bitcoin</li>
                          <li>Bitcoin</li>
                          <li>Bitcoin</li>
                          <li>Bitcoin</li>
                          <li>Bitcoin</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Technology :{" "}
                        <ul className="text-muted">
                          <li>Artificial Intelligence</li>
                          <li>virtual reality</li>
                          <li>Augmented Reality</li>
                          <li>3D Printing</li>
                          <li>Blockchain</li>
                          <li>Big Data</li>
                          <li>Machine Learning</li>
                          <li>Robotics</li>
                          <li>SaaS</li>
                          <li>Quantum Computing</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Geography :{" "}
                        <ul className="text-muted">
                          <li>India</li>
                          <li>Japan</li>
                          <li>Rome</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
