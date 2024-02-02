import React from 'react';
import {
  Collapse, Box, Grid
} from '@mui/material';
import { CustomGridItem } from 'components/grid';
import { SAPInputLabel, SAPTextField } from 'components/input';
import { SAPButton } from 'components/button';

const DataFilter = props => {

  const { open, filterRef, ...rest } = props;

  return (
    <Box ref={filterRef} {...rest}>
      <Collapse in={open}>
        <form>
          <Grid
            container rowSpacing={1} columnSpacing={5}
            alignItems="flex-end"
            sx={{ p: 2 }}
          >

            <CustomGridItem>
              <SAPInputLabel>编号:</SAPInputLabel>
              <SAPTextField fullWidth name="number" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>名称:</SAPInputLabel>
              <SAPTextField fullWidth name="name" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>作者:</SAPInputLabel>
              <SAPTextField fullWidth name="name" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>状态:</SAPInputLabel>
              <SAPTextField fullWidth name="name" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>创建人:</SAPInputLabel>
              <SAPTextField fullWidth name="name" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>创建时间:</SAPInputLabel>
              <SAPTextField fullWidth name="name" />
            </CustomGridItem>

            <CustomGridItem>
              <SAPInputLabel>出版社:</SAPInputLabel>
              <SAPTextField fullWidth name="press" />
            </CustomGridItem>

            <CustomGridItem sx={{ ml: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SAPButton sx={{ mr: 1 }} variant="contained" color="primary">查询</SAPButton>
                <SAPButton variant="text" color="primary">调整过滤器</SAPButton>
              </Box>
            </CustomGridItem>
          </Grid>
        </form>
      </Collapse>
    </Box>
  );
};

export default DataFilter;