import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="main">
        <Typography variant="caption">Profile</Typography>
        <div className="container">
          <div className="row py-2">
            <h3 className="text-center">Profile</h3>
            <div className="col-12 rounded shadow">
              <div className="row p-4">
                <div className="col-12 col-md-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-9">
                  <Box>
                    <div className="row">
                      <div className="col-6 mt-3">
                        <TextField
                          className="w-100"
                          id="outlined-disabled"
                          label="Name"
                          variant="outlined"
                          value="Anurag Verma"
                        >
                          Name
                        </TextField>
                      </div>
                      <div className="col-6 mt-3">
                        <TextField
                          className="w-100"
                          id="outlined-disabled"
                          label="Email"
                          variant="outlined"
                          value="abcdefghijklmn09876@gmail.com"
                        >
                          Email
                        </TextField>
                      </div>
                      <div className="col-6 mt-3">
                        <TextField
                          className="w-100"
                          id="outlined-disabled"
                          label="Mobile"
                          variant="outlined"
                          value="78787836676786"
                        >
                          Mobile
                        </TextField>
                      </div>
                      <div className="col-6 mt-3">
                        <TextField
                          className="w-100"
                          id="outlined-disabled"
                          label="Gender"
                          variant="outlined"
                          value="Male"
                        >
                          Male
                        </TextField>
                      </div>
                      <div className="col-6 mt-3">
                        <TextField
                          className="w-100"
                          id="outlined-disabled"
                          label="LinkedIn"
                          variant="outlined"
                          value="www.linkedin.in"
                        >
                          LinkedIn
                        </TextField>
                      </div>
                      <div className="col-6 mt-3 text-end">
                        <Link to="/setting" style={{ textDecoration: "none" }}>
                          <Button variant="outlined" color="primary">
                            Edit Info
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
