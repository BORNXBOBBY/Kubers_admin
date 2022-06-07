import { Edit, Update } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  IconButton,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

import { Button } from "@material-ui/core";
import Header from "../Header/Header";

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

export default function Setting() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Typography variant="caption"> Profile</Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-11 mt-3">
              <div className="row">
                <div className="col-sm-12 ">
                  <div>
                    <Typography sx={{ mb: 0 }} variant="h3">
                      Personal Info
                    </Typography>
                    <small className="text-info">
                      Here you can see your deatils and update info.
                    </small>
                  </div>
                </div>
                <div className="col-sm-12 mt-4">
                  <form>
                    <Card>
                      <CardContent>
                        <div className="row mx-sm-5">
                          <div className="col-sm-6">
                            <div className="row">
                              <div className="col-6">
                                <Avatar
                                  sx={{ width: "100px", height: "100px" }}
                                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                                />
                              </div>
                              <div className="col-6 mt-4">
                                <Link to="/setting">
                                  {" "}
                                  <Button
                                    variant="contained"
                                    startIcon={<Edit />}
                                    color="secondary"
                                  >
                                    Edit
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 }}>User Name</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="user name"
                              autoFocus
                              variant="contained"
                              readOnly
                            />
                          </div>
                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 }}>First Name</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="first name"
                              autoFocus
                              variant="contained"
                            />
                          </div>
                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 }}>Last Name</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="last name"
                              autoFocus
                              variant="contained"
                            />
                          </div>

                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 }}>Email</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="email"
                              autoFocus
                              variant="contained"
                              readOnly
                            />
                          </div>
                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 }}>Gender</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="gender"
                              autoFocus
                              variant="contained"
                            />
                          </div>
                          <div className="col-sm-6">
                            <div>
                              <InputLabel sx={{ mt: 3 }}>Password</InputLabel>
                              <Input
                                fullWidth
                                type="text"
                                placeholder="password"
                                autoFocus
                                variant="contained"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
