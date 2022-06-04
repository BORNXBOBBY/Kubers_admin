import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Login from "./Login/Login";
import MainIndex from "./MainIndex";
import { Network } from "./Pages/Network";
import Setting from "./Pages/Setting/Setting";

function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainIndex />} />
            <Route path="/network" element={<Network />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
