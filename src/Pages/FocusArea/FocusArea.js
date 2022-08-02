import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getRequest, postRequest } from "../../Constant/apiCall";
import Header from "../../Header/Header";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button } from "@material-ui/core";
import "./FocusArea.css";

export default function FocusArea() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [focusArea, setFocusArera] = useState([]);
  const [activeFocus, setActiveFocus] = useState("economy-sector");
  const [formData, setFormData] = useState();

  const getFocusAreaData = async () => {
    try {
      var res = await getRequest(`/dashboard/${activeFocus}/manage`, true);
      console.log("res", res);
      var responseData = await res.json();
      console.log("resposn", responseData);
      setFocusArera(responseData);
    } catch (error) {}
  };

  const addFocusAreaData = async () => {
    try {
      let data = {
        name: formData,
        slug: formData.toLowerCase().replace(" ", "_"),
      };

      var res = await postRequest(
        `/dashboard/${activeFocus}/manage`,
        JSON.stringify(data),
        "POST",
        true
      );
      onCloseModal();
      console.log("response", res);
    } catch (error) {
      console.log("err", error);
    }
  };

  console.log("render");

  useEffect(() => {
    getFocusAreaData();
  }, [activeFocus]);

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Typography variant="h3"> FocusArea</Typography>
            </div>
            <div className="offset-sm-9 col-sm-3">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setActiveFocus(e.target.value)}
              >
                <option value="economy-sector">Economy Sector</option>
                <option value="emerging-sector">Emerging Sector</option>
                <option value="emerging-tech">Emerging Technology</option>
                <option value="geography">Geography</option>
                <option value="product-status">Product Status</option>
                <option value="area-of-expertise">Area of Expertise</option>
              </select>
            </div>
            <div className="col-sm-12 mt-3">
              <Box className="p-3 rounded" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <Typography
                      style={{ textTransform: "capitalize" }}
                      variant="h5"
                    >
                      {activeFocus.replace("-", " ")}
                    </Typography>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={onOpenModal}
                    >
                      Add Sector
                    </Button>
                    <Modal open={open} onClose={onCloseModal} center id="model">
                      <h4 style={{ textTransform: "capitalize" }}>
                        {activeFocus.replace("-", " ")}
                      </h4>
                      <form>
                        <label>Name:</label>
                        <input
                          onChange={(e) => setFormData(e.target.value)}
                          className="form-control mt-2"
                          type="text"
                        />
                        <div className="text-end">
                          <Button
                            className="mt-2"
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={addFocusAreaData}
                          >
                            Add
                          </Button>
                        </div>
                      </form>
                    </Modal>
                  </div>
                </div>
                <ul>
                  {focusArea.map((item) => (
                    <li
                      className="align-items-baseline"
                      style={{ display: "inline-block", margin: "10px" }}
                    >
                      <span>
                        <RadioButtonChecked style={{ fontSize: "18px" }} />
                      </span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
