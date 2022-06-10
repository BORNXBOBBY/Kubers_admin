import { Button, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";

export default function Startup() {
  const { startup, getAllStartupData, startupToggle, setStartupToggle } =
    useContext(GlobalContext);
  useEffect(() => {
    getAllStartupData();
  }, [startupToggle]);

  console.log("s", startupToggle);

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
                    // onChange={(e) => setStartupToggle(e.target.value)}
                    onChange={(e) => setStartupToggle(e.target.value)}
                  >
                    <option value="Unapproved">UnApproved</option>
                    <option value="approved">approved</option>
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
                      <th>Startup Name</th>
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
