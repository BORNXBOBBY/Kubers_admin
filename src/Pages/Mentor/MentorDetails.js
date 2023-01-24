import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { Box, Button } from "@material-ui/core";

export default function MentorDetails() {
  var { slug } = useParams();
  var { id } = useParams();
  const [item, setMentorDetails] = useState([]);
  const current = window.location.pathname;

  const getMentorDetails = async () => {
    try {
      var res = await getRequest(`/dashboard/mentor/${slug}`, true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("mentor_details", responseData);
      setMentorDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  const MentorApprove = async () => {
    try {
      let data = {
        is_approved: item.is_approved ? false : true,
      };
      var res = await postRequest(
        `/dashboard/mentor/update/${id}`,
        JSON.stringify(data),
        "PATCH",
        true
      );

      var responseData = await res.json();
      console.log("res", responseData);
      if (res.status === 200) {
        getMentorDetails();
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

  useEffect(() => {
    getMentorDetails();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="main">
        <div className="d-flex border-bottom">
          <span>
            <Link style={{fontWeight: "500", color: "0e2238"}}
              className={`${
                current === `/mentor/${id}/${slug}`
                  ? "topLink-active"
                  : "topLink"
              }`}
              to={`/mentor/${id}/${slug}`}
            >
              Mentor's Detail
            </Link>
          </span>
          <span>
            <Link style={{fontWeight: "500", color: "0e2238"}}
              className={`${
                current === `/mentor/${id}/${slug}/corporate-profile`
                  ? "topLink-active"
                  : "topLink"
              }`}
              to={`/mentor/${id}/${slug}/corporate-profile`}
            >
              Corporate Profile
            </Link>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <div className="rounded   p-3">
                <h2 style={{fontWeight: "500", color: "0e2238"}} className="text-center">Mentor Details</h2>
                <hr />
                <div className="row mt-4 align-items-center">
                  <div
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    className="col-12 col-md-2 rounded-circle"
                  >
                    <img
                      className="img-fluid rounded-circle shadow"
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "contain",
                      }}
                      src={item.logo}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 style={{ color: "#0e2238", fontWeight:"500" }}>{item.full_name} </h4>
                    <p className="text-muted mb-0">{item.designation}</p>
                    <span className="text-muted">{item.name_of_the_firm} </span>
                    <p>{item.description} </p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      {item.is_approved ? (
                        <div className="text-center">
                          <Button
                            onClick={() => MentorApprove()}
                            variant="outlined"
                            className="px-4"
                            style={{
                              color: "red",
                              border: "1px solid red",
                            }}
                            //   size="small"
                          >
                            Unapprove
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => MentorApprove()}
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
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h5 className="ps-1 ps-md-4" style={{color: "rgb(108, 117, 125)" }}>
                    About :-
                  </h5>
                </div>
                <div className="container mb-3">
                  <Box>
                    <div className="row px-4 mt-3">
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.full_name}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Company Name</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.name_of_the_firm}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Contact Number</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.contact_no}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.business_email_id}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">LinkedIn</label>
                        <br />
                        <a href={item.linkedin}>{item.linkedin}</a>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Designation</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.designation}
                        />
                      </div>

                      <div className="col-md-6 mt-3">
                        <label className="form-label">CIN no. / LLP no.</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.cin_no_llp_no}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Experience</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.experience}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Existing Clients</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.existing_clients}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Tax/PAN no.</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.tax_pan_no}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Website</label>
                        <br />
                        <a href={item.website}>{item.website}</a>
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Fee Range</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.fee_range}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Address Line 2</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.address_line_1}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Address Line 2</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.address_line_2}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">City</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.city}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">State</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.state}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">country</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.country}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Servicing Areas</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.servicing_areas}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">No. of Employees</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.no_of_employees}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">TDS no.</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.tds_no}
                        />
                      </div>
                      {item.are_you_a_part_of_network ? (
                        <div className="col-md-6 mt-3">
                          <label className="form-label">
                            Part of a Network
                          </label>
                          <input
                            type=""
                            className="form-control"
                            value={item.are_you_a_part_of_network}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {item.other_company_name ? (
                        <div className="col-md-6 mt-3">
                          <label className="form-label">
                            Other Company Name
                          </label>
                          <input
                            type=""
                            className="form-control"
                            value={item.other_company_name}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
