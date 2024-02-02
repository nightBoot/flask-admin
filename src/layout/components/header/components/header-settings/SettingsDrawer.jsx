import React, { useState } from 'react';
import { Box, Divider, Drawer, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import web from 'config/web';

const SettingsDrawer = props => {

  const { open, handleToggle } = props;

  const layoutMode = useSelector(state => state.layoutMode);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({
      type: 'SET_LAYOUT_MODE',
      data: event.target.value
    });
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={handleToggle}
    >
      <Box sx={{ minWidth: 320 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, height: web.headerHeight }}>
          <Typography variant="body1">快捷设置</Typography>
          <IconButton onClick={handleToggle} sx={{ marginLeft: 'auto' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ p: 2, mt: 1 }}>
          <FormControl>
            <FormLabel>布局模式</FormLabel>
            <RadioGroup
              value={layoutMode}
              onChange={handleChange}
            >
              <FormControlLabel value="TNL" control={<Radio />} label="宽屏布局" />
              <FormControlLabel value="SBL" control={<Radio />} label="侧边栏布局" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;