import { Box } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import { Link, useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../Constant/apiCall";
import "./StartupDetails.css";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@material-ui/core";
import StartUpTopBar from "./StartUpTopBar";

export default function NetworkDetails(props) {
  var { slug } = useParams();
  var { id } = useParams();
  const [item, setStartupDetails] = useState([]);

  const getStartupDetails = async () => {
    try {
      var res = await getRequest(`/dashboard/startup/${slug}`, true);
      // console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      console.log("startup_details", responseData);
      setStartupDetails(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("stateStat", item);
  const StartupApprove = async () => {
    try {
      let data = {
        is_approved: item.is_approved ? false : true,
      };
      var res = await postRequest(
        `/dashboard/startup/update/${id}`,
        JSON.stringify(data),
        "PATCH",
        true
      );

      var responseData = await res.json();
      console.log("res", responseData);
      if (res.status === 200) {
        getStartupDetails();
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
        toast.success("Unsuccessful!", {
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
  const date = new Date(`${item.date}`);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // console.log("err", formattedDate);

  useEffect(() => {
    getStartupDetails();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="main">
        <StartUpTopBar />
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <div className="rounded p-3">
                <h2 className="text-center Startup_details_head">Startup Details</h2>
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
                      src={
                        item.image
                          ? item.image
                          : "https://i.ibb.co/Tm92ZWW/user.png"
                      }
                      alt="network img"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 className="Startup_details_name">{item.name} </h4>
                    <span className="text-muted">
                      {item.startup_start_date}{" "}
                    </span>
                    <p className="text-muted mb-0">
                      Founder :{item.founder_name}
                    </p>
                    <p className="Startup_details_desc">{item.desc} </p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      {item.is_approved ? (
                        <div className="text-center">
                          <Button
                            onClick={() => StartupApprove()}
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
                          onClick={() => StartupApprove()}
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
                  <h5 className="ps-1 ps-md-4" style={{ color: "#6c757d",fontSize: "15px" }}>
                    About :-{" "}
                  </h5>
                </div>
                <div className="container mb-3">
                  <h6 className="display-6 Startup_details_basic">Basic Details : </h6>
                  <Box>
                    <div className="row px-4 mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label"> startup Name</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.name}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Founder Name</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.founder_name}
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Contact Person</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.contact_person}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">DAte</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.date}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Desc</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.desc}
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Fund Raised Stage</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.fund_raised_stage}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Fund Stage</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.fund_stage}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                        <label className="form-label">Linkedin Page</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.linkedin_page}
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                        <label className="form-label">City</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.city}
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
                        <label className="form-label">Pincode</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.pincode}
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
                        <label className="form-label">Relationship</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.relationship}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.mobile_no}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Product Status </label>
                        <input
                          type=""
                          className="form-control"
                          value={item.product_status}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label"> Start up Date</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.startup_start_date}
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
                        <label className="form-label">Totsl Fund Raised</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.total_fund_raised}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Type</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.type}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label">Website</label>
                        <input
                          type=""
                          className="form-control"
                          value={item.website}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="container">
                  <h6 className="display-6 Startup_details_focus">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>Economy Sector : </h6>
                      <ul>
                        {item.economysector?.length > 0 ? (
                          <>
                            {item.economysector?.map((data) => (
                              <li>{data} </li>
                            ))}
                          </>
                        ) : (
                          "No Data"
                        )}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Emerging Sector : </h6>
                      <ul>
                        {item.emergingsector?.length > 0 ? (
                          <>
                            {item.emergingsector?.map((data) => (
                              <li>{data} </li>
                            ))}
                          </>
                        ) : (
                          "No Data"
                        )}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Emerging Technology : </h6>
                      <ul>
                        {item.emergingtechnology?.length > 0 ? (
                          <>
                            {item.emergingtechnology?.map((data) => (
                              <li>{data} </li>
                            ))}
                          </>
                        ) : (
                          "No Data"
                        )}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Product Status : </h6>
                      <ul>
                        {item.productstatus?.length > 0 ? (
                          <>
                            {item.productstatus?.map((data) => (
                              <li>{data} </li>
                            ))}
                          </>
                        ) : (
                          "No Data"
                        )}
                      </ul>
                      

                    </div>
                     
                    <div className="col-12 col-md-6">
                        <h6>Geography : </h6>
                        <ul>
                          {item.geography?.length > 0 ? (
                            <>
                              {item.geography?.map((data) => (
                                <li>{data} </li>
                              ))}
                            </>
                          ) : (
                            "No Data"
                          )}
                        </ul>
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
