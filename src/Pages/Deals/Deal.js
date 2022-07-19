import { Button } from "@material-ui/core";
import { imageListItemBarClasses, Tooltip, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getRequest } from "../../Constant/apiCall";
// import GlobalContext from "../../Context/GlobalContext";
import Header from "../../Header/Header";
import NetworksSkeleton from "../Skeleton/NetworksSkeleton";
import { addSubStr } from "../../Constant/Substring";
import { Link } from "react-router-dom";
import NetworkEmpty from "../Empty/NetworkEmpty";

export default function Deal(props) {
  const [networkDeals, setNetworkDeals] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

  // const { networkSkeleton, setNetworkSkeleton } = useContext(GlobalContext);
  const [dealSkeleton, setDealSkeleton] = useState(false);

  const getNetworkDeals = async () => {
    try {
      setDealSkeleton(true);
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
      setDealSkeleton(false);
    } catch (err) {
      console.log("err", err);
    }
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

  const current = window.location.pathname;

  useEffect(() => {
    getNetworkDeals();
  }, []);
  //igore this for now
  return (
    <>
      <Header />
      <div className="main">
        <div className="container ">
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
          </div>
          <div className="row">
            <div className="col-sm-12 mt-sm-3">
              <Typography variant="h4">Deals</Typography>
            </div>
            {dealSkeleton ? (
              <NetworksSkeleton />
            ) : (
              <>
                {networkDeals.length > 0 ? (
                  <>
                    <div className="px-sm-0 px-md-2 px-lg-5 pt-4">
                      <div className="px-sm-0 px-md-2 px-lg-5 table-responsive">
                        <table className="table border">
                          <thead className="text-center">
                            <tr className="tablebody headHover">
                              <th>
                                <Typography variant="h6">
                                  Network Name
                                </Typography>
                              </th>
                              <th>
                                <Typography variant="h6">
                                  Startup Name
                                </Typography>
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
                                    <h6 className="mt-2">
                                      {item.network_name}{" "}
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="mt-2">
                                      {item.deal.startup_name.name}{" "}
                                    </h6>
                                  </td>
                                  <td>
                                    <h6
                                      style={{ textTransform: "capitalize" }}
                                      className="mt-2"
                                    >
                                      {item.stage.replace("_", " ")}{" "}
                                    </h6>
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
                                      {item.expand ? "hide" : "show"}
                                      {/* Show */}
                                    </Button>
                                  </td>
                                </tr>
                                {item.expand && (
                                  <td colSpan={4}>
                                    <div className="container px-sm-5 px-md-4 px-lg-5">
                                      <div className=" dealsInner px-sm-5 px-md-4 px-lg-5">
                                        <div className="row px-sm-5 px-md-4 px-lg-5">
                                          <div className="col-6 mb-3">
                                            Purpose of Fund:
                                          </div>
                                          <div className="col-6">
                                            {addSubStr(
                                              item.deal.purpose_of_fund,
                                              30
                                            )}
                                          </div>
                                          <div className="col-6 mb-3">
                                            Fund Expected:
                                          </div>
                                          <div className="col-6">
                                            {item.deal.fund_expecting}
                                          </div>
                                          <div className="col-6 mb-3">
                                            Stage:
                                          </div>{" "}
                                          <div
                                            style={{
                                              textTransform: "capitalize",
                                            }}
                                            className="col-6"
                                          >
                                            {" "}
                                            {item.deal.stage}
                                          </div>
                                          <div className="col-6 mb-3">
                                            Date:
                                          </div>{" "}
                                          <div className="col-6">
                                            {new Date(
                                              item.deal.created_on
                                            ).toLocaleDateString()}
                                          </div>
                                          <div className="col-6 mb-2">
                                            Description:
                                          </div>
                                          <Tooltip
                                            placement="top-start"
                                            title={<h6> {item.deal.desc}</h6>}
                                            open={showToolTip}
                                            onClose={() =>
                                              setShowToolTip(false)
                                            }
                                            onOpen={() => setShowToolTip(true)}
                                          >
                                            <div
                                              className="col-6"
                                              onTouchStart={() =>
                                                setShowToolTip(!showToolTip)
                                              }
                                            >
                                              {addSubStr(item.deal.desc, 25)}
                                            </div>
                                          </Tooltip>
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
                  </>
                ) : (
                  <NetworkEmpty />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
