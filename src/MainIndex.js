import { Person } from "@material-ui/icons";
import { CellTower, MonetizationOn, Rocket } from "@mui/icons-material";
import { Typography, Card } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./MainIndex.css";

export default function MainIndex() {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row ">
            <Typography variant="h4" sx={{ mt: 3 }}>
              Dashobard{" "}
            </Typography>
            <div className="col-sm-6 mt-2  col-md-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Network
                    </Typography>
                    <Typography variant="button" component="h2">
                      $53,000
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <CellTower />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Startup
                    </Typography>
                    <Typography variant="button" component="h2">
                      $53,000
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <Rocket />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Investor
                    </Typography>
                    <Typography variant="button" component="h2">
                      $53,000
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <Person />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-3">
              <Card className="rounded" sx={{ p: 1 }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ width: "117px" }}
                    >
                      Investment
                    </Typography>
                    <Typography variant="button" component="h2">
                      $53,000
                    </Typography>
                  </div>
                  <div className="p-3 towericon rounded">
                    <MonetizationOn />
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-sm-6 mt-2  col-md-6">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
