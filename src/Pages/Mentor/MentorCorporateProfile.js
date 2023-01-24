import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import { FaFileDownload } from "react-icons/fa";

export default function MentorCorporateProfile() {
  var { slug } = useParams();
  var { id } = useParams();
  const current = window.location.pathname;
  const [item, setMentorDetails] = useState([]);
  const [item2, setMentorCorporateDetails] = useState([]);

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
  const getMentorCorporateProfile = async () => {
    try {
      var res2 = await getRequest(`/dashboard/corporate/mentor/${id}`, true);
      var responseData2 = await res2.json();
      setMentorCorporateDetails(responseData2);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMentorDetails();
    getMentorCorporateProfile();
  }, []);

  console.log("new", item2);
  return (
    <>
      <Header />
      <div className="main">
        <div className="d-flex border-bottom">
          <span>
            <Link style={{fontWeight: "900", color: "0e2238"}}
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
            <Link style={{fontWeight: "900", color: "0e2238"}}
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
              <div className="rounded  p-3">
                <h2 style={{fontWeight: "900" , color:"#0e2238"}}  className="text-center">Mentor's Corporate Profile</h2>
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
                    <h4 style={{ color: "#0e2238" , fontWeight: "700" }}>{item.full_name} </h4>
                    <p className="text-muted mb-0">{item.designation}</p>
                    <span className="text-muted">{item.name_of_the_firm} </span>
                    <p>{item.description} </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h5 className="ps-1 ps-md-4"  style={{color: "rgb(108, 117, 125)" }}>
                    Corporate Profile :-
                  </h5>
                </div>
                <div className="container mb-3">
                  <Box>
                    {item2.map((item2, id) => (
                      <div key={id} className="row px-4 mt-3">
                        <div className="col-md-6 mt-3">
                          <label className="form-label">Full Name</label>
                          <input
                            type=""
                            className="form-control"
                            value={item2.mentor_name}
                          />
                        </div>
                        <div className="col-md-6 mt-3">
                          <label className="form-label">Uploaded Date</label>
                          <input
                            type=""
                            className="form-control"
                            value={new Date(
                              item2.uploaded_date_time
                            ).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          />
                        </div>
                        <div className="ps-3 pe-5">
                          <div>
                            <div
                              style={{ width: "max-content" }}
                              className="border rounded shadow my-2 p-3 mx-auto"
                            >
                              <a
                                href={item2.documents}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="d-flex justify-content-center align-items-center">
                                  <FaFileDownload
                                    size={60}
                                    style={{ color: "#1976d2" }}
                                  />
                                  <p className="p-0 m-0">
                                    View or Download Document
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <hr className="my-2" />
                      </div>
                    ))}
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
