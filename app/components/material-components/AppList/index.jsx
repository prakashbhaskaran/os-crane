import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import AppLink from "@components/page-components/AppLink";

const AppNestedList = ({ data }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      {" "}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.list.map((item, index) => {
            return (
              <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemText primary={item?.name} />;
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default function AppList({ children }) {
  return (
    <List
      sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
      component="nav"
      disablePadding
      aria-labelledby="nested-list-subheader"
    >
      {children}
    </List>
  );
}
