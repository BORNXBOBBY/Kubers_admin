import React from "react";
import Header from "../../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NetworkDetails.css";
import { Link, useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import NetworkTopbar from "./NetworkTopbar";

export default function NetworkDetails() {
  var { slug } = useParams();
  var { id } = useParams();
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
  console.log("err", networkDetails.compliance_officer);
  const date = new Date(`${networkDetails.date}`);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // console.log("err", formattedDate);
  const current = window.location.pathname;

  const NetworkApprove = async () => {
    try {
      let data = {
        is_approved: networkDetails.is_approved ? false : true,
      };
      var res = await postRequest(
        `/dashboard/network/update/${id}`,
        JSON.stringify(data),
        "PATCH",
        true
      );
      var responseData = await res.json();
      console.log("res", responseData, res.status);
      if (res.status === 200) {
        getAllNetworkData();
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
        toast.error("Unsuccessful!", {
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
    getAllNetworkData();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="main">
        <NetworkTopbar />
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <div className="rounded p-3">
                <h2 className="text-center  Network_details_head ">Network Details</h2>

                <hr />
                <div className="row mt-4 align-items-center">
                  <div
                    style={{ aspectRatio: "1/1", objectFit: "cover",textAlign: "center" }}
                    className="col-12 col-md-2 rounded-circle"
                  >
                    <img
                      className="img-fluid rounded-circle shadow mt-4"
                      style={{
                        width: "80%",
                        height: "auto",
                        aspectRatio:"1/1",
                        objectFit: "cover"
                      }}
                      src={
                        networkDetails.image
                          ? networkDetails.image
                          : "https://i.ibb.co/bLCKZws/logi.png"
                      }
                      alt="network img"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h4 className="Network_details_name" >{networkDetails.name}</h4>
                    <span className="text-muted">{formattedDate}</span>
                    <p className="text-muted mb-0">
                      Founder : {networkDetails.compliance_officer}
                    </p>
                    <p className="Network_details_desc">{networkDetails.desc}</p>
                  </div>
                  <div className="col-md-3 d-flex d-sm-block justify-content-around align-items-center">
                    <div className="text-center">
                      {networkDetails.is_approved ? (
                        <Button
                          variant="outlined"
                          onClick={() => NetworkApprove()}
                          className="px-4"
                          style={{
                            color: "red",
                            border: "1px solid red",
                          }}
                          //   size="small"
                        >
                          Unapprove
                        </Button>
                      ) : (
                        <Button
                          onClick={() => NetworkApprove()}
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
                    {/* <div className="text-center"></div> */}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h5 className="ps-1 ps-md-4  " style={{ color: "#6c757d",fontSize: "15px" }}>
                    About :-{" "}
                  </h5>
                </div>
                <div className="container mb-3">
                  <h6 className="display-6 Network_details_basic">Basic Details : </h6>
                  <div className="row px-4 mt-3">
                    <form className="Network_details_form">
                      <fieldset disabled>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Network Type
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.type}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Complaince Officer
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.compliance_officer}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Website
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.website}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Email
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.email}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                LinkedIn
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.linkedin_url}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Address 1
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.address_line_1}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Address 2
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.address_line_2}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Address 3
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.address_line_3}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.city}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                            <div class="mb-3">
                              <label for="disabledTextInput" class="form-label">
                                Pincode
                              </label>
                              <input
                                type="text"
                                id="disabledTextInput"
                                class="form-control"
                                placeholder={networkDetails.pincode}
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="container">
                  <h6 className="display-6 Network_details_focus">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>
                        Economy Sector :{" "}
                        <ul className="text-muted ">
                          {networkDetails.economysector?.map((item, id) => (
                            <li className="mt-3">{item}</li>
                          ))}
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Sector :{" "}
                        <ul className="text-muted">
                          {networkDetails.emergingsector?.map((item, id) => (
                            <li className="mt-3">{item}</li>
                          ))}
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Emerging Technology :{" "}
                        <ul className="text-muted">
                          {networkDetails.emergingtechnology?.map(
                            (item, id) => (
                              <li className="mt-3">{item}</li>
                            )
                          )}
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Geography :{" "}
                        <ul className="text-muted">
                          {networkDetails.geography?.map((item, id) => (
                            <li className="mt-3">{item}</li>
                          ))}
                        </ul>
                      </h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>
                        Product Status :{" "}
                        <ul className="text-muted">
                          {networkDetails.productstatus?.map((item, id) => (
                            <li className="mt-3">{item}</li>
                          ))}
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
