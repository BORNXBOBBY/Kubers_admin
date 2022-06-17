import { Lock } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { api_url } from "../Constant/ConstantApi";
import { login_credentials, login_token } from "../Constant/auth";
import GlobalContext from "../Context/GlobalContext";
import { validEmail } from "../Constant/RegexValidation/Regex";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [view, setView] = useState();
  const [loginFormData, setLoginFormData] = useState({
    user_name: "",
    password: "",
  });
  const [loginFormError, setLoginFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const { setUserName, getProfileData } = useContext(GlobalContext);
  const [RedirectUrl] = useState("/dashboard");

  const validateForm = () => {
    setLoginFormError({});
    var formErrorData = {};
    var formValidated = true;
    if (!loginFormData.user_name) {
      formErrorData["user_name_error"] = "User Name can not be blank";
      formValidated = false;
    }
    if (loginFormData.user_name && !validEmail.test(loginFormData.user_name)) {
      formErrorData["user_name_error"] = "Please enter valid email";
      formValidated = false;
    }
    if (!loginFormData.password) {
      formErrorData["password_error"] = "Password can not be blank";
      formValidated = false;
    }
    setLoginFormError(formErrorData);
    return formValidated;
  };

  const signIn = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const url = `${api_url}/auth/login/`;
      let data = {
        username: loginFormData.user_name,
        password: loginFormData.password,
      };

      if (validateForm()) {
        // console.log("Login_Data", data);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseJson = await response.json();
        console.log("res", response.status, response);
        if (response.status === 200 || response.status === 201) {
          // setLoading(true);
          setLoading(false);

          localStorage.setItem(login_credentials, JSON.stringify(responseJson));
          localStorage.setItem(
            login_token,
            JSON.stringify(responseJson["tokens"])
          );
          setTimeout(() => {
            getProfileData(responseJson.id);
            setUserName(responseJson.username);
          }, 2000);
        } else {
          setLoading(false);
          setLoginFormError({});
          var formErrorData = {};
          console.log("logged in failed", response.status, responseJson);
          if (response.status !== 201 || response.status !== 200) {
            if (responseJson.detail) {
              formErrorData["other_error"] = responseJson.detail;
            }

            setLoginFormError(formErrorData);
          }
        }
      }
      console.log("enter");
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  const isAuthenticated = localStorage.getItem(login_token);

  // console.log("login", loginFormError);

  if (isAuthenticated) {
    return <Redirect to={RedirectUrl} />;
  } else {
    return (
      <div>
        <form style={{ marginTop: "8%" }} onSubmit={(e) => signIn(e)}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#6f42c1" }}>
                <Lock />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                Login with your email
              </Typography>
              <TextField
                error={loginFormError.user_name_error}
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={loginFormData.user_name}
                // onChange={(e) =>
                //   setLoginFormData({
                //     ...loginFormData,
                //     user_name: e.target.value,
                //   })
                // }
                onChange={(e) =>
                  setLoginFormData({
                    ...loginFormData,
                    user_name: e.target.value,
                  })
                }
              />
              <span className="text-danger small">
                {loginFormError.user_name_error}
              </span>

              <div className="eye_placement mt-3" style={{ width: "100%" }}>
                <TextField
                  error={loginFormError.password_error}
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  type={view ? "text" : "password"}
                  variant="outlined"
                  value={loginFormData.password}
                  onChange={(e) =>
                    setLoginFormData({
                      ...loginFormData,
                      password: e.target.value,
                    })
                  }
                />
                <div className="eye_icon" onClick={() => setView(!view)}>
                  {view ? <Visibility /> : <VisibilityOff />}
                </div>
              </div>

              <span className="text-danger small">
                {loginFormError.password_error}
              </span>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ width: "100%", backgroundColor: "#6f42c1" }}
                className="mt-3 mb-2"
              >
                {loading ? "loading..." : "Login"}
              </Button>
              <span className="text-danger small">
                {loginFormError.other_error}
              </span>
              {/* <Typography
                className="mt-4 mb-4 text-muted"
                style={{ fontSize: "15px" }}
              >
                You dont have an account?{" "}
                <Link className="linkstyle" to="/signup">
                  Sign Up
                </Link>
              </Typography> */}
            </Box>
          </Container>
        </form>
      </div>
    );
  }
}
