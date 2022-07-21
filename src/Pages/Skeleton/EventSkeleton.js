import { Card, IconButton } from "@mui/material";
import React from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function EventSkeleton() {
  const [count] = useState([1, 2, 3, 4]);
  return (
    <div>
      <div className="row">
        {count.map((item) => (
          <div className="col-lg-6">
            <Card className="mt-3">
              <div className="d-flex align-items-start m-2">
                <div className="m-4 text-center">
                  <h2 className="mb-0" style={{ color: "#3f51b5" }}>
                    <Skeleton width={67} height={38} />
                  </h2>
                  <p className="small">
                    <Skeleton width={40} height={21} />
                  </p>
                  <div style={{ color: "#3f51b5" }}>
                    <Skeleton width={67} height={20} />
                  </div>
                </div>

                <div
                  style={{ position: "relative" }}
                  className="media-body mt-2"
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "0px",
                    }}
                  >
                    <Skeleton width={24} height={24} />
                  </div>
                  <h5 className="mb-0">
                    <Skeleton width={200} height={24} />
                  </h5>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "gray",
                    }}
                  >
                    <Skeleton width={61} height={20} />
                  </span>

                  <p className="small d-none d-sm-block ">
                    <Skeleton width={391} height={42} />
                  </p>

                  <p className="small d-block d-sm-none ">
                    <Skeleton width="100%" height={42} />
                  </p>

                  <div style={{ position: "absolute" }}>
                    <Skeleton width={100} height={31} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
