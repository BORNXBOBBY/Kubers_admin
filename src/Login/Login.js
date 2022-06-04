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
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form style={{ marginTop: "8%" }}>
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
            <Avatar sx={{ m: 1, bgcolor: "#1a2027" }}>
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
            />
            {/* <FormHelperText className="text-danger">rsdgdf</FormHelperText> */}

            <TextField
              margin="normal"
              fullWidth
              id="password"
              label="Password*"
              name="password"
              autoFocus
            />
            {/* <FormHelperText className="text-danger">rsdgdf</FormHelperText> */}

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ width: "100%", backgroundColor: "#1a2027" }}
              className="mt-3 mb-2"
            >
              Send
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
