import { Typography } from "@material-ui/core";
import { ChevronRight, Close, Delete } from "@mui/icons-material";
import React from "react";
import Header from "../Header/Header";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";

export const Network = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 250 },

    // { field: "firstName", headerName: "First name", width: 130 },
    // { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "mobileNumber", headerName: "Mobile Number", width: 150 },
    { field: "mobileVerified", headerName: "Mobile Verified", width: 150 },
    { field: "emailVerifiied", headerName: "Email Verified", width: 120 },
    { field: "remove", headerName: "Remove", width: 150 },
  ];
  const rows = [
    {
      id: 1,
      email: "elitekanishkraj@gmail.com",
      lastName: "Snow",
      firstName: "Jon",
      mobileNumber: "9876543210",
      mobileVerified: "Yes",
      emailVerified: "Yes",
      remove: `${(<Close />)}`,
    },
    {
      id: 2,
      email: "testerqjhwghbiekjafh9wekjfhn @gmail.com",
      lastName: "Lannister",
      firstName: "Cersei",
      mobileNumber: "9876543210",
    },
    {
      id: 3,
      email: "testing@gmail.com",
      lastName: "Lannister",
      firstName: "Jaime",
    },
    {
      id: 4,
      email: "starkarya@gmail.com",
      lastName: "Stark",
      firstName: "Arya",
    },
    {
      id: 5,
      email: "Lord@gmail.com",
      lastName: "Targaryen",
      firstName: "Daenerys",
    },
    {
      id: 6,
      email: "Rahil@gmail.com",
      lastName: "Melisandre",
      firstName: "Rahil",
    },
    {
      id: 7,
      email: "ferrara@gmail.com",
      lastName: "Clifford",
      firstName: "Ferrara",
    },
    {
      id: 8,
      email: "Rossini@gmail.com",
      lastName: "Frances",
      firstName: "Rossini",
    },
    {
      id: 9,
      email: "Harvey@gmail.com",
      lastName: "Roxie",
      firstName: "Harvey",
    },
  ];
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="h6" sx={{ mt: 3 }}>
              Network <ChevronRight />
            </Typography>
            <div className="col-sm-12">
              <div style={{ height: 500, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
