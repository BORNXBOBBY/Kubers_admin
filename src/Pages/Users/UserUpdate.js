import React, { useContext, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import Header from "../../Header/Header";
import { getRequest, postRequest } from "../../Constant/apiCall";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function UserUpdate(props) {
  const [userDetails, setUserDetails] = useState([]);
  const [toggleUsers, setToggleUsers] = useState("verified");

  var {id} = useParams()

  const getUserDetails = async () => {
    const res = await getRequest("/auth/user/update/" + id, true);
    const responseData = await res.json();
    console.log("res", responseData, res.status);
    if (res.status === 200) setUserDetails(responseData);
  };

  const EmailVerify = async () => {
    try {
      let data = {
        email_verified: userDetails.email_verified ? false : true,
      };
      var res = await postRequest(
        `/auth/user/update/${id}`,
        JSON.stringify(data),
        "PATCH",
        true
      );

      var responseData = await res.json();
      console.log("res", responseData);
      if (res.status === 200) {
        getUserDetails();
        if (responseData.email_verified === true) {
          toast.success("Verified!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("Unverified!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.success("Unsuccessful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="main">
      <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <div className="rounded   p-3">
                <h2 className="text-center"  style={{fontWeight: 700 , color: "#0e2238"}}>User Details</h2>
                <hr />
                <div className="row">
                  <h5 className="ps-1 ps-md-4" style={{ color: "#0e2238", fontWeight: "900" }}>
                    Verify / Unverify Email :-{" "}
                  </h5>
                  <Box>
                    <div className="row px-4 mt-3">
                      <div className="col-md-6 mt-3">
                        <label className="form-label" style={{fontWeight: 600}}> Full Name</label>
                        <input
                          type=""
                          className="form-control"
                          value={userDetails.full_name}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label " style={{fontWeight: 600}}>Email</label>
                        <input
                          type=""
                          className="form-control"
                          value={userDetails.email}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label"  style={{fontWeight: 600}}>Username</label>
                        <input
                          type=""
                          className="form-control"
                          value={userDetails.username}
                        />
                      </div>
                      <div className="col-md-6 mt-3">
                        <label className="form-label"  style={{fontWeight: 600}}>Mobile</label>
                        <input
                          type=""
                          className="form-control"
                          value={userDetails.mobile}
                        />
                      </div>
                      <div style={{display:'flex', justifyContent:'end'}} className="mt-4"  >
                      {userDetails.email_verified ? (
                        <div  >
                          <Button
                            onClick={() => EmailVerify()}
                            variant="outlined"
                            className="px-4"
                            style={{
                              color: "red",
                              border: "1px solid red",
                            }}
                            //   size="small"
                          >
                            Unverify Email
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => EmailVerify()}
                          style={{
                            color: "#1976d2",
                            border: "1px solid #1976d2",
                          }}
                          variant="outlined"
                          className="mb-md-3"
                          //   size="small"
                        >
                          Verify Email
                        </Button>
                      )}
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
