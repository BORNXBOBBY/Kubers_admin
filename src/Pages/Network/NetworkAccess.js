import { Typography } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Header/Header";

export default function NetworkAccess() {
  var { id } = useParams();
  var { slug } = useParams();
  const current = window.location.pathname;

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
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
          <div className="row">
            <Typography variant="h4" className="my-4">
              Network Access
            </Typography>
          </div>
          {/* {networkDoc ? (
            <NetworksSkeleton />
          ) : (
            <>
              {startupDoc.length > 0 ? (
                <>
                  
                </>
              ) : (
                <NetworkEmpty />
              )}
            </>
          )} */}
        </div>
      </div>
    </>
  );
}
