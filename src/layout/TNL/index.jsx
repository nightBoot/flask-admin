import React, { Suspense } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "../components/header";
import Main from "./main";

const TNL = props => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Main />
      </Box>
    </>
  );
};

export default TNL;