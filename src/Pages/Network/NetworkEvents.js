/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton } from "@material-ui/core";
import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../Header/Header";
import { CustomTooltip } from "../../Constant/CustomTooltip";
import { addSubStr } from "../../Constant/Substring";
import { getRequest } from "../../Constant/apiCall";
import NetworkTopbar from "./NetworkTopbar";

export default function NetworkEvents() {
  const [event, setEvent] = useState([]);
  const [toggle, setToggle] = useState("active");

  const current = window.location.pathname;

  var { slug } = useParams();
  

  const getAllEventData = async () => {
    try {
      var res = await getRequest(`/dashboard/events/${slug}?search=${toggle }`, true);
      var responseData = await res.json();
      console.log(responseData, res.status);
      if (res.status === 200) setEvent(responseData);
      else setEvent([]);
    } catch (err) {
      console.log("er", err);
    }
  };
  const openGoogleCalendar = (
    event_title,
    event_desc,
    event_date,
    event_time
  ) => {
    console.log("inside google calendar");
    const d = new Date(event_date + " " + event_time);
    let start_date = d.toISOString().replace(/-/g, "");
    let url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${event_title}&details=${event_desc}&dates=${start_date}%2F${start_date}`;
    window.open(url, "_blank");
  };

  const getDate = (date) => {
    try {
      // console.log("date", date);
      let newDate = date.split("-");
      // console.log("newData", newDate);
      var Date = newDate[2];
      return Date;
    } catch (err) {
      // console.log("err", err);
    }
  };

  const getMonth = (month) => {
    try {
      var newMonth = month.split("-");
      let monthNumber = parseInt(newMonth[1]);
      // console.log("month", newMonth[1]);
      let monthNames = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let monthName = monthNames[monthNumber];
      return monthName;
    } catch (err) {}
  };

  useEffect(() => {
    getAllEventData();
  }, [toggle]);
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
        <NetworkTopbar />
          <div
            style={{ display: "flex", justifyContent: "end" }}
            className="col-sm-12 mt-3 "
          >
            <div className="col-sm-4">
              <select onChange={(e) => setToggle(e.target.value)} class="form-select" aria-label="Default select example">
                <option  value="active" selected>
                  Active
                </option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>

          <div className="row">
            {event.map((item, id) => (
              <div className="col-lg-6">
                <Card className="mt-3" key={id}>
                  <div className="d-flex align-items-start m-2">
                    <div className="m-4 text-center">
                      <h2 className="mb-0" style={{ color: "#3f51b5" }}>
                        {getDate(item.event_date)}
                      </h2>
                      <p className="small"> {getMonth(item.event_date)}</p>
                      <div style={{ color: "#3f51b5" }}>
                        <time> {item.event_time} </time>
                      </div>
                    </div>

                    <div
                      style={{ position: "relative" }}
                      className="media-body mt-2"
                    >
                      <div
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "5px",
                        }}
                      >
                        <CustomTooltip title="Add to Calender" placement="top">
                          <a
                            onClick={() =>
                              openGoogleCalendar(
                                item.event_title,
                                item.event_desc,
                                item.event_date,
                                item.event_time
                              )
                            }
                          >
                            <IconButton size="small">
                              <AddIcon />
                            </IconButton>
                          </a>
                        </CustomTooltip>
                      </div>
                      <h5 className="mb-0"> {item.event_title} </h5>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "gray",
                        }}
                      >
                        {addSubStr(item.network, 25)}
                      </span>

                      <CustomTooltip
                        title={
                          <p
                            style={{
                              fontSize: "12px",
                              marginBottom: "0",
                            }}
                          >
                            {item.event_desc}
                          </p>
                        }
                        placement="bottom"
                      >
                        <p className="small d-none d-sm-block ">
                          {addSubStr(item.event_desc, 80)}
                        </p>
                      </CustomTooltip>
                      <CustomTooltip
                        title={
                          <p
                            style={{
                              fontSize: "14px",
                              marginBottom: "0",
                            }}
                          >
                            {item.event_desc}
                          </p>
                        }
                        placement="bottom"
                        enterTouchDelay={0}
                      >
                        <p className="small d-block d-sm-none ">
                          {addSubStr(item.event_desc, 45)}
                        </p>
                      </CustomTooltip>

                      {toggle !== 'expired' && <div style={{ position: "absolute" }}>
                        <a
                          target="_blank"
                          href={item.event_url}
                          rel="noreferrer"
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                          >
                            Join Event
                          </Button>
                        </a>
                      </div>}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
