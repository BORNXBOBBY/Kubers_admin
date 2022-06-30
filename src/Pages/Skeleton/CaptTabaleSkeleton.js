import { Typography } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CaptTabaleSkeleton() {
  const [count, setCount] = React.useState([
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
  ]);
  return (
    <div>
      <div className="px-sm-0 px-md-2 px-lg-1 pt-4">
        <div className="px-sm-0 px-md-2 px-lg-5 table-responsive">
          <table className="table border">
            <thead className="text-center">
              <tr className="tablebody headHover">
                <th className="pb-4">
                  <Skeleton width={162} height={32} />
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    <Skeleton width={127} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    {" "}
                    <Skeleton width={96} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    {" "}
                    <Skeleton width={96} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    <Skeleton width={101} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    <Skeleton width={76} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    <Skeleton width={82} height={32} />
                  </Typography>
                </th>
                <th className="pb-4">
                  <Typography variant="h6">
                    <Skeleton width={83} height={32} />
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {count.map((item, id) => (
                <tr className="tableHover">
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={162} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={127} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={96} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={128} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={102} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={76} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={82} height={25} />
                    </h6>
                  </td>
                  <td>
                    <h6 className="mt-2">
                      <Skeleton width={83} height={25} />
                    </h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
