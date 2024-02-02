import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import UserPopover from './UserPopover';

const HeaderUser = props => {

  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton sx={{ m: '2px', p: '4px' }} onClick={handleClick}>
        <Avatar sx={{ width: 36, height: 36 }} src="" />
      </IconButton>
      <UserPopover open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </>
  );
};

export default HeaderUser;