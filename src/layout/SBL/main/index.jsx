import React from 'react';
import { Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPack from './MainPack';

const Main = props => {

  const open = useSelector(state => state.sidebarOpen);

  return (
    <MainPack open={open}>
      <Toolbar />
      <Outlet />
    </MainPack>
  );
}

export default Main;