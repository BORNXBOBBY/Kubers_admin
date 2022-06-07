import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

export default function Signup() {
  const [view, setView] = useState();
  return (
    <div>
      <form style={{ marginTop: "6%" }}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              // marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#6f42c1" }}>
              <Lock />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Typography component="h1" variant="caption">
              Looks like you don't have account.
            </Typography>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="First Name*"
                    label="First Name*"
                    name="firstname"
                    autoFocus
                  />
                </div>
                <div className="col-sm-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Last Name"
                    label="Last Name*"
                    name="lastname"
                    autoFocus
                  />
                </div>
                <div className="col-sm-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Phone Number"
                    label="Phone Number*"
                    name="phone"
                    autoFocus
                  />
                </div>
                <div className="col-sm-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Email"
                    label="Email*"
                    name="email"
                    autoFocus
                  />
                </div>
                <div className="col-sm-6">
                  <div className="eye_placement">
                    <TextField
                      fullWidth
                      type={view ? "text" : "password"}
                      margin="normal"
                      id="Password"
                      label="Password*"
                      name="password"
                      autoFocus
                    />
                    <div className="eye_icon" onClick={() => setView(!view)}>
                      {view ? <Visibility /> : <VisibilityOff />}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="eye_placement">
                    <TextField
                      fullWidth
                      type={view ? "text" : "password"}
                      margin="normal"
                      id="Confirm Password"
                      label="Confirm Password*"
                      name="cnpassword"
                      autoFocus
                    />
                    <div className="eye_icon" onClick={() => setView(!view)}>
                      {view ? <Visibility /> : <VisibilityOff />}
                    </div>
                  </div>
                </div>
                <div className=" mx-auto ">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{ width: "100%", backgroundColor: "#6f42c1" }}
                    className="mt-3 mb-2"
                  >
                    Agree and Continue
                  </Button>
                </div>
                {/* <KeyboardBackspaceIcon /> */}
              </div>
            </div>
          </Box>
        </Container>
      </form>
    </div>
  );
}
