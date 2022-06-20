import { Button } from "@material-ui/core";
import { imageListItemBarClasses, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getRequest } from "../../Constant/apiCall";
import GlobalContext from "../../Context/GlobalContext";
import Header from "../../Header/Header";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import { addSubStr } from "../../Constant/Substring";

export default function Deal(props) {
  const [networkDeals, setNetworkDeals] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const { networkSkeleton, setNetworkSkeleton } = useContext(GlobalContext);

  const getNetworkDeals = async () => {
    var res = await getRequest("/dashboard/network/stage/deals", true);
    console.log("res", res);
    var responseData = await res.json();
    console.log("responseData", responseData);

    let newData = [];
    responseData.map((item) =>
      newData.push({
        ...item,
        expand: false,
      })
    );
    setNetworkDeals(newData);
    setNetworkSkeleton(false);
  };
  console.log("lersm", networkDeals);

  const handletoggler = (index) => {
    try {
      console.log("index", index);
      if (networkDeals[index]["expand"]) {
        networkDeals[index]["expand"] = false;
        setNetworkDeals(networkDeals);
        setExpanded(!expanded);
        return;
      } else {
        networkDeals[index]["expand"] = true;
        setNetworkDeals(networkDeals);
        setExpanded(!expanded);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNetworkDeals();
  }, []);
  //igore this for now
  return (
    <>
      <Header />
      <div className="main">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 mt-sm-3">
              <Typography variant="h4">Deals</Typography>
            </div>
            {networkSkeleton ? (
              <NetworksSkeleton />
            ) : (
              <div className="px-sm-0 px-md-2 px-lg-5 pt-4">
                <div className="px-sm-0 px-md-2 px-lg-5 table-responsive">
                  <table className="table border">
                    <thead className="text-center">
                      <tr className="tablebody headHover">
                        <th>
                          <Typography variant="h6">Network Name</Typography>
                        </th>
                        <th>
                          <Typography variant="h6">Startup Name</Typography>
                        </th>
                        <th>
                          <Typography variant="h6">Stage</Typography>
                        </th>
                        <th>
                          <Typography variant="h6">view</Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {networkDeals.map((item, index) => (
                        <>
                          <tr className="tableHover">
                            <td>
                              <h6 className="mt-2">{item.network_name} </h6>
                            </td>
                            <td>
                              <h6 className="mt-2">
                                {item.deal.startup_name.name}{" "}
                              </h6>
                            </td>
                            <td>
                              <h6 className="mt-2 ">{item.stage} </h6>
                            </td>

                            <td>
                              <Button
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseExample"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                                variant="outlined"
                                size="small"
                                onClick={() => handletoggler(index)}
                              >
                                {/* {item.expand ? "hide" : "show"} */}
                                Show
                              </Button>
                            </td>
                          </tr>
                          {item.expand && (
                            <td colSpan={4}>
                              {/* <table>
                              <tr>
                                <td>
                                  <div>Purpose of Fund:</div>{" "}
                                </td>
                                <td> {item.deal.purpose_of_fund} </td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Funding Amount:</div>{" "}
                                </td>
                                <td>{item.deal.fund_expecting}</td>
                              </tr>
                            </table> */}

                              <div className="container px-sm-5 px-md-4 px-lg-5">
                                <div className=" dealsInner px-sm-5 px-md-4 px-lg-5">
                                  <div className="row px-sm-5 px-md-4 px-lg-5">
                                    <div className="col-6 mb-3">
                                      Purpose of Fund:
                                    </div>
                                    <div className="col-6">
                                      {item.deal.purpose_of_fund}
                                    </div>
                                    <div className="col-6 mb-3">
                                      Fund Expected:
                                    </div>
                                    <div className="col-6">
                                      {item.deal.fund_expecting}
                                    </div>
                                    <div className="col-6 mb-3">Stage:</div>{" "}
                                    <div className="col-6">
                                      {" "}
                                      {item.deal.stage}
                                    </div>
                                    <div className="col-6 mb-3">Date:</div>{" "}
                                    <div className="col-6">
                                      {item.deal.created_on}
                                    </div>
                                    <div className="col-6 mb-2">
                                      Description:
                                    </div>
                                    <div className="col-6">
                                      {addSubStr(item.deal.desc, 25)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
