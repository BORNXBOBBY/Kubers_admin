import { Button } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import TextField from "@mui/material/TextField";

import { useParams } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { useEffect } from "react";

export default function NetworkDetails() {
  var { slug } = useParams();
  const [networkDetails, setNetworkDetails] = useState([]);

  const getAllNetworkData = async () => {
    try {
      var res = await getRequest(`/dashboard/network/${slug}`, true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setNetworkDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };
  const date = new Date(`${networkDetails.date}`);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // console.log("err", formattedDate);

  useEffect(() => {
    getAllNetworkData();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
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
                      src={networkDetails.image}
                      alt="network img"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 style={{ color: "#1976d2" }}>{networkDetails.name}</h4>
                    <span className="text-muted">{formattedDate}</span>
                    <p className="text-muted mb-0">
                      Founder : {networkDetails.compliance_officer}
                    </p>
                    <p>{networkDetails.desc}</p>
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
                  <h5 className="ps-1 ps-md-4" style={{ color: "#1976d2" }}>
                    About :-{" "}
                  </h5>
                </div>
                <div className="container mb-3">
                  <h6 className="display-6">Basic Details : </h6>
                  <div className="row px-4 mt-3">
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="Compliance Officer"
                        variant="outlined"
                        value={networkDetails.compliance_officer}
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="Email"
                        variant="outlined"
                        value={networkDetails.email}
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="LinkedIn"
                        variant="outlined"
                        value="abcdefghijklmn09876@gmail.com"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="Website"
                        variant="outlined"
                        value="thekubers.com"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="CIN No."
                        variant="outlined"
                        value="AV22LNP"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <TextField
                        disabled
                        className="w-100"
                        id="outlined-disabled"
                        label="Registered Address"
                        variant="outlined"
                        value="Doctors Colony Main Road, Kankarbagh, Patna"
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
