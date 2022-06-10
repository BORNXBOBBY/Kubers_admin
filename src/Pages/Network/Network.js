import { Button, Typography } from "@material-ui/core";
import { FormControl, IconButton, InputLabel, MenuItem } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Header from "../../Header/Header";
import "./Network.css";
import Select from "@mui/material/Select";
import { Delete } from "@mui/icons-material";
import GlobalContext from "../../Context/GlobalContext";

export const Network = (props) => {
  const { network, getAllNetworkData } = useContext(GlobalContext);

  useEffect = () => {
    getAllNetworkData();
  };
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
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select"
                    >
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="reject">Reject</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="card-block px-0 py-3">
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody className="text-center">
                    <tr className="tablebody">
                      <th>User Profile</th>
                      <th>Newtork Name</th>
                      <th>​ Compliance Officer</th>
                      {/* <th>Actions</th> */}
                      <th>View</th>
                      {/* <th>Remove</th> */}
                    </tr>
                    {network.map((item) => (
                      <tr>
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
                          <h6 className="mt-2 ">{item.compliance_officer} </h6>
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
                          <Button
                            variant="outlined"
                            size="small"
                            color="default"
                          >
                            View{" "}
                          </Button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
