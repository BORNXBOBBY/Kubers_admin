import { Box, Button } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import TextField from "@mui/material/TextField";

import { useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function NetworkDetails() {
  var { slug } = useParams();
  var { id } = useParams();
  const [startupDetails, setStartupDetails] = useState([]);

  const getAllStartupData = async () => {
    try {
      var res = await getRequest(`/dashboard/startups/${slug}`, true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setStartupDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  const StartupApprove = async () => {
    try {
      let data = {
        is_approved: startupDetails.is_approved ? false : true,
      };
      var res = await postRequest(
        `/dashboard/startup/update/${id}`,
        JSON.stringify(data),
        "PATCH",
        true
      );

      var responseData = await res.json();
      console.log("res", responseData);
      if (responseData.is_approved === true) {
        toast.success("Approved!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Unapproved!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      // console.log("responseData", responseData);
      // setNetworkDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };
  const date = new Date(`${startupDetails.date}`);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // console.log("err", formattedDate);

  useEffect(() => {
    getAllStartupData();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
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
                      src=""
                      //   src={networkDetails.image}
                      alt="network img"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 style={{ color: "#1976d2" }}>djj</h4>
                    <span className="text-muted">jdgjhsagdjh</span>
                    <p className="text-muted mb-0">Founder : dhsyjhgh</p>
                    <p>cjkduhuj</p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      {startupDetails.is_approved ? (
                        <div className="text-center">
                          <Button
                            onClick={() => StartupApprove()}
                            variant="outlined"
                            className="px-4"
                            style={{
                              color: "#1976d2",
                              border: "1px solid #1976d2",
                            }}
                            //   size="small"
                          >
                            Approve
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => StartupApprove()}
                          style={{
                            color: "red",
                            border: "1px solid red",
                          }}
                          variant="outlined"
                          className="mb-md-3"
                          //   size="small"
                        >
                          Unapprove
                        </Button>
                      )}
                    </div>
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
                  <Box>
                    <div className="row px-4 mt-3">
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="Compliance Officer"
                          variant="outlined"
                          value="jkhadhs"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="Email"
                          variant="outlined"
                          value="sjkdfj"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="LinkedIn"
                          variant="outlined"
                          value="jsifdnj"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="Website"
                          variant="outlined"
                          value="kjjjkadsjj"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="CIN No."
                          variant="outlined"
                          value="AV22LNP"
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <TextField
                          aria-readonly
                          className="w-100"
                          id="outlined-disabled"
                          label="Registered Address"
                          variant="outlined"
                          value="Doctors Colony Main Road, Kankarbagh, Patna"
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="container">
                  <h6 className="display-6">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>
                        Economy Sector :{" "}
                        <ul className="text-muted">
                          {/* {networkDetails.economysector.map((item, id) => (
                            <li>{item}</li>
                          ))} */}
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Sector :{" "}
                        <ul className="text-muted">
                          {/* {networkDetails.emergingsector.map((item, id) => (
                            <li>{item}</li>
                          ))} */}
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Technology :{" "}
                        <ul className="text-muted">
                          {/* {networkDetails.emergingtechnology.map((item, id) => (
                            <li>{item}</li>
                          ))} */}
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Geography :{" "}
                        <ul className="text-muted">
                          {/* {networkDetails.geography.map((item, id) => (
                            <li>{item}</li>
                          ))} */}
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
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
