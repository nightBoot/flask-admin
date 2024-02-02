import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Main = props => {
  return (
    <Box sx={{
      background: '#EEF2F6',
      minHeight: '100vh',
      flexGrow: 1,
      overflow: 'auto'
    }}>
      <Toolbar />
      <Outlet />
    </Box>
  );
}

export default Main;