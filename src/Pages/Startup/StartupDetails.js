import { Box } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@material-ui/core";

export default function NetworkDetails(props) {
  var { slug } = useParams();
  var { id } = useParams();
  const [item, setStartupDetails] = useState([]);

  const getStartupDetails = async () => {
    try {
      var res = await getRequest(`/dashboard/startup/${slug}`, true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
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
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <div className="rounded shadow bg-light p-3">
                <h2 className="text-center">Startup Details</h2>

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
                    <h4 style={{ color: "#1976d2" }}>{item.name} </h4>
                    <span className="text-muted">
                      {item.startup_start_date}{" "}
                    </span>
                    <p className="text-muted mb-0">
                      Founder :{item.founder_name}
                    </p>
                    <p>{item.desc} </p>
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
                  <h5 className="ps-1 ps-md-4" style={{ color: "#1976d2" }}>
                    About :-{" "}
                  </h5>
                </div>
                <div className="container mb-3">
                  <h6 className="display-6">Basic Details : </h6>
                  <Box>
                    <div className="row px-4 mt-3">
                      <div className="col-md-6 mt-3">
                        <label class="form-label"> startup Name</label>
                        <input type="" class="form-control" value={item.name} />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Founder Name</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.founder_name}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Contact Person</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.contact_person}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">DAte</label>
                        <input type="" class="form-control" value={item.date} />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Desc</label>
                        <input type="" class="form-control" value={item.desc} />
                      </div>

                      <div className="col-md-6 mt-3">
                        <label class="form-label">Fund Raised Stage</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.fund_raised_stage}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Fund Stage</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.fund_stage}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Linkedin Page</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.linkedin_page}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">City</label>
                        <input type="" class="form-control" value={item.city} />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Pincode</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.pincode}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">country</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.country}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Relationship</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.relationship}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Mobile Number</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.mobile_no}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Product Status </label>
                        <input
                          type=""
                          class="form-control"
                          value={item.product_status}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label"> Start up Date</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.startup_start_date}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">State</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.state}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Totsl Fund Raised</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.total_fund_raised}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Type</label>
                        <input type="" class="form-control" value={item.type} />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label class="form-label">Website</label>
                        <input
                          type=""
                          class="form-control"
                          value={item.website}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="container">
                  <h6 className="display-6">Focus Area : </h6>
                  <div className="row px-4">
                    <div className="col-12 col-md-6">
                      <h6>Economy Sector : </h6>
                      <ul>
                        {item.economysector?.map((data) => (
                          <li>{data} </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Emerging Sector : </h6>
                      <ul>
                        {item.emergingsector?.map((data) => (
                          <li>{data} </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Emerging Technology : </h6>
                      <ul>
                        {item.emergingtechnology?.map((data) => (
                          <li>{data} </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <h6>Product Status : </h6>
                      <ul>
                        {item.productstatus?.map((data) => (
                          <li>{data} </li>
                        ))}
                      </ul>
                      <div className="col-12 col-md-6">
                        <h6>Geography : </h6>
                        <ul>
                          {item.geography?.map((data) => (
                            <li>{data} </li>
                          ))}
                        </ul>
                      </div>
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
