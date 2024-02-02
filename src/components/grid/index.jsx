import { Grid } from '@mui/material';

export const CustomGridItem = ({ children, ...rest }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} {...rest}>
      {children}
    </Grid>
  );
};