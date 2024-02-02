import React from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const SidebarMenu = props => {

  const { ...rest } = props;
  const open = useSelector(state => state.sidebarOpen);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({
      type: 'SET_SIDEBAR_OPEN',
      data: !open
    });
  };

  return (
    <IconButton onClick={handleToggle} {...rest}>
      <MenuIcon sx={{ fontSize: 26 }} />
    </IconButton>
  );
};

export default SidebarMenu;