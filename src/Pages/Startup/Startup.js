import { Button, Typography } from "@material-ui/core";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";

export default function Startup() {
  const [startup, setStartup] = React.useState([]);

  const getAllStartupData = async () => {
    try {
      var res = await getRequest("/dashboard/startups/not-aproved", true);
      //   console.log("res", res);
      var responseData = await res.json();
      //   console.log("responseData", responseData);
      console.log("startup", responseData);
      setStartup(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllStartupData();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="mt-2">
              Startup
            </Typography>
            <div className="container">
              <div className="row">
                <div className="offset-sm-9 col-sm-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option value="1">Approved</option>
                    <option value="2">Unapproved</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-sm-5 py-3">
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
                    {startup.map((item) => (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
