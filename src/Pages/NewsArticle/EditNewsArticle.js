import React, { useState } from "react";
import { Edit, Update } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { Typography  } from "@material-ui/core";
import { getRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import { BsCalendarDate } from "react-icons/bs";

export default function EditNewsArticle() {
  const [newsFeed, setNewsFeed] = useState([]);

  const getNewsFeed = async () => {
    const newsData = await getRequest("/news_article/", true);
    var response = await newsData.json();
    const newNewsData = await response?.map((item) => {
      return { ...item, collapse: false };
    });
    setNewsFeed(newNewsData);
  };

  const readmore = (id) => {
    var newData = [...newsFeed];
    if (newData[id]["collapse"]) {
      newData[id]["collapse"] = false;
    } else {
      newData[id]["collapse"] = true;
    }
    setNewsFeed(newData);
  };

  useEffect(() => {
    getNewsFeed();
  }, []);

  return (
    <>
      <Header />
      <div className="main">
      <div className="container">
        <div className="row">
            <div className='col-sm-8 ' >
                <Typography sx={{fontWeight: 500, color: "#0e2238"}} variant="h3"> Edit NewsArticle</Typography>
      <div className="feeds mt-4">
              <div className="feed-cards">
                {newsFeed.map((item, id) => (
                  <div
                    key={id}
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    }}
                    className="p-2 rounded my-1"
                  >
                    <h4
                      style={{
                        fontWeight: "550",
                      }}
                    >
                      {item.title} 
                      <IconButton sx={{justifyContent:"end"}}>
                                    <Edit sx={{Color: "#0e2238"}} />
                                  </IconButton>
                    </h4>
                    <img
                      src={item.image}
                      alt={item.title} 
                      className="img-fluid mt-2 rounded"
                      style={{ width: "100%" }}
                    />
                    <span className="text-small d-flex align-items-center mt-1">
                      <BsCalendarDate
                        style={{ color: "blue", fontSize: "20px" }}
                      />
                      <span className="ml-1 pt-1">
                        {new Date(item.created_time).toDateString([], {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }) +
                          "," +
                          new Date(item.created_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                      </span>
                    </span>
                    <p className="mt-3">
                      {item.collapse ? item.desc : item.desc.substring(0, 500)}
                      {item.collapse ? (
                        <>
                          {item.desc.length > 500 ? (
                            <>
                              <span
                                onClick={() => readmore(id)}
                                style={{
                                  color: "#1976D2",
                                  cursor: "pointer",
                                }}
                              >
                                {" "}
                                Show Less
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ) : (
                        <>
                          {item.desc.length > 500 ? (
                            <>
                              <span
                                onClick={() => readmore(id)}
                                style={{
                                  color: "#1976D2",
                                  cursor: "pointer",
                                }}
                              >
                                {" "}
                                Read More
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </p>
                    {item.link_url && item.link_text ? (
                      <a target="_blank" href={item.link_url}>
                        {" "}
                        {item.link_text}{" "}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

      </div>
        </div>
      </div>
      </div>
    </>
  );
}
