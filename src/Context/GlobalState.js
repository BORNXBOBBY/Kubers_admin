import React, { useState, useEffect } from "react";
import { getRequest } from "../Constant/apiCall";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [toggle, setToggle] = useState(false);
  const [userName, setUserName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [profileDetails, setProfileDetails] = useState([]);
  const [network, setNetwork] = useState([]);
  const [toggleSelect, setToggleSelect] = useState("not-aproved");

  const getAllNetworkData = async () => {
    try {
      var res = await getRequest("/dashboard/networks/" + toggleSelect, true);
      // console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setNetwork(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
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
          network: network,
          getAllNetworkData: getAllNetworkData,
          setToggleSelect: setToggleSelect,
          toggleSelect: toggleSelect,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
