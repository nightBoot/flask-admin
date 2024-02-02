import React from 'react';
import { Paper, Popover, Typography, Box, Avatar, Button } from '@mui/material';

const UserPopover = props => {

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
      <Paper
        variant='outlined'
        sx={{ width: 420, py: 5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="" sx={{ width: 70, height: 70 }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: 20,
              mt: 2,
            }}
          >
            {`你好！LIN-Z`}
          </Typography>
          <Box sx={{mt: 2}}>
            <Button variant="outlined" color="primary">
              管理账号
            </Button>

            <Button variant="outlined" color="primary" sx={{ ml: 2}}>
              退出账号
            </Button>
          </Box>
        </Box>
      </Paper>
    </Popover>
  );
};

export default UserPopover;