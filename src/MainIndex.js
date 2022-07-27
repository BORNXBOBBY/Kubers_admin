import { Person } from "@material-ui/icons";
import { CellTower, MonetizationOn, Rocket } from "@mui/icons-material";
import { Typography, Card } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import { getRequest } from "./Constant/apiCall";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./MainIndex.css";
import { useState, useEffect } from "react";

export default function MainIndex() {
  const [dashboard, setDashboard] = useState([]);

  const getDashboard = async () => {
    try {
      var res = await getRequest("/dashboard/admin/home", true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      setDashboard(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  console.log(dashboard);

  const data = [
    { name: "Jan 2022", uv: 400, price: 400, val: 1000 },
    { name: "Jun 2022", uv: 100, price: 800, val: 9000 },
    { name: "Feb 2022", uv: 300, price: 450, val: 2000 },
    { name: "May 2022", uv: 200, price: 750, val: 8000 },
    { name: "Mar 2022", uv: 200, price: 500, val: 3000 },
    { name: "Jun 2022", uv: 100, price: 650, val: 6000 },
    { name: "Apr 2022", uv: 100, price: 550, val: 4000 },
    { name: "Apr 2022", uv: 100, price: 700, val: 7000 },
  ];
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row ">
            <Typography variant="h4" sx={{ mt: 3 }}>
              Dashboard{" "}
            </Typography>
            <div className="col-sm-6 mt-2  col-md-6 col-lg-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div className="unique-classname">
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Network
                    </Typography>
                    <Typography variant="button" component="h2">
                      {dashboard.total_network?.total}
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <CellTower />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-6 col-lg-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div className="unique-classname1">
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Startup
                    </Typography>
                    <Typography variant="button" component="h2">
                      {dashboard?.total_startup?.total}
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <Rocket />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-6 col-lg-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div className="unique-classname2">
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Investor
                    </Typography>
                    <Typography variant="button" component="h2">
                      {dashboard?.total_investors?.total}
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <Person />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-6 col-lg-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div className="unique-classname3">
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Deals
                    </Typography>
                    <Typography variant="button" component="h2">
                      {" "}
                      {dashboard.deals_count?.total}
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <MonetizationOn />
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* <div>
            <div className="mt-5">
              <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="price"
                  stroke="#82ca9d"
                />
              </LineChart>
            </div>
            <div className="mt-5">
              <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="val" ke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
