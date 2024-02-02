import React from 'react';
import { AppBar, Box, Toolbar, Link, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import web, { logo } from 'config/web';
import HeaderMenu from './components/header-menu';
import SearchBox from './components/SearchBox';
import HeaderUser from './components/header-user';
import HeaderSettings from './components/header-settings';
import { useSelector } from 'react-redux';
import SidebarMenu from './components/sidebar-menu';

const Header = (props) => {
  // const { layoutMode, isPc } = useSelector(state => state);
  const layoutMode = useSelector(state => state.layoutMode);
  const isPc = useSelector(state => state.isPc);

  return (
    <AppBar
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 'solid 1px #ECEFF1' }}
    >
      <Toolbar variant="dense" disableGutters
        sx={{
          height: web.headerHeight,
          px: layoutMode === 'TNL' ? 3 : 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {layoutMode === 'SBL' && <SidebarMenu sx={{ mr: '10px' }} />}
            <Link component={RouteLink} to='/'>
              <img style={{ height: 36, m: '2px' }} src={logo} alt="mui-admin" />
            </Link>
            {isPc && <Typography sx={{ ml: 2 }} variant="h6" color="text.secondary">IBMS</Typography>}
            {layoutMode === 'TNL' && <HeaderMenu />}
          </Box>
          {isPc && <SearchBox />}
        </Box>
        <HeaderSettings />
        <HeaderUser />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
