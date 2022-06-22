import React from "react";
import { Link, useParams } from "react-router-dom";

export default function StartUpTopBar() {
  const current = window.location.pathname;
  var { slug } = useParams();
  var { id } = useParams();
  return (
    <>
      <div className="d-flex border-bottom">
        <span>
          <Link
            className={`${
              current === `/startup/${id}/${slug}`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/startup/${id}/${slug}`}
          >
            Details
          </Link>
        </span>
        <span>
          <Link
            className={`${
              current === `/startup/${id}/${slug}/startup-doc`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/startup/${id}/${slug}/startup-doc`}
          >
            Documents
          </Link>
        </span>
        <span>
          <Link
            className={`${
              current === `/startup/${id}/${slug}/captable`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/startup/${id}/${slug}/captable`}
          >
            Cap Table
          </Link>
        </span>
        <span>
          <Link
            className={`${
              current === `/startup/${id}/${slug}/team`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/startup/${id}/${slug}/team`}
          >
            Team
          </Link>
        </span>
      </div>
    </>
  );
}
