import { Typography } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function NetworksSkeleton() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Typography variant="h4" className="mt-2">
            Network
          </Typography>
          <div className="container">
            <div className="row">
              <div className="offset-sm-9 col-sm-3">
                <Skeleton height={48} width="100%" />
              </div>
            </div>
          </div>
          <div className=" py-3 px-sm-5">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody className="text-center">
                  <tr>
                    <td>
                      <Skeleton height={57} width={222} />
                    </td>
                    <td>
                      <Skeleton height={57} width={268} />
                    </td>
                    <td>
                      <Skeleton height={57} width={342} />
                    </td>

                    <td>
                      <Skeleton height={57} width={164} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
