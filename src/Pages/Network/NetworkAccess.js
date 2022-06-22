import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../Header/Header";
import NetworkTopbar from "./NetworkTopbar";
import { getRequest } from "../../Constant/apiCall";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function NetworkAccess() {
  const [role, setRole] = useState([]);
  var { slug } = useParams();
  const getRole = async () => {
    var res = await getRequest(`/dashboard/network/roles/${slug}`, true);
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
        <NetworkTopbar />
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="my-4">
              Network Access
            </Typography>
          </div>
          <tbody className="text-center">
            {role.map((item, id) => (
              <tr key={id} className="tableHover">
                <td>
                  <h6 className="mt-2">hcsbsdb</h6>
                </td>
                <td>
                  <h6 className="mt-2">hsbhs</h6>
                </td>
                <td>
                  <h6 className="mt-2">hscbbhsb</h6>
                </td>
                <td>
                  <h6 className="mt-2">hsdb</h6>
                </td>
                <td>
                  <h6 className="mt-2">hdygdw</h6>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </>
  );
}
