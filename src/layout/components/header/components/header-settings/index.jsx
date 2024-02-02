import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import SettingsDrawer from './SettingsDrawer';


const HeaderSettings = props => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton sx={{ m: '2px' }} onClick={handleToggle}>
        <SettingsIcon sx={{ fontSize: 26 }} />
      </IconButton>
      <SettingsDrawer open={open} handleToggle={handleToggle} />
    </>
  );

};

export default HeaderSettings;