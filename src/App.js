import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Login from "./Login/Login";
import MainIndex from "./MainIndex";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile";
import Signup from "./Login/Signup";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { Network } from "./Pages/Network/Network";

function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={MainIndex} />
            <ProtectedRoute exact path="/network" component={Network} />
            <ProtectedRoute exact path="/setting" component={Setting} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <Route exact path="signup" component={Signup} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
