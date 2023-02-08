import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import GlobalContext from "../Context/GlobalContext";
import SideHeader from "./SideHeader";
import { Close } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../Constant/auth";
import { site_name } from "../Constant/ConstantApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { toggle, setToggle, toggleSidebar } = React.useContext(GlobalContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        sx={{ top: "0" }}
        style={{ backgroundColor: "#0e2238" }}
      >
        <Toolbar>
          <IconButton style={{color:"white"}}
            edge="start"
            className="d-block d-lg-none"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            {toggle ? <Close /> : <MenuIcon />}
          </IconButton>
          <div className={classes.title}>
            <img
              style={{ width: "150px" }}
              src="https://i.ibb.co/bLCKZws/logi.png"
              alt=""
            />
          </div>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <Avatar
                alt="Remy Sharp"
                src="https://i.ibb.co/Tm92ZWW/user.png"
              />
            </IconButton>
            <Menu
              className="mt-5"
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {" "}
                <Link className="mx-3 linkstyle" to="/profile">
                  {" "}
                  Profile
                </Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <Link className="mx-3 linkstyle" to="/search">
                  Search
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <Link className="mx-3 linkstyle" to="/setting">
                  Setting
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose2}>
                <Link className="mx-3 linkstyle" to="">
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
        <SideHeader toggle={toggle} />
      </AppBar>
      <div></div>
    </div>
  );
}
