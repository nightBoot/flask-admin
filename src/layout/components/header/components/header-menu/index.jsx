import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import MenuPopover from './MenuPopover';
import { useSelector } from 'react-redux';

const HeaderMenu = props => {

  const routeName = useSelector(state => state.routeName); 
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
      <Button
        sx={{
          ml: '10px',
          px: 1,
          py: 0.5,
          fontWeight: 'bold',
          fontSize: '16px',
        }}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        {routeName}
      </Button>
      <MenuPopover open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </>
  );

};

export default HeaderMenu;