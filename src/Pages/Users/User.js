import React, { useContext, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import Header from "../../Header/Header";
import { getRequest } from "../../Constant/apiCall";
import { Link } from "react-router-dom";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";

export default function Users(props) {
  const [users, setUsers] = useState([]);
  const [toggleUsers, setToggleUsers] = useState("verified");
  const [userSkeleton, setUserSkeleton] = useState(true);

  const getUsers = async () => {
    const res = await getRequest("/auth/users/" + toggleUsers, true);
    const responseData = await res.json();
    console.log("res", responseData, res.status);
    if (res.status === 200) setUsers(responseData);
    setUserSkeleton(false);
  };

  useEffect(() => {
    getUsers();
  }, [toggleUsers]);

  return (
    <>
      <Header />
      <div className="main">
        <div className="p-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <Typography variant="h4" className="mt-2">
                  Users
                </Typography>
              </div>
              <div className=" col-sm-4">
                <select
                  className="form-select form-select-lg"
                  aria-label=".form-select-lg example"
                  onChange={(e) => setToggleUsers(e.target.value)}
                >
                  <option value="verified">Verified Email</option>
                  <option value="not-verified">Unverified Email</option>
                </select>
              </div>
            </div>
          </div>
          {userSkeleton ? (
            <NetworksSkeleton />
          ) : (
            <>
              <div className="table-responsive mt-3">
                <table className="table ">
                  <tbody className="text-center">
                    <tr className="headHover text-white">
                      {/* <th>Date Of Creation </th> */}
                      <th>Full Name</th>
                      <th>Email </th>
                      <th>Mobile</th>
                      <th>Invited By</th>
                      <th>View</th>
                    </tr>

                    {users.map((item, id) => (
                      <tr className="tableHover">
                        <td style={{ textTransform: "capitalize" }}>
                          {item.full_name}
                        </td>
                        <td>{item.email}</td>
                        <td>{item.mobile ? item.mobile : "No Data"}</td>
                        <td>{item.invited_by ? item.invited_by : "No Data"}</td>
                        <td>
                          <Link to={`user/${item.id}/update`}>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
