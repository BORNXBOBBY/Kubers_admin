import { Button, Typography } from "@material-ui/core";
import { FormControl, IconButton, InputLabel, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header/Header";
import "./Network.css";
import Select from "@mui/material/Select";
import { Delete } from "@mui/icons-material";

export const Network = () => {
  const [select, setSelect] = useState();
  const [approved, setApproved] = useState([
    {
      id: 1,
      isApproved: true,
    },
    {
      id: 2,
      isApproved: true,
    },
    {
      id: 3,
      isApproved: false,
    },
    {
      id: 4,
      isApproved: true,
    },
    {
      id: 5,
      isApproved: false,
    },
    {
      id: 6,
      isApproved: true,
    },
  ]);
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
                      value={select}
                      label="Select"
                    >
                      <MenuItem value="approve">Approve</MenuItem>
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
                      <th>Profile</th>
                      <th>Email</th>
                      <th>Founder Name</th>
                      <th>Actions</th>
                      <th>Remove</th>
                    </tr>
                    {approved.map((index) => (
                      <tr index>
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                            alt="user"
                          />
                        </td>
                        <td>
                          <h6 className="mt-2">elite@gmail.com</h6>
                        </td>
                        <td>
                          <h6 className="mt-2 ">Anurag</h6>
                        </td>
                        <td>
                          <div className="mt-2">
                            <Button
                              variant="outlined"
                              size="small"
                              className="mx-2"
                              color="default"
                            >
                              Reject
                            </Button>

                            <Button
                              variant="outlined"
                              size="small"
                              color="primary"
                            >
                              Approve
                            </Button>
                          </div>
                        </td>
                        <td>
                          <IconButton>
                            <Delete color="secondary" />
                          </IconButton>
                        </td>
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
