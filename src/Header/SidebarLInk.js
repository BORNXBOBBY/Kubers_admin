import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "../Header/SideHeader.css";

function SidebarLink({ text, icon }) {
  return (
    <List  >
        <ListItem className="sideitem">
          <ListItemIcon >{icon} </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </List>
  );
}
export default SidebarLink;
