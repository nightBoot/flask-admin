import React, { useState, useEffect } from "react";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { StrIcon } from "components/icon";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import web from "config/web";
import { useLocation, Link } from "react-router-dom";

const SidebarMenuItem = props => {

  const { menu, level } = props;
  let items = [];
  if (menu.children && menu.children.length > 0) {
    items = menu.children;
  }

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation();

  useEffect(() => {
    // 当路由改变时，检查是否当前菜单项应该展开
    if (menu.url && location.pathname.startsWith(menu.url)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname, menu.url]);

  return (
    <>
      <ListItemButton
        selected={location.pathname === menu.url}
        onClick={() => handleClick()}
        component={menu.type === 'item' ? React.forwardRef((itemProps, ref) => <Link to={menu.url} ref={ref} {...itemProps} />) : "div"}
        sx={{
          pl: 2 + (level * 2),
          '&.Mui-selected': {
            background: 'rgba(17, 53, 69, 0.5)',
            '& .MuiListItemIcon-root': {
              color: '#FFF',
            },
          }
        }}
      >
        <ListItemIcon
          sx={{
            color: web.menuIconColor,
            minWidth: 36
          }}
        >
          <StrIcon iconName={menu.icon || 'Link'} />
        </ListItemIcon>
        <ListItemText
          primary={menu.title}
          primaryTypographyProps={{
            fontSize: 14
          }}
        />
        {items.length > 0 && (open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
      </ListItemButton>
      {
        items.length > 0 &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            {items.map((item) => (
              <SidebarMenuItem level={level + 1} key={item.id} menu={item} />
            ))}
          </List>
        </Collapse>
      }
    </>
  );
};

export default SidebarMenuItem;