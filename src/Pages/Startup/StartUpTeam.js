import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import NetworkEmpty from "../Empty/NetworkEmpty";
import StartUpTopBar from "./StartUpTopBar";

export default function StartUpTeam() {
  const [team, setTeam] = useState([]);
  var { id } = useParams();

  const getTeam = async () => {
    var res = await getRequest(`/dashboard/startup/team/${id}`, true);
    var responseData = await res.json();
    console.log("responseData", responseData);
    setTeam(responseData);
  };
  useEffect(() => {
    getTeam();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <StartUpTopBar />
        <div className="container my-2">
          <div className="row">
            <div className="col-sm-12 mt-sm-3">
              <Typography style={{
               fontSize: "30px",
               color: "#0e2238",
               fontFamily:"font-family: 'Ubuntu', sans-serif " ,
               textAlign: "center"}}>Teams</Typography>
            </div>
            {team.length > 0 ? (
              <>
                <div className="px-md-2 px-lg-4 pt-4">
                  <div className="px-md-2 px-lg-4 table-responsive">
                    <table className="table ">
                      <thead className="text-center">
                        <tr className="tablebody headHover">
                          <th>
                            <Typography variant="">Name</Typography>
                          </th>
                          <th>
                            <Typography variant="">Designation</Typography>
                          </th>
                          <th>
                            <Typography variant="">Designation 2</Typography>
                          </th>
                          <th>
                            <Typography variant="">Joining Date</Typography>
                          </th>
                          <th>
                            <Typography variant="">
                              Years of Experience
                            </Typography>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {team.map((item, id) => (
                          <tr key={id} className="tableHover">
                            <td>
                              <h6 className="mt-2">{item.name}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.category1}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.category2}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.joining_date}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">
                                {item.year_of_experience}
                              </h6>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <NetworkEmpty />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
