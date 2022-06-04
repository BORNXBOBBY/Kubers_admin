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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" sx={{ top: "0" }} color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className="d-block d-lg-none"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            {toggle ? <Close /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TheKubers
          </Typography>

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
                src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
              />
            </IconButton>
            <Menu
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
        <SideHeader toggle={toggle} />
      </AppBar>
      <div></div>
    </div>
  );
}
