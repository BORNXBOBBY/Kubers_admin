import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { getRequest, postRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import { BsCalendarDate } from "react-icons/bs";
import NewsArticleTopNav from "./NewsArticleTopNav";
import { toast, ToastContainer } from "react-toastify";
import AlertDialog from "../../Constant/components/AlertDialog";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import EditForm from "./EditForm";

export default function EditNewsArticle() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)

  const getNewsFeed = async () => {
    setLoading(true)
    const newsData = await getRequest("/news_article/", true);
    var response = await newsData.json();
    const newNewsData = await response?.map((item) => {
      return { ...item, collapse: false };
    });
    setNewsFeed(newNewsData);
    if(newNewsData) setLoading(false)
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

  const handleDelete = async () => {
    try {
      var res = await postRequest(
        `/news_article/${item["id"]}`,
        "",
        "DELETE",
        true
      );
      console.log("res", res.status);
      if (res.status) {
        toast.success("Deleted Success Fully");
        getNewsFeed();
        handleClose();
      }
    } catch (err) {
      console.log("err");
    }
  };

  const handleEdit = (item) => {
    console.log("item", item);
    setOpenEditModal(true)
  };

  const handleOpen = (item) => {
    setOpen(true);
    setItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setItem({});
  };

  useEffect(() => {
    getNewsFeed();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <AlertDialog
        title="Are you sure you want to delete this article?"
        desc="This will delete this article permanently and this process cannot be undone!"
        open={open}
        setOpen={setOpen}
        handleAgree={handleDelete}
      />
      <EditForm open={openEditModal} setOpen={setOpenEditModal}  />
      <div className="main">
        <NewsArticleTopNav />

       {loading ? <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box> : null}
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto">
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4
                          style={{
                            fontWeight: "550",
                          }}
                        >
                          {item.title}
                        </h4>
                        <div>
                          <IconButton onClick={() => handleEdit(item)}>
                            <Edit
                              style={{ Color: "#0e2238", fontSize: "18px" }}
                            />
                          </IconButton>
                          <IconButton onClick={() => handleOpen(item)}>
                            <DeleteIcon
                              style={{ Color: "#0e2238", fontSize: "18px" }}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid mt-2 rounded"
                        style={{ width: "100%" }}
                      />
                      <span className="text-small d-flex align-items-center mt-1">
                        <BsCalendarDate
                          style={{
                            color: "blue",
                            fontSize: "20px",
                            marginRight: "6px",
                          }}
                        />
                        <span className=" pt-1">
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
                        {item.collapse
                          ? item.desc
                          : item.desc.substring(0, 500)}
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
