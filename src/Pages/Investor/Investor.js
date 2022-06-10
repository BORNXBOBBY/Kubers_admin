import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { Button, Typography } from "@material-ui/core";
import { getRequest } from "../../Constant/apiCall";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Investor() {
  const [investor, setInvestor] = useState([]);
  const getInvestor = async () => {
    try {
      var res = await getRequest("/dashboard/investment", true);
      console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("investor", responseData);
      setInvestor(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInvestor();
  }, []);
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
          <div className="row mt-4">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody className="text-center">
                  <tr className="tablebody">
                    <th>Investor</th>
                    <th>Investment Type</th>
                    <th>Verification</th>
                    <th>View</th>
                  </tr>

                  {investor.map((item, id) => (
                    <tr>
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
          </div>
        </div>
      </div>
    </>
  );
}
