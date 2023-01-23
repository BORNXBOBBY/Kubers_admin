import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MentorTopBar() {
  const current = window.location.pathname;
  return (
    <>
      <div className="d-flex border-bottom">
        <span>
          <Link 
          style={{fontWeight: "900", color: "0e2238"}}
            className={`${
              current === `/mentor` ? "topLink-active" : "topLink"
            }`}
            to={`/mentor`}
          >
            Mentor
          </Link> 
        </span>
        <span>
          <Link  style={{fontWeight: "900", color: "0e2238"}}
            className={`${
              current === `/mentor/corporate-profile`
                ? "topLink-active"
                : "topLink"
            }`}
            to={`/mentor/corporate-profile`}
          >
            Corporate Profile
          </Link>
        </span>
      </div>
    </>
  );
}
