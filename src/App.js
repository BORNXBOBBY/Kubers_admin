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
import StartupDoc from "./Pages/Startup/StartupDoc";
import Commitment from "./Pages/Deals/Commitment";
import Search from "./Pages/Search/Search";
import CapTable from "./Pages/Startup/CapTable";
import StartUpTeam from "./Pages/Startup/StartUpTeam";
import NetworkRoles from "./Pages/Network/NetworkRoles";
import StartupRoles from "./Pages/Startup/StartupRoles";
import FinancialTableDetails from "./Pages/Startup/FinancialDetails";
import Mentor from "./Pages/Mentor/Mentor";
import MentorDetails from "./Pages/Mentor/MentorDetails";
import AllEvents from "./Pages/Network/AllEvents";
import NetworkEvents from "./Pages/Network/NetworkEvents";
import Documents from "./Pages/Startup/Documents";
import Users from "./Pages/Users/User";
import CorporateProfile from "./Pages/Mentor/CorporateProfile";
import MentorCorporateProfile from "./Pages/Mentor/MentorCorporateProfile";

function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={MainIndex} />
            <ProtectedRoute exact path="/network" component={Network} />
            <ProtectedRoute
              exact
              path="/network/:id/:slug/network-access"
              component={NetworkRoles}
            />
            <ProtectedRoute
              exact
              path="/network/:id/:slug/events"
              component={NetworkEvents}
            />
            <ProtectedRoute
              exact
              path="/network/dashboard/events"
              component={AllEvents}
            />
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
              path="/startup/documents"
              component={Documents}
            />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug/startup-doc"
              component={StartupDoc}
            />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug"
              component={StartupDetails}
            />
            <ProtectedRoute exact path="/search" component={Search} />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug/captable"
              component={CapTable}
            />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug/team"
              component={StartUpTeam}
            />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug/financial-details"
              component={FinancialTableDetails}
            />
            <ProtectedRoute
              exact
              path="/startup/:id/:slug/startup-roles"
              component={StartupRoles}
            />
            <ProtectedRoute exact path="/investor" component={Investor} />
            <ProtectedRoute
              exact
              path="/investor/:id"
              component={InvestorDetails}
            />
            <ProtectedRoute exact path="/deal" component={Deal} />
            <ProtectedRoute
              exact
              path="/deal/commitment"
              component={Commitment}
            />
            <ProtectedRoute exact path="/mentor" component={Mentor} />
            <ProtectedRoute
              exact
              path="/mentor/:id/:slug"
              component={MentorDetails}
            />
            <ProtectedRoute
              exact
              path="/mentor/corporate-profile"
              component={CorporateProfile}
            />
            <ProtectedRoute
              exact
              path="/mentor/:id/:slug/corporate-profile"
              component={MentorCorporateProfile}
            />
            <ProtectedRoute exact path="/users" component={Users} />
            <Route exact path="signup" component={Signup} />
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
