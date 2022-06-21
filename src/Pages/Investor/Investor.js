import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { Button, Typography } from "@material-ui/core";
import { getRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import NetworkEmpty from "../Empty/NetworkEmpty";

export default function Investor(props) {
  const {
    networkSkeleton,
    getInvestor,
    investor,
    setInvestorToggle,
    investorToggle,
  } = useContext(GlobalContext);

  useEffect(() => {
    getInvestor();
  }, [investorToggle]);
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="mt-2">
              Investor
            </Typography>
          </div>
          <div className="container">
            <div className="row">
              <div className="offset-sm-9 col-sm-3">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  value={investorToggle}
                  onChange={(e) => setInvestorToggle(e.target.value)}
                >
                  <option value="selected" disabled>
                    Select
                  </option>
                  <option value="notverified">Unverified</option>
                  <option value="verified">Verified</option>
                </select>
              </div>
            </div>
          </div>
          {investor.length > 0 ? (
            <div className="row mt-4">
              {networkSkeleton ? (
                <NetworksSkeleton />
              ) : (
                <div className="table-responsive">
                  <table className="table ">
                    <tbody className="text-center">
                      <tr className="headHover text-white">
                        <th>Investor</th>
                        <th>Investment Type</th>
                        <th>Verification</th>
                        <th>View</th>
                      </tr>

                      {investor.map((item, id) => (
                        <tr className='tableHover'>
                          <td>{`${item.first_name} ${
                            item.middle_name === null ? "" : item.middle_name
                          } ${item.last_name}`}</td>
                          <td>{item.investment_type}</td>
                          <td>
                            {item.kyc_verified === false
                              ? "Not Verified"
                              : "Verified"}
                          </td>
                          <td>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/investor/${item.id}`}
                            >
                              <Button variant="outlined" color="primary">
                                View
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            <NetworkEmpty />
          )}
        </div>
      </div>
    </>
  );
}
