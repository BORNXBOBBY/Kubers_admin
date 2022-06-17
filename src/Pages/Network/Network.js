import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import Header from "../../Header/Header";
import "./Network.css";
import GlobalContext from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import NetworkEmpty from "../Empty /NetworkEmpty";

export const Network = (props) => {
  const {
    network,
    getAllNetworkData,
    setToggleSelect,
    toggleSelect,
    networkSkeleton,
  } = useContext(GlobalContext);

  useEffect(() => {
    getAllNetworkData();
  }, [toggleSelect]);

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="mt-2">
              Network
            </Typography>
            <div className="container">
              <div className="row">
                <div className="offset-sm-9 col-sm-3">
                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select"
                      value={toggleSelect}
                      onChange={(e) => setToggleSelect(e.target.value)}
                    >
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="not-approved">Unapproved</MenuItem>
                    </Select>
                  </FormControl> */}
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={toggleSelect}
                    onChange={(e) => setToggleSelect(e.target.value)}
                  >
                    <option value="selected" disabled>
                      Select
                    </option>
                    <option value="unapproved">Unapproved</option>
                    <option value="approved">Approved</option>
                  </select>
                </div>
              </div>
            </div>

            {networkSkeleton ? (
              <NetworksSkeleton />
            ) : (
              <div className=" py-3 px-sm-5">
                {network.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody className="text-center">
                        <tr className="tablebody">
                          <th>User Profile</th>
                          <th>Network Name</th>
                          <th>​ Compliance Officer</th>
                          {/* <th>Actions</th> */}
                          <th>View</th>
                          {/* <th>Remove</th> */}
                        </tr>
                        {network.map((item, id) => (
                          <tr key={id}>
                            <td>
                              <img
                                className="rounded-circle"
                                style={{ width: "40px" }}
                                src="/img/the_kubers_logo.jpg"
                                alt="user"
                              />
                            </td>
                            <td>
                              <h6 className="mt-2">{item.name} </h6>
                            </td>
                            <td>
                              <h6 className="mt-2 ">
                                {item.compliance_officer}{" "}
                              </h6>
                            </td>
                            {/* <td>
                        <div className="mt-2">
                          <Button
                            variant="outlined"
                            size="small"
                            className="mx-2"
                            color="secondary"
                            style={{ width: "94px" }}
                          >
                            {item.is_approved ? "Approved" : "Reject"}
                          </Button>
                        </div>
                      </td> */}
                            <td>
                              <Link to={`/network/${item.id}/${item.slug}`}>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  color="default"
                                >
                                  View
                                </Button>
                              </Link>
                            </td>
                            {/* <td>
                        <IconButton>
                          <Delete color="secondary" />
                        </IconButton>
                      </td> */}
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
};
