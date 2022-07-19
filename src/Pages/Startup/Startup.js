import { Button, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import NetworkEmpty from "../Empty/NetworkEmpty";

export default function Startup() {
  const {
    startup,
    getAllStartupData,
    startupToggle,
    setStartupToggle,
    networkSkeleton,
  } = useContext(GlobalContext);
  useEffect(() => {
    getAllStartupData();
  }, [startupToggle]);

  console.log("s", startupToggle);
  console.log("res", startup);

  const current = window.location.pathname;

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="d-flex border-bottom">
            <span className="">
              {" "}
              <Link
                className={`${
                  current === "/startup" ? "topLink-active" : "topLink"
                }`}
                to="/startup"
              >
                Startups
              </Link>
            </span>
            <span className="">
              <Link
                className={`${
                  current === "/startup/documents"
                    ? "topLink-active"
                    : "topLink"
                }`}
                to="/startup/documents"
              >
                Documents
              </Link>
            </span>
          </div>
          <div className="row">
            {/* <Typography variant="h4" className="mt-2">
              Startup
            </Typography> */}
            <div className="container">
              <div className="row">
                <div className="offset-sm-9 col-sm-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    // onChange={(e) => setStartupToggle(e.target.value)}
                    onChange={(e) => setStartupToggle(e.target.value)}
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
                {startup.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table ">
                      <tbody className="text-center">
                        <tr className="tablebody headHover">
                          {/* <th>Date Of Creation</th> */}
                          <th>User Profile</th>
                          <th>Startup Name</th>
                          <th>​ Compliance Officer</th>
                          {/* <th>Actions</th> */}
                          <th>View</th>
                          {/* <th>Remove</th> */}
                        </tr>
                        {startup.map((item, id) => (
                          <tr key={id} className="tableHover">
                            {/* <td> 
                            {new Date(item.date).toLocaleDateString()}
                          </td> */}
                            <td>
                              <img
                                className="rounded-circle"
                                style={{ width: "40px" }}
                                src={
                                  item.image
                                    ? item.image
                                    : "/img/the_kubers_logo.jpg"
                                }
                                alt="user"
                              />
                            </td>
                            <td>
                              <h6 className="mt-2">{item.name} </h6>
                            </td>
                            <td>
                              <h6 className="mt-2 "> {item.contact_person} </h6>
                            </td>
                            <td>
                              <Link to={`startup/${item.id}/${item.slug}`}>
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
