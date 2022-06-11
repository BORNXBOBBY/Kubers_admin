import { Typography } from "@mui/material";
import React from "react";

export default function NetworkEmpty() {
  return (
    <div>
      <div className="conatainer">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <img
                style={{ width: "250px", opacity: 0.5 }}
                className="img-fluid"
                src="/img/empty.png"
                alt=""
              />
              <div className="mt-2">
                <Typography variant="button">
                  Nothing to display here.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
