import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { Box, Button } from "@material-ui/core";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function InvestorDetails() {
  var { id } = useParams();

  const [investorDetails, setInvestorDetails] = useState([]);
  const getInvestorDetails = async () => {
    try {
      var respon = await getRequest(`/dashboard/investor/${id}`, true);
      console.log("respon", respon);
      var responseData = await respon.json();
      console.log("investorDetails", responseData);
      setInvestorDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  const InvestorApprove = async () => {
    try {
      let data = {
        kyc_verified: investorDetails.kyc_verified ? false : true,
      };
      var res = await postRequest(
        `/dashboard/investor/update/${id}`,
        JSON.stringify(data),
        "PUT",
        true
      );
      var responseData = await res.json();
      console.log("res", responseData);
      if (responseData.kyc_verified === true) {
        toast.success("Verified Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("unverified Successfully!", {
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

  const date = new Date(`${investorDetails.date}`);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // console.log("date", formattedDate);
  console.log("rrrrr", investorDetails);
  useEffect(() => {
    getInvestorDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <h2 className="text-center">Investor Details</h2>

                <hr />
                <div className="row mt-4 align-items-center">
                  <div
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    className="col-12 col-md-2 rounded-circle"
                  >
                    <img
                      className="img-fluid rounded-circle shadow"
                      style={{ width: "100%" }}
                      src="https://i.ibb.co/Tm92ZWW/user.png"
                      alt="network img"
                    />
                  </div>

                  <div className="col-12 col-md-7">
                    <h4 style={{ color: "#1976d2" }}>
                      {investorDetails.first_name
                        ? `${investorDetails.first_name} ${
                            investorDetails.middle_name
                              ? investorDetails.middle_name
                              : ""
                          } ${investorDetails.last_name}`
                        : investorDetails.full_name}
                    </h4>
                    <span className="text-muted">
                      {investorDetails.fname_authorized_person_karta}{" "}
                    </span>
                    <p className="text-muted mb-0">
                      Founder :{" "}
                      {investorDetails.account_holder_name
                        ? investorDetails.account_holder_name
                        : "No Data"}
                    </p>
                    <p>{formattedDate} </p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      {investorDetails.kyc_verified ? (
                        <Button
                          onClick={() => InvestorApprove()}
                          style={{
                            color: "red",
                            border: "1px solid red",
                          }}
                          variant="outlined"
                          className="mb-md-3"
                          //   size="small"
                        >
                          unverify
                        </Button>
                      ) : (
                        <div className="text-center">
                          <Button
                            onClick={() => InvestorApprove()}
                            variant="outlined"
                            className="px-4"
                            style={{
                              color: "#1976d2",
                              border: "1px solid #1976d2",
                            }}
                            //   size="small"
                          >
                            Verify
                          </Button>
                        </div>
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
                        <label class="form-label">First Name</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.first_name
                              ? investorDetails.first_name
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">last Name</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.last_name
                              ? investorDetails.last_name
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Investment type</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.investment_type
                              ? investorDetails.investment_type
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Account Holder Name</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.account_holder_name
                              ? investorDetails.account_holder_name
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Account Number</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.account_no
                              ? investorDetails.account_no
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Aadhaar no</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.aadhar_no
                              ? investorDetails.aadhar_no
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Bank Name</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.bank_name
                              ? investorDetails.bank_name
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Bank Branch</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.branch
                              ? investorDetails.branch
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">City</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.city
                              ? investorDetails.city
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Pincode</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.pincode
                              ? investorDetails.pincode
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">country</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.country
                              ? investorDetails.country
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Relationship</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.relationship
                              ? investorDetails.relationship
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Passport exp date</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.passport_exp_date
                              ? investorDetails.passport_exp_date
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Passport </label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.passport
                              ? investorDetails.passport
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Pan</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.pan
                              ? investorDetails.pan
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Investment Type</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.investment_type
                              ? investorDetails.investment_type
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">gst No</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.gst_no
                              ? investorDetails.gst_no
                              : "No Data"
                          }
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Gst Exp. Date</label>
                        <input
                          type=""
                          class="form-control"
                          value={
                            investorDetails.gst_expiry_date
                              ? investorDetails.gst_expiry_date
                              : "No Data"
                          }
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                {/* <div className="container">
                  <h6 className="display-6">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>
                        Economy Sector :{" "}
                        <ul className="text-muted">
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
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                          <li>jdbfhjb</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
