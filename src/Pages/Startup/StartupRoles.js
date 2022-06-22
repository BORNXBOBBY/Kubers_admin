import React from "react";
import Header from "../../Header/Header";
import StartUpTopBar from "./StartUpTopBar";
import { getRequest } from "../../Constant/apiCall";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import NetworkEmpty from "../Empty/NetworkEmpty";

export default function StartupRoles() {
  const [role, setRole] = useState([]);
  var { slug } = useParams();
  const getRole = async () => {
    var res = await getRequest(`/dashboard/startup/roles/${slug}`, true);
    var responseData = await res.json();
    console.log("responseData", responseData);
    setRole(responseData);
  };
  useEffect(() => {
    getRole();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <StartUpTopBar />
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="my-4">
              Startup Roles
            </Typography>
          </div>

          {role.length > 0 ? <div className="px-md-2 px-lg-4 pt-4">
            <div className="px-md-2 px-lg-4 table-responsive">
              <table className="table border">
                <thead className="text-center">
                  <tr className="tablebody headHover">
                    <th>
                      <Typography variant="h6">Name</Typography>
                    </th>
                    <th>
                      <Typography variant="h6">Username</Typography>
                    </th>
                    <th>
                      <Typography variant="h6">Role</Typography>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {role.map((item, id) => (
                    <tr key={id} className="tableHover">
                      <td>
                        <h6 className="mt-2">{item.user}</h6>
                      </td>
                      <td>
                        <h6 className="mt-2">{item.username}</h6>
                      </td>
                      <td>
                        <h6 className="mt-2">{item.role}</h6>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>: <NetworkEmpty />}
        </div>
      </div>
    </>
  );
}
