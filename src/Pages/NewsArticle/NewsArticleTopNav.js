import React from "react";
import { Link } from "react-router-dom";

export default function NewsArticleTopNav() {
  const current = window.location.pathname;
  return (
    <div className="d-flex border-bottom">
      <span className="">
        {" "}
        <Link
          className={`${
            current === "/news-article" ? "topLink-active" : "topLink"
          }`}
          to="/news-article"
        >
          Add News Article
        </Link>
      </span>
      <span className="">
        <Link
          className={`${
            current === "/edit-article" ? "topLink-active" : "topLink"
          }`}
          to="/edit-article"
        >
          Edit News Article
        </Link>
      </span>
    </div>
  );
}
