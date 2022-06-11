import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function NetworksSkeleton() {
  const [count, setCount] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  return (
    <div>
      <div className=" py-3 px-sm-5">
        <div className="table-responsive">
          <table className="table table-hover">
            <tbody className="text-center">
              <tr className="tablebody">
                <th>
                  <Skeleton height={41} width={209} />
                </th>
                <th>
                  <Skeleton height={41} width={312} />
                </th>
                <th>
                  ​ <Skeleton height={41} width={322} />
                </th>
                <th>
                  <Skeleton height={41} width={156} />
                </th>
              </tr>

              {count.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Skeleton height={57} width={208} />
                  </td>
                  <td>
                    <Skeleton height={57} width={312} />{" "}
                  </td>
                  <td>
                    <Skeleton height={57} width={322} />{" "}
                  </td>

                  <td>
                    <Skeleton height={57} width={155} />
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
