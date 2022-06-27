import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { getRequest } from "../../Constant/apiCall";
import { tableBody } from "./components/TableData";
import Header from "../../Header/Header";
import StartUpTopBar from "./StartUpTopBar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#5161bc",
    fontWeight: "bolder",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

export default function FinancialTableDetails({ role }) {
  const [rowsData, setRowsData] = useState([]);
  const [stages, setStages] = useState();
  const [stage, setStage] = useState();
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState();
  const [editData, setEditData] = useState([]);

  var { id, slug } = useParams();

  const getTableStage = async () => {
    try {
      var res = await getRequest("/dashboard/startup/financial_stage/" + id, true);
      var responseData = await res.json();
      // console.log(res, "financial_stage", responseData);
      if (res.status === 200 || res.status === 201) {
        setStages(responseData);
      } else {
        return stages;
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  // console.log("stat", stages);

  const toggleStage = async (item) => {
    setStage(item);
    var res = await getRequest(
      `/dashboard/startup/financials/details/${id}/${item}`,
      true
    );
    var responseData = await res.json();
    // console.log(res, "financial_table_details", responseData);
    setTab(1);
    setRowsData(responseData);
  };

  useEffect(() => {
    // getTableDetails();
    getTableStage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (item) => {
    // console.log("table_row", item);
    setEditData(item);
    setOpen(true);
  };

  const handleOnChange = (name, val) => {
    setEditData({ ...editData, [name]: val });
  };

  return (
    <>
      <Header />
      <div className="main">
        <StartUpTopBar />
        <div className="col-sm-12 px-0 px-sm-3">
          {tab === 0 && (
            <div>
              {stages?.length ? (
                <section className="service-categories text-xs-center">
                  <div className="container">
                    <div className="row">
                      {stages.map((item, id) => (
                        <div key={id} className="col-md-4 mb-4">
                          <div
                            style={{ height: "180px" }}
                            onClick={() => toggleStage(item)}
                            className="card service-card card-inverse"
                          >
                            <div className="card-block p-3 my-auto">
                              <span
                                style={{ color: "white" }}
                                className="fa fa-question-circle fa-3x"
                              />
                              <h4
                                style={{ textTransform: "capitalize" }}
                                className="card-title"
                              >
                                {item}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ) : (
                <div className="container">
                  <div className="text-center my-4">
                    <div className=" mt-sm-1">
                      <div className="text-center">
                        <img
                          alt=""
                          style={{ width: "15vmax" }}
                          className="img-fluid opacity-3 mb-4 mt-3"
                          src="https://i.ibb.co/Ksn3mNJ/empty.png"
                        />
                        <div style={{ marginBottom: "10px" }}>
                          No Details Added!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {tab === 1 && (
            <>
              <Button
                onClick={() => setTab(0)}
                className="mb-3 float-right"
                variant="outlined"
                color="primary"
              >
                {" "}
                <MdOutlineArrowBackIos
                  style={{ marginTop: "2px" }}
                  className="mr-1"
                />{" "}
                Back
              </Button>
              <h4
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Stage: {stage}{" "}
              </h4>
              <TableContainer style={{ maxHeight: "500px" }} component={Paper}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: 700 }}
                >
                  <TableHead className="financial_edit_section">
                    <TableRow>
                      {rowsData.map((item, index) => (
                        <>
                          {index === 0 ? (
                            <StyledTableCell>Value</StyledTableCell>
                          ) : null}
                          <StyledTableCell
                            className="financial_edit_hover"
                            align="center"
                          >
                            {item.year}
                            {role === "admin" || role === "owner" ? (
                              <div
                                onClick={() => handleOpen(item)}
                                className="finacial_edit_icon"
                              >
                                <i class="fas fa-pencil-alt"></i>
                              </div>
                            ) : null}
                          </StyledTableCell>
                        </>
                      ))}
                    </TableRow>
                  </TableHead>

                  {tableBody.map((table) => (
                    <TableBody className="custom_table_body">
                      {rowsData.map((row, index) => (
                        <>
                          {index === 0 ? (
                            <StyledTableCell
                              style={{ textTransform: "Capitalize" }}
                              component="th"
                              scope="row"
                            >
                              {table.name}
                            </StyledTableCell>
                          ) : null}
                          <StyledTableCell
                            style={{ textTransform: "Capitalize" }}
                            align="center"
                          >
                            {row[`${table.value}`] !== null
                              ? row[`${table.value}`]
                              : "0.000"}
                          </StyledTableCell>
                        </>
                      ))}
                    </TableBody>
                  ))}
                </Table>
              </TableContainer>
            </>
          )}
        </div>
      </div>
    </>
  );
}
