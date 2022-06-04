import { Person } from "@material-ui/icons";
import { CellTower, MonetizationOn, Rocket } from "@mui/icons-material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import "./MainIndex.css";

export default function MainIndex() {
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
            <canvas className="canvas" width="700" height="657"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
