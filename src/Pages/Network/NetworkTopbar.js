import React from "react";
import { Link, useParams } from "react-router-dom";

export default function NetworkTopbar() {
  const current = window.location.pathname;
  var { id } = useParams();
  var { slug } = useParams();
  return (
    <>
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
              current === `/network/${id}/${slug}/network-access`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/network/${id}/${slug}/network-access`}
          >
            Role
          </Link>
        </span>
        <span className="">
          <Link
            className={`${
              current === `/network/${id}/${slug}/events`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/network/${id}/${slug}/events`}
          >
            Events
          </Link>
        </span>
      </div>
    </>
  );
}
