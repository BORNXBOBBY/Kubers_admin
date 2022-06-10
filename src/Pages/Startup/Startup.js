import { Button, Typography } from "@material-ui/core";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";

export default function Startup() {
  const [startup, setStartup] = React.useState([]);

  const getAllStartupData = async () => {
    try {
      var res = await getRequest("/dashboard/startups/not-aproved", true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setStartup(responseData);
    } catch (e) {
      console.log(e);
    }
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
                      <MenuItem value="not-approved">Unapproved</MenuItem>
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
                        <h6 className="mt-2">wasjhgsmd </h6>
                      </td>
                      <td>
                        <h6 className="mt-2 ">hgsdbuk </h6>
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
                        <Link>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
