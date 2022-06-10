import { Button, Typography } from "@material-ui/core";
import { FormControl, IconButton, InputLabel, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./Network.css";
import Select from "@mui/material/Select";
import { Delete } from "@mui/icons-material";

export const Network = () => {
  const [select] = useState();
  const [approvedData, setApproved] = useState([
    {
      id: 1,
      isApproved: "approved",
    },
    {
      id: 2,
      isApproved: "approved",
    },
    {
      id: 3,
      isApproved: "reject",
    },
    {
      id: 4,
      isApproved: "approved",
    },
    {
      id: 5,
      isApproved: "reject",
    },
    {
      id: 6,
      isApproved: "approved",
    },
  ]);
  const [dataCopy, setDataCopy] = useState([...approvedData]);

  const deleteRow = (id) => {
    const newData = [...approvedData];
    const deletedData = newData.filter((item, index) => {
      return index !== id;
    });
    setApproved(deletedData);
  };
  // const filterdata = (value) => {
  //   console.log("va", value);
  //   const newArr = [...filterData];
  //   const fitlerd = newArr.filter((item) => {
  //     return item.isApproved === value;
  //   });
  //   console.log(fitlerd);
  //   setApproved(fitlerd);
  // };
  // useEffect(() => {
  //   setFilterData(approvedData);
  // }, []);
  const filterdata = (value) => {
    console.log("va", value);
    // const newArr = [...approvedData];
    // console.log("newArr", newArr);
    const fitlerd = dataCopy.filter((item) => {
      return item.isApproved === value;
    });
    console.log("filtereddata", fitlerd);
    setApproved(fitlerd);
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
                      value={select}
                      label="Select"
                      onChange={(e) => filterdata(e.target.value)}
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
                      <th>Profile</th>
                      <th>Email</th>
                      <th>Founder Name</th>
                      <th>Actions</th>
                      <th>Remove</th>
                    </tr>
                    {approvedData.map((item, index) => (
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
                              style={{ width: "94px" }}
                            >
                              {item.isApproved}
                            </Button>
                            {/* 
                            <Button
                              variant="outlined"
                              size="small"
                              color="primary"
                            >
                              Approve
                            </Button> */}
                          </div>
                        </td>
                        <td>
                          <IconButton onClick={() => deleteRow(index)}>
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
