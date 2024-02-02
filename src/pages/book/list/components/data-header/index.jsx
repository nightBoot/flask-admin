import {
  Box, Switch, Typography, FormControlLabel, Grid, Divider
} from '@mui/material';
import { SAPButton } from 'components/button';
import React from 'react';

const DataHeader = props => {

  const { filterOpen, handleFilterChange, handleAddOpen, headerRef } = props;

  return (
    <Box ref={headerRef}>
      <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{ fontSize: 16 }}
              variant="body1"
            >
              管理书籍
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <FormControlLabel
              control={<Switch checked={filterOpen} onChange={handleFilterChange} />}
              label="过滤"
            />
            <React.Fragment>
              <SAPButton sx={{ mr: 1 }} onClick={handleAddOpen} variant="outlined" color='primary'>创建</SAPButton>
              <SAPButton sx={{ mr: 1 }} variant="outlined" color='primary'>OCR导入</SAPButton>
            </React.Fragment>
            <SAPButton variant="outlined" color='primary'>导出</SAPButton>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
};

export default DataHeader;