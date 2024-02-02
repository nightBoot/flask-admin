import React, { Suspense } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from "../components/header";
import Main from './main';
import Sidebar from './sidebar';

const SBL = props => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Main />
      </Box>
    </>
  );
};

export default SBL;