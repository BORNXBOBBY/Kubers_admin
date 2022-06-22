import React from "react";
import { Link, useParams } from "react-router-dom";

export default function NetworkTopbar() {
  const current = window.location.pathname;
  var { id } = useParams();
  var { slug } = useParams();
  return (
    <>
      <div className="main">
        <div className="d-flex border-bottom">
          <span className="">
            {" "}
            <Link
              className={`${
                current === `/network/${id}/${slug}`
                  ? "topLink-active"
                  : "topLink"
              }`}
              to={`/network/${id}/${slug}`}
            >
              Details
            </Link>
          </span>
          <span className="">
            <Link
              className={`${
                current === "/network/network-access"
                  ? "topLink-active"
                  : "topLink"
              }`}
              to="/network/network-access"
            >
              Network Access
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
