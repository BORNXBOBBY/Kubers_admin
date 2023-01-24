import { Button, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import Header from "../../Header/Header";
import NetworkEmpty from "../Empty/NetworkEmpty";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import MentorTopBar from "./MentorTopBar";

export default function Mentor() {
  const {
    Mentor,
    mentorToggle,
    setMentorToggle,
    getAllMentorData,
    networkSkeleton,
  } = useContext(GlobalContext);
  useEffect(() => {
    getAllMentorData();
  }, [mentorToggle]);
  return (
    <>
      <Header />
      <div className="main">
        <MentorTopBar />
        <div className="container">
          <div className="row">
            <Typography style={{fontWeight: "500" , color:"#0e2238"}} variant="h4" className="mt-2 ">
              Mentor
            </Typography>
            <div className="container">
              <div className="row">
                <div className="offset-sm-9 col-sm-3">
                  <select
                    class="form-select form-select-sm mx-auto mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => setMentorToggle(e.target.value)}
                  >
                    <option value="approved">Approved</option>
                    <option value="Unapproved">Not Approved</option>
                  </select>
                </div>
              </div>
            </div>
            {networkSkeleton ? (
              <NetworksSkeleton />
            ) : (
              <div className="px-sm-5 py-3">
                {Mentor.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table ">
                      <tbody className="text-center">
                        <tr className="tablebody headHover">
                          {/* <th>Date Of Creation</th> */}
                          <th>Logo</th>
                          <th>Full Name</th>
                          <th>Company Name</th>
                          {/* <th>Actions</th> */}
                          <th>View</th>
                          {/* <th>Remove</th> */}
                        </tr>
                        {Mentor.map((item, id) => (
                          <tr key={id} className="tableHover">
                            {/* <td> 
                            {new Date(item.date).toLocaleDateString()}
                          </td> */}
                            <td>
                              <img
                                className="rounded-circle"
                                style={{ width: "40px" }}
                                src={
                                  item.logo
                                    ? item.logo
                                    : "/img/the_kubers_logo.jpg"
                                }
                                alt="user"
                              />
                            </td>
                            <td>
                              <h6 className="mt-2">{item.full_name} </h6>
                            </td>
                            <td>
                              <h6 className="mt-2 ">
                                {" "}
                                {item.name_of_the_firm}{" "}
                              </h6>
                            </td>
                            <td>
                              <Link to={`mentor/${item.id}/${item.slug}`}>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="default"
                                >
                                  View
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <NetworkEmpty />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
