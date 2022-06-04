import { Button, CardContent, TextField, Typography } from "@material-ui/core";
import { ChevronRight } from "@mui/icons-material";
import { Card } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";

export default function Setting() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="caption" sx={{ mt: 3 }}>
              {" "}
              Setting <ChevronRight size="small" />
            </Typography>
            <div className="col-sm-12 mt-3">
              <Typography variant="h4" sx={{ mt: 5 }}>
                Personal Info
              </Typography>
              <Typography variant="caption" color="primary" sx={{ mt: 3 }}>
                Update your photo and personal here
              </Typography>
              <div className="col-sm-8 mt-3">
                <Card>
                  <CardContent>
                    <form>
                      <div className="row">
                        <div className="col-sm-6  mt-3">
                          <Typography variant="h6" sx={{ mt: 4 }}>
                            First name
                          </Typography>
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            required
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="col-sm-6  mt-3">
                          <Typography variant="h6" sx={{ mt: 4 }}>
                            Last Name
                          </Typography>
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            required
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="col-sm-12 mt-3">
                          <Typography variant="h6" sx={{ mt: 4 }}>
                            Email
                          </Typography>
                          <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            required
                            variant="outlined"
                            size="small"
                          />
                        </div>
                        <div className="col-sm-2 mt-3">
                          <img
                            style={{ width: "94px" }}
                            className="img-fluid rounded-circle"
                            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col-sm-10 mt-5">
                          <div>
                            <input type="file" id="myFile" name="filename" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                <div className="mt-3" style={{ float: "right" }}>
                  <Button className="mx-3" variant="contained">
                    {" "}
                    cancel
                  </Button>
                  <Button variant="contained" color="primary">
                    submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
