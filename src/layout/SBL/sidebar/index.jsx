import { Drawer, Toolbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import web from 'config/web';
import SidebarMenu from './sidebar-menu';

const Sidebar = props => {

  const open = useSelector(state => state.sidebarOpen);
  const isPc = useSelector(state => state.isPc);

  return (
    <Drawer
      open={open}
      anchor="left"
      variant={isPc ? "persistent" : "temporary"}
      sx={{
        zIndex: theme => theme.zIndex.appBar - 1,
        width: web.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: web.drawerWidth,
          background: '#111827',
          color: '#B8BABF'
        }
      }}
    >
      <Toolbar />
      <SidebarMenu />
    </Drawer>
  );
};

export default Sidebar;