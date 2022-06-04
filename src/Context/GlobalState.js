import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          toggle: toggle,
          setToggle: setToggle,
          toggleSidebar: toggleSidebar,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
