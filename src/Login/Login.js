import { ChevronLeft, Lock } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { validEmail } from "../Constant/RegexValidation/Regex";

export default function Login() {
  const [view, setView] = useState();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  console.log(loginFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoginFormData({});
  };

  return (
    <div>
      <form style={{ marginTop: "8%" }} onSubmit={(e) => handleSubmit(e)}>
        <Container component="main" maxWidth="xs">
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
              Login with your email
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address*"
              name="email"
              autoFocus
              value={loginFormData.email}
              onChange={(e) =>
                setLoginFormData({ ...loginFormData, email: e.target.value })
              }
            />
            <FormHelperText id="my-helper-text"></FormHelperText>

            <div className="eye_placement" style={{ width: "100%" }}>
              <TextField
                fullWidth
                type={view ? "text" : "password"}
                margin="normal"
                id="Confirm Password"
                label="Confirm Password*"
                name="cnpassword"
                autoFocus
                value={loginFormData.password}
                onChange={(e) =>
                  setLoginFormData({
                    ...loginFormData,
                    password: e.target.value,
                  })
                }
              />
              <FormHelperText id="my-helper-text"></FormHelperText>
              <div className="eye_icon" onClick={() => setView(!view)}>
                {view ? <Visibility /> : <VisibilityOff />}
              </div>
            </div>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ width: "100%", backgroundColor: "#6f42c1" }}
              className="mt-3 mb-2"
            >
              Submit
            </Button>

            <Typography
              className="mt-4 mb-4 text-muted"
              style={{ fontSize: "15px" }}
            >
              You dont have an account?{" "}
              <Link className="linkstyle" to="/signup">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Container>
      </form>
    </div>
  );
}
