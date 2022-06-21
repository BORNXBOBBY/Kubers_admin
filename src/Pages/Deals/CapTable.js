import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";

export default function CapTable() {
  const current = window.location.pathname;
  const [capTable, setCapTable] = useState([]);
  const [totalShares, setTotalShares] = useState();

  const getCapTable = async () => {
    var res = await getRequest("/dashboard/captable", true);
    console.log("res", res);
    var responseData = await res.json();
    console.log("responseData", responseData);
    setCapTable(responseData);
    getSharesSum(responseData);
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
        <div className="container">
          <div className="d-flex border-bottom">
            <span className="">
              {" "}
              <Link
                className={`${
                  current === "/deal" ? "topLink-active" : "topLink"
                }`}
                to="/deal"
              >
                Deals
              </Link>
            </span>
            <span className="">
              <Link
                className={`${
                  current === "/deal/commitment" ? "topLink-active" : "topLink"
                }`}
                to="/deal/commitment"
              >
                Deals Commitment
              </Link>
            </span>
            <span className="">
              <Link
                className={`${
                  current === "/deal/captable" ? "topLink-active" : "topLink"
                }`}
                to="/deal/captable"
              >
                Cap Table
              </Link>
            </span>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-sm-3">
              <Typography>Cap Table</Typography>
            </div>
            <div className="px-sm-0 px-md-2 px-lg-1 pt-4">
              <div className="px-sm-0 px-md-2 px-lg-5 table-responsive">
                <table className="table border">
                  <thead className="text-center">
                    <tr className="tablebody headHover">
                      <th>
                        <Typography variant="h6">
                          Network <br /> Name
                        </Typography>
                      </th>
                      <th>
                        <Typography variant="h6">
                          Startup <br /> Name
                        </Typography>
                      </th>
                      <th className="pb-4">
                        <Typography variant="h6">Stage</Typography>
                      </th>
                      <th className="pb-4">
                        <Typography variant="h6">Name</Typography>
                      </th>
                      <th>
                        <Typography variant="h6">
                          Date of <br /> Allotment
                        </Typography>
                      </th>
                      <th>
                        <Typography variant="h6">
                          No. of <br /> Shares
                        </Typography>
                      </th>
                      <th>
                        <Typography variant="h6">
                          % of <br /> Holding
                        </Typography>
                      </th>
                      <th className="pb-4">
                        <Typography variant="h6">Amount</Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {capTable.map((item, id) => (
                      <tr key={id} className="tableHover">
                        <td>
                          <h6 className="mt-2">
                            {item.network_name ? item.network_name : "No Data"}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
