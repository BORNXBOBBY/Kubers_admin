import React, { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, IconButton } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import "./Search.css";
import SearchBar from "material-ui-search-bar";
import { BsFilterRight } from "react-icons/bs";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
// import { getRequest } from "../../components/Constants/ApiCall";
import { getRequest } from "../../Constant/apiCall";
// import { addSubStr } from "../../components/Constants/Tooltip";
// import { api_url } from "../../components/Constants/constant";
import { api_url } from "../../Constant/ConstantApi";
import { Link } from "react-router-dom";
import { BsGeoAltFill, BsGraphUp } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdMargin } from "react-icons/md";
import Header from "../../Header/Header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Search() {
  const [sidebar, setSidebar] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [geography, setGeography] = useState([]);
  const [economySector, setEconomySector] = useState([]);
  const [emergingSector, setEmergingSector] = useState([]);
  const [emergingTechnology, setEmergingTechnology] = useState([]);
  const [productStatus, setProductStatus] = useState([]);
  const [network, setNetwork] = useState([]);
  const [startup, setStartup] = useState([]);
  const [def, setDef] = useState({
    default_1: true,
    default_2: false,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getFocusArea = async (value) => {
    try {
      var res = await getRequest(`/focus-area/${value}`);
      var responseData = await res.json();
      console.log("type", value, responseData);
      setFilterValue(responseData);
    } catch (err) {
      // console.log("err", err);
    }
  };

  const getNetwork = async (url) => {
    try {
      var res = await fetch(
        `${url ? url : `${api_url}/dashboard/list/network`}`
      );
      var response = await res.json();
      console.log("net", response);
      setNetwork(response);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getStartup = async (url) => {
    try {
      var res = await fetch(
        `${url ? url : `${api_url}/dashboard/list/startup`}`
      );
      var response = await res.json();
      console.log("startup", response);
      setStartup(response);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleNetworkSearch = (newValue) => {
    console.log("enter in search");
    console.log(newValue);
    if (def.default_1) {
      var url = new URL(
        `${api_url}/list/network${newValue ? `?search=${newValue}` : ""}`
      );
    } else {
      url = new URL(
        `${api_url}/list/startup${newValue ? `?search=${newValue}` : ""}`
      );
    }
    if (geography) {
      geography.map((item) => url.searchParams.append("g_name", item.id));
    }
    if (economySector) {
      economySector.map((item) => url.searchParams.append("ecs_name", item.id));
    }
    if (emergingSector) {
      emergingSector.map((item) => url.searchParams.append("es_name", item.id));
    }
    if (emergingTechnology) {
      emergingTechnology.map((item) =>
        url.searchParams.append("et_name", item.id)
      );
    }
    if (productStatus) {
      productStatus.map((item) => url.searchParams.append("p_name", item.id));
    }
    if (def.default_1) {
      getNetwork(url);
    } else {
      getStartup(url);
    }

    console.log("url", url);
  };

  useEffect(() => {
    handleNetworkSearch();
  }, [
    geography,
    economySector,
    emergingSector,
    emergingTechnology,
    productStatus,
  ]);

  useEffect(() => {
    getNetwork();
    getStartup();
  }, []);

  const handleFilterType = (type, value) => {
    setFilterType(type);
    getFocusArea(value);
    handleOpen();
  };

  const handleCheck = (item) => {
    console.log("item", item);
    if (filterType === "Geography") {
      if (geography.includes(item)) {
        console.log("ener");
        setGeography(geography.filter((g) => g.id !== item.id));
      } else {
        setGeography([...geography, item]);
      }
    }
    if (filterType === "Economy Sector") {
      if (economySector.includes(item)) {
        console.log("ener");
        setEconomySector(economySector.filter((ec) => ec.id !== item.id));
      } else {
        setEconomySector([...economySector, item]);
      }
    }
    if (filterType === "Emerging Sector") {
      if (emergingSector.includes(item)) {
        console.log("ener");
        setEmergingSector(emergingSector.filter((es) => es.id !== item.id));
      } else {
        setEmergingSector([...emergingSector, item]);
      }
    }
    if (filterType === "Emerging Technology") {
      if (emergingTechnology.includes(item)) {
        console.log("ener");
        setEmergingTechnology(
          emergingTechnology.filter((et) => et.id !== item.id)
        );
      } else {
        setEmergingTechnology([...emergingTechnology, item]);
      }
    }
    if (filterType === "Product Status") {
      if (productStatus.includes(item)) {
        console.log("ener");
        setProductStatus(productStatus.filter((p) => p.id !== item.id));
      } else {
        setProductStatus([...productStatus, item]);
      }
    }
  };

  console.log("geo", geography);

  console.log("net", network);
  return (
    <>
      <Header />
      <div className="main">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4 col-lg-3 m-0 p-0 ps-4 fixed_side">
              <div
                className={`shadow rounded filter_fixed ${
                  sidebar ? "sidebar_togg_true" : "sidebar_togg"
                }`}
              >
                <div className="d-flex justify-content-between">
                  <h5 className="ps-4 pt-4">Filter</h5>
                  <IconButton
                    className="d-block d-md-none"
                    onClick={() => {
                      setSidebar(!sidebar);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>{" "}
                <div className="flowing">
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <h6>Filter by Type</h6>
                    <FormGroup style={{ paddingLeft: "10px" }}>
                      <FormControlLabel
                        onClick={() =>
                          setDef({ default_1: true, default_2: false })
                        }
                        control={
                          <Checkbox
                            style={{ color: "white" }}
                            checked={def.default_1}
                          />
                        }
                        label="Networks"
                      />
                      <FormControlLabel
                        onClick={() =>
                          setDef({ default_1: false, default_2: true })
                        }
                        control={
                          <Checkbox
                            style={{ color: "white" }}
                            checked={def.default_2}
                          />
                        }
                        label="Startups"
                      />
                    </FormGroup>
                  </div>
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <h6>Filter by Focus-Area</h6>
                    <div className="geography_filter">
                      <div className="d-flex justify-content-between align-items-start">
                        <p className="p-0">
                          {" "}
                          <span className="search_ico">
                            <BsGeoAltFill />
                          </span>{" "}
                          Geography
                        </p>
                        <IconButton
                          onClick={() =>
                            handleFilterType("Geography", "geography")
                          }
                          style={{ marginRight: "10px" }}
                          size="small"
                        >
                          <AddIcon style={{ color: "white" }} />
                        </IconButton>

                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={open}>
                            <Box sx={style}>
                              <Typography
                                id="transition-modal-title"
                                variant="h4"
                                component="h2"
                                className="text-center"
                              >
                                {filterType}
                              </Typography>
                              <IconButton
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                }}
                                onClick={handleClose}
                              >
                                <CloseIcon />
                              </IconButton>
                              <FormGroup
                                style={{
                                  paddingLeft: "10px",
                                  overflow: "auto",
                                  maxHeight: "60vh",
                                }}
                              >
                                {filterValue.map((item, id) => (
                                  <FormControlLabel
                                    key={id}
                                    control={
                                      <Checkbox
                                        onClick={() => handleCheck(item)}
                                      />
                                    }
                                    label={item.name}
                                  />
                                ))}
                              </FormGroup>
                            </Box>
                          </Fade>
                        </Modal>
                      </div>
                      <div className="mt-1">
                        <ul className="d-inline-block">
                          {geography.map((item, id) => (
                            <li
                              key={id}
                              className="ms-1 mt-1 py-1 d-inline-block align-items-center"
                            >
                              {item.name}
                              <IconButton
                                onClick={() =>
                                  setGeography(
                                    geography.filter(
                                      (geo) => geo.id !== item.id
                                    )
                                  )
                                }
                                size="small"
                              >
                                <CancelIcon
                                  style={{
                                    fontSize: "14px",
                                    color: "white",
                                  }}
                                />
                              </IconButton>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <div className="geography_filter">
                      <div className="d-flex justify-content-between align-items-start">
                        <p className="p-0">
                          {" "}
                          <span className="search_ico">
                            <MdMargin />
                          </span>{" "}
                          Economy Sector
                        </p>
                        <IconButton
                          onClick={() =>
                            handleFilterType("Economy Sector", "economy-sector")
                          }
                          style={{ marginRight: "10px" }}
                          size="small"
                        >
                          <AddIcon style={{ color: "white" }} />
                        </IconButton>
                      </div>
                      <div className="mt-1">
                        <ul className="d-inline-block">
                          {economySector.map((item, id) => (
                            <li
                              key={id}
                              className="ms-1 mt-1 py-1 d-inline-block align-items-center"
                            >
                              {item.name}
                              <IconButton
                                onClick={() =>
                                  setEconomySector(
                                    economySector.filter(
                                      (eco) => eco.id !== item.id
                                    )
                                  )
                                }
                                size="small"
                              >
                                <CancelIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                />
                              </IconButton>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <div className="geography_filter">
                      <div className="d-flex justify-content-between align-items-start">
                        <p className="p-0">
                          {" "}
                          <span className="search_ico">
                            <BsGraphUp />
                          </span>{" "}
                          Emerging Sector
                        </p>
                        <IconButton
                          onClick={() =>
                            handleFilterType(
                              "Emerging Sector",
                              "emerging-sector"
                            )
                          }
                          style={{ marginRight: "10px" }}
                          size="small"
                        >
                          <AddIcon style={{ color: "white" }} />
                        </IconButton>
                      </div>
                      <div className="mt-1">
                        <ul className="d-inline-block">
                          {emergingSector.map((item, id) => (
                            <li
                              key={id}
                              className="ms-1 mt-1 d-inline-block align-items-center"
                            >
                              {item.name}
                              <IconButton
                                onClick={() =>
                                  setEmergingSector(
                                    emergingSector.filter(
                                      (eme) => eme.id !== item.id
                                    )
                                  )
                                }
                                size="small"
                              >
                                <CancelIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                />
                              </IconButton>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <div className="geography_filter">
                      <div className="d-flex justify-content-between align-items-start">
                        <p className="p-0">
                          {" "}
                          <span className="search_ico">
                            <GiProgression />
                          </span>{" "}
                          Emerging Technology
                        </p>
                        <IconButton
                          onClick={() =>
                            handleFilterType(
                              "Emerging Technology",
                              "emerging-technology"
                            )
                          }
                          style={{ marginRight: "10px" }}
                          size="small"
                        >
                          <AddIcon style={{ color: "white" }} />
                        </IconButton>
                      </div>
                      <div className="mt-1">
                        <ul className="d-inline-block">
                          {emergingTechnology.map((item, id) => (
                            <li
                              key={id}
                              className="ms-1 mt-1 d-inline-block align-items-center"
                            >
                              {item.name}
                              <IconButton
                                onClick={() =>
                                  setEmergingTechnology(
                                    emergingTechnology.filter(
                                      (emt) => emt.id !== item.id
                                    )
                                  )
                                }
                                size="small"
                              >
                                <CancelIcon
                                  style={{
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                />
                              </IconButton>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr className="fixed_hr" />
                  <div className="filters12 ps-3">
                    <div className="geography_filter">
                      <div className="d-flex justify-content-between align-items-start">
                        <p className="p-0">
                          {" "}
                          <span className="search_ico">
                            <AiFillQuestionCircle />
                          </span>{" "}
                          Product Status
                        </p>
                        <IconButton
                          onClick={() =>
                            handleFilterType("Product Status", "product-status")
                          }
                          className
                          style={{ marginRight: "10px" }}
                          size="small"
                        >
                          <AddIcon style={{ color: "white" }} />
                        </IconButton>
                      </div>
                      <div className="mt-1 pb-2">
                        <ul className="d-inline-block">
                          {productStatus.map((item, id) => (
                            <li
                              key={id}
                              className="ms-1 mt-1 d-inline-block align-items-center"
                            >
                              {item.name}
                              <IconButton size="small">
                                <CancelIcon
                                  onClick={() =>
                                    setProductStatus(
                                      productStatus.filter(
                                        (ps) => ps.id !== item.id
                                      )
                                    )
                                  }
                                  style={{
                                    fontSize: "20px",
                                    color: "white",
                                  }}
                                />
                              </IconButton>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner_results col-md-7 col-lg-8">
              <SearchBar
                onChange={(newValue) => handleNetworkSearch(newValue)}
              />
              <div className="d-block d-md-none my-2 text-right">
                <Button
                  className={`${sidebar ? "d-none" : "d-inline-block"}`}
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  variant="outlined"
                  color="primary"
                >
                  Filter <BsFilterRight />
                </Button>
              </div>

              <div className="Results mt-3">
                <h3>Results :</h3>

                {def.default_1 ? (
                  <div>
                    {network.length > 0 ? (
                      <>
                        {network.map((item, id) => (
                          <div key={id} style={{ width: "90%" }}>
                            <Link to={`network/${item.id}/${item.slug}`}>
                              <div className="network-card result-card rounded text-white p-2 my-1">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-2 network-img me-0">
                                      <img
                                        className="text-center"
                                        width={"90%"}
                                        style={{
                                          borderRadius: "5px",
                                          height: "70px",
                                          objectFit: "cover",
                                          objectPosition: "center",
                                        }}
                                        src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-10">
                                      <h6>{item.name}</h6>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "500",
                                        }}
                                        className="pb-0 mt-1"
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <img
                            style={{ width: "200px" }}
                            src="https://i.ibb.co/HVJNW64/558-5585968-thumb-image-not-found-icon-png-transparent-png.png"
                            alt=""
                            border="0"
                          />
                          <h3 className="text-center">No Result Found</h3>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div>
                    {startup.length > 0 ? (
                      <>
                        {startup.map((item, id) => (
                          <div key={id} style={{ width: "90%" }}>
                            <Link to={`/startup/${item.id}/${item.slug}`}>
                              <div className="network-card rounded result-card p-2 my-1">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-2 network-img me-0">
                                      <img
                                        className="text-center"
                                        width={"90%"}
                                        style={{
                                          borderRadius: "5px",
                                          height: "70px",
                                          objectFit: "cover",
                                          objectPosition: "center",
                                        }}
                                        src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-10">
                                      <h6>{item.name}</h6>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "500",
                                        }}
                                        className="pb-0 mt-1"
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <img
                            style={{ width: "200px" }}
                            src="https://i.ibb.co/HVJNW64/558-5585968-thumb-image-not-found-icon-png-transparent-png.png"
                            alt=""
                            border="0"
                          />
                          <h3 className="text-center">No Result Found</h3>
                        </div>
                      </>
                    )}{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
