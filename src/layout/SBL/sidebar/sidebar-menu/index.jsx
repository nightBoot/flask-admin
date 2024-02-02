import React from "react";
import menus from "config/menus";
import { List } from "@mui/material";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = props => {
  return (
    <List component="nav">
      {menus.map((menu) => (
        <SidebarMenuItem key={menu.id} menu={menu} level={0} />
      ))}
    </List>
  );
};

export default SidebarMenu;