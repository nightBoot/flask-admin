import React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, Grid, Link, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { feature } from './feature';
import { StrIcon } from 'components/icon';

const Home = props => {

  return (
    <Box sx={{ p: 3 }}>
      {feature.map((item) => (
        <Box sx={{ mb: 2 }} key={item.id}>
          <Typography variant="h6" color="initial" sx={{ mb: 2 }}>{item.title}</Typography>
          {item.children &&
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} key={item.id}>
              {item.children.map((subItem) => (
                <Card
                  variant='outlined'
                  key={subItem.id}
                  sx={{
                    width: 176,
                    height: 176,
                    mb: 3,
                    borderColor: '#b0bec5',
                    '&:hover': { boxShadow: 3 },
                    mr: 3
                  }}>
                  <Link component={RouteLink} to={subItem.url || '/'} underline='none' sx={{ color: 'black' }}>
                    <CardHeader
                      title={<Typography variant="body2">{subItem.title}</Typography>}
                      subheader={<Typography variant="body2" color="text.secondary">{subItem.subtitle || '\u00a0'}</Typography>}
                    />
                    <CardContent >
                      <Box>
                        <Grid container>
                          <Grid item xs={4}>
                            {subItem.icon && <StrIcon iconName={subItem.icon} sx={{ fontSize: 30 }} />}
                          </Grid>
                          <Grid item xs={8}>
                            {subItem.data && <Typography sx={{ color: '#1D2D3E', fontSize: 24 }}>{subItem.data}</Typography>}
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                    <CardActions>
                      {subItem.desc && <Typography variant="body2" color="text.secondary">{subItem.desc}</Typography>}
                    </CardActions>
                  </Link>
                </Card>
              ))}
            </Box>}
        </Box>
      ))}
    </Box>
  );

};

export default Home;