import React, { useState } from 'react';
import { Paper, InputBase, IconButton, Button, Menu, MenuItem, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const SearchBox = props => {

  const [curType, setCurType] = useState('应用');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleItemClick = (value) => {
    setCurType(value);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Paper
        component="form"
        elevation={0}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 450,
          background: '#EFF1F2'
        }}
      >
        <Button
          sx={{
            px: 1,
            py: '2px',
            fontWeight: 'bold',
            color: 'black'
          }}
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
        >
          {curType}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleItemClick('应用')}>应用</MenuItem>
          <MenuItem onClick={() => handleItemClick('销售订单')}>销售订单</MenuItem>
          <MenuItem onClick={() => handleItemClick('计划订单')}>计划订单</MenuItem>
          <MenuItem onClick={() => handleItemClick('采购订单')}>采购订单</MenuItem>
        </Menu>
        <InputBase
          size='small'
          sx={{
            ml: 1,
            flex: 1,
            fontSize: 14,
            '& input::placeholder': {
              fontSize: 14,
              fontStyle: 'italic'
            },
          }}
          placeholder={`搜索范围：${curType}`}
        />
        <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};


export default SearchBox;