import React from 'react';
import { Paper, Typography } from '@mui/material';

const Footer = (props) => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: 'solid 1px #E1E3E1',
        minHeight: 60
      }}
    >
      <Typography variant="body1">
        Copyright © mui-admin 2023
      </Typography>
    </Paper>
  );
};

export default Footer;
