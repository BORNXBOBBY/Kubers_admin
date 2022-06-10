import React, { useState, useEffect } from "react";
import { getRequest } from "../Constant/apiCall";
import { login_credentials } from "../Constant/auth";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [toggle, setToggle] = useState(false);
  const [userName, setUserName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [profileDetails, setProfileDetails] = useState([]);
  const [network, setNetwork] = useState([]);

  const getAllNetworkData = async () => {
    try {
      var res = await getRequest("dashboard/networks/not-approved", true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setNetwork(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllNetworkData();
  }, []);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  const getId = async () => {
    try {
      var localData = await JSON.parse(localStorage.getItem(login_credentials));
      getProfileData(localData.id);
    } catch (err) {
      // console.log("er", err);
    }
  };

  const getUserName = async () => {
    try {
      var localData = await JSON.parse(localStorage.getItem(login_credentials));
      setUserName(localData.username);
    } catch (err) {
      // console.log("er", err);
    }
  };

  const getProfileData = async (id) => {
    try {
      var res = await getRequest("/auth/profile/update/" + id, true);
      var responseData = await res.json();
      // console.log("profile", responseData);
      setProfileDetails(responseData);
      setProfilePic(responseData.profile_pic);
      //   setProfile(responseData)
    } catch (err) {
      // console.log("err", err);
    }
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          toggle: toggle,
          setToggle: setToggle,
          toggleSidebar: toggleSidebar,
          setUserName: setUserName,
          getProfileData: getProfileData,
          setNetwork: setNetwork,
          network: network,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
