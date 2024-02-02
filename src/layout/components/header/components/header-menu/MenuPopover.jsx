import { Paper, Popover, Typography, Box, Divider } from '@mui/material';
import React from 'react';
import MenuCard from './MenuCard';

const MenuPopover = props => {

  const { open, handleClose, anchorEl } = props;

  return (
    <Popover
      elevation={2}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Paper variant='outlined' sx={{ width: 672 }}>
        <Box sx={{ px: 2, py: 1 }}>
          <Typography
            sx={{ fontSize: '16px' }}
            variant="body2"
            color="initial"
          >
            我的应用
          </Typography>
        </Box>
        <Divider />
        <MenuCard />
      </Paper>
    </Popover>
  );
};

export default MenuPopover;