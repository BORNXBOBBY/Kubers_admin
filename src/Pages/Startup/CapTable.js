import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import NetworkEmpty from "../Empty/NetworkEmpty";
import CaptTabaleSkeleton from "../Skeleton/CaptTabaleSkeleton";
import StartUpTopBar from "./StartUpTopBar";

export default function CapTable() {
  const [capTable, setCapTable] = useState([]);
  const [totalShares, setTotalShares] = useState();
  const [capSkeleton, setCapSkeleton] = useState(true);
  var { id } = useParams();

  const getCapTable = async () => {
    var res = await getRequest(`/dashboard/captable/${id}`, true);
    console.log("res", res);
    var responseData = await res.json();
    console.log("responseData", responseData);
    setCapTable(responseData);
    getSharesSum(responseData);
    setCapSkeleton(false);
  };
  const getSharesSum = (row) => {
    try {
      if (!row) return;
      // console.log('row', row)
      const sum = row.reduce(
        (total, currentValue) => (total = total + currentValue.no_of_shares),
        0
      );
      // console.log("sumShares", sum);
      // const percentage = (12 / sum) * 100;
      // console.log("percent", percentage);
      setTotalShares(sum);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getCapTable();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <StartUpTopBar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-sm-3">
              <Typography className="my-2 " style={{
               fontSize: "30px",
               fontFamily:"font-family: 'Ubuntu', sans-serif " ,
               color: "#0e2238",
               textAlign: "center"}} >Cap Table</Typography>
            </div>

            {capSkeleton ? (
              <CaptTabaleSkeleton />
            ) : (
              <div className="px-sm-0 px-md-2 px-lg-1 pt-3">
                {capTable.length > 0 ? (
                  <div className="px-sm-0 px-md-2 px-lg-5 table-responsive">
                    <table className="table ">
                      <thead  className="text-center">
                        <tr className="tablebody headHover">
                          <th>
                            <Typography variant="">
                              Network <br /> Name
                            </Typography>
                          </th>
                          <th>
                            <Typography variant="">
                              Startup <br /> Name
                            </Typography>
                          </th>
                          <th className="pb-4">
                            <Typography variant="">Stage</Typography>
                          </th>
                          <th className="pb-4">
                            <Typography variant="">Name</Typography>
                          </th>
                          <th>
                            <Typography variant="">
                              Date of <br /> Allotment
                            </Typography>
                          </th>
                          <th>
                            <Typography variant="">
                              No. of <br /> Shares
                            </Typography>
                          </th>
                          <th>
                            <Typography variant="">
                              % of <br /> Holding
                            </Typography>
                          </th>
                          <th className="pb-4">
                            <Typography variant="">Amount</Typography>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {capTable.map((item, id) => (
                          <tr key={id} className="tableHover">
                            <td>
                              <h6 className="mt-2">
                                {item.network_name
                                  ? item.network_name
                                  : "No Data"}
                              </h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.startup_name}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.stage}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.name}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.date_of_allotment}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">{item.no_of_shares}</h6>
                            </td>
                            <td>
                              <h6 className="mt-2">
                                {parseFloat(
                                  (item.no_of_shares / totalShares) * 100
                                ).toFixed(2)}
                                %
                              </h6>
                            </td>
                            <td>
                              <h6 className="mt-2">
                                {parseFloat(item.price_per_instruement) *
                                  item.no_of_shares}
                              </h6>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <NetworkEmpty />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
