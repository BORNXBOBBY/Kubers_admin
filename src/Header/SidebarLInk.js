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
    <div>
      <List>
        <ListItem className="sideitem">
          <ListItemIcon className="_side_icon">{icon} </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </List>
    </div>
  );
}
export default SidebarLink;
