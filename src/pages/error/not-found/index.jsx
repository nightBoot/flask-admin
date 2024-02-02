import React from "react";
import { Box, Typography } from '@mui/material';
import web from "config/web";
import { useSelector } from "react-redux";

const NotFound = (props) => {

  const sidebarOpen = useSelector(state => state.sidebarOpen);

  return (
    <Box
      sx={{
        position: 'fixed',
        width: sidebarOpen ? `calc(100% - ${web.drawerWidth}px )` : `100%`,
        display: 'flex',
        justifyContent: 'center',
        transition: 'width 0.3s ease', // 添加过渡效果
        pt: '200px'
      }}
    >
      <Typography variant="h1">404</Typography>
    </Box>
  );
};

export default NotFound;
