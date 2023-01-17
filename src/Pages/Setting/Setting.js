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
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../../Header/Header";
import "./Setting.css";
import { Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import "../Setting/Setting.css";

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
              <Typography variant="caption">
                <Link className="linkedit" to="/profile">
                  {" "}
                  Profile{" "}
                </Link>
                <ChevronRight /> setting <ChevronRight />
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-11 mt-3">
              <div className="row">
                <div className="col-sm-12 ">
                  <div>
                    <Typography sx={{ mb: 0, fontFamily: "Ubuntu" }} variant="h3">
                      Personal Info
                    </Typography>
                    <small className="text-info">
                      Here you can see your deatils and update info.
                    </small>
                  </div>
                </div>
                <div className="col-sm-12 mt-4">
                  <form>
                    
                      <CardContent>
                        <div className="row mx-sm-5">
                          <div className="col-sm-6">
                            <div className="row">
                              <div className="col-4">
                                <Avatar
                                  sx={{ width: "100px", height: "100px" }}
                                  src="https://i.ibb.co/Tm92ZWW/user.png"
                                />
                              </div>
                              <div className="col-2 mt-4">
                                {/* <Button
                                  variant="contained"
                                  startIcon={<Edit />}
                                  color="secondary"
                                >
                                  Edit 
                                </Button> */}
                                <Tooltip
                                  placement="top"
                                  title="change Profile here"
                                >
                                  <IconButton sx={{marginLeft: "-50px"}}>
                                    <Edit sx={{Color: "#0e2238"}} />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <InputLabel sx={{ mt: 3 , fontWeight: "900" }}>User Name</InputLabel>
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
                            <InputLabel sx={{ mt: 3 , fontWeight: "900"  }}>First Name</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="first name"
                              autoFocus
                              variant="contained"
                            />
                          </div>
                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 , fontWeight: "900"  }}>Last Name</InputLabel>
                            <Input
                              fullWidth
                              type="text"
                              placeholder="last name"
                              autoFocus
                              variant="contained"
                            />
                          </div>

                          <div className="col-sm-6">
                            <InputLabel sx={{ mt: 3 , fontWeight: "900"  }}>Email</InputLabel>
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
                            <InputLabel sx={{ mt: 3 , fontWeight: "900"  }}>Gender</InputLabel>
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
                              <InputLabel sx={{ mt: 3 , fontWeight: "900"  }}>Password</InputLabel>
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
                    
                    <div className="flex submitbtn mt-3 ">
                      <Button
                        className="mx-3"
                        variant="contained"
                        color="default"
                        size="small"
                      >
                        Cancel
                      </Button>
                      <Button style={{backgroundColor: "#0e2238", color: "white"}} variant="contained"  size="small">
                        Submit
                      </Button>
                    </div>
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
