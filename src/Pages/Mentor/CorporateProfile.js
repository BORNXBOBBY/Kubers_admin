import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import MentorTopBar from "./MentorTopBar";

export default function CorporateProfile() {
  const [corporateSkeleton, setCorporateSkeleton] = useState(true);
  const [corporateProfile, setCorporateProfile] = useState([]);

  const getCorporateDetails = async () => {
    try {
      var res = await getRequest(`/dashboard/corporate/mentor`, true);
      var responseData = await res.json();
      console.log("Corporate Profile", responseData);
      setCorporateProfile(responseData);
      setCorporateSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("dd", corporateProfile);

  useEffect(() => {
    getCorporateDetails();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <MentorTopBar />
        <div className="container">
          <div className="row">
            <Typography sx={{fontWeight: "900" , color: "#0e2238"}} variant="h4" className="mt-2">
              Corporate Profile
            </Typography>

            {corporateSkeleton ? (
              <NetworksSkeleton />
            ) : (
              <div className="px-sm-5 py-3">
                {corporateProfile?.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table">
                      <tbody className="text-center">
                        <tr className="tablebody headHover">
                          <th>Full Name</th>
                          <th>Uploaded Date & Time</th>
                          <th>View</th>
                        </tr>
                        {corporateProfile.map((item, id) => (
                          <tr key={id} className="tableHover">
                            <td>
                              <h6 className="mt-2">{item.mentor_name} </h6>
                            </td>
                            <td>
                              <h6 className="mt-2 ">
                                {" "}
                                {new Date(
                                  item.uploaded_date_time
                                ).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </h6>
                            </td>
                            <td>
                              <a
                                target="_blank"
                                href={item.documents}
                                rel="noreferrer"
                              >
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="default"
                                >
                                  View
                                </Button>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <>
                    <div>hello</div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
