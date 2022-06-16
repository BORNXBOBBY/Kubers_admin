import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Login from "./Login/Login";
import MainIndex from "./MainIndex";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile";
import Signup from "./Login/Signup";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { Network } from "./Pages/Network/Network";
import NetworkDetails from "./Pages/Network/NetworkDetails";
import StartupDetails from "./Pages/Startup/StartupDetails";
import Startup from "./Pages/Startup/Startup";
import Investor from "./Pages/Investor/Investor";
import InvestorDetails from "./Pages/Investor/InvestorDetails";
import Deal from "./Pages/Deals/Deal";

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
            <ProtectedRoute
              exact
              path="/network/:id/:slug"
              component={NetworkDetails}
            />
            <ProtectedRoute exact path="/startup" component={Startup} />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug"
              component={StartupDetails}
            />
            <ProtectedRoute exact path="/investor" component={Investor} />
            <ProtectedRoute
              exact
              path="/investor/:id"
              component={InvestorDetails}
            />
            <ProtectedRoute exact path="/deals" component={Deal} />
            <Route exact path="signup" component={Signup} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
