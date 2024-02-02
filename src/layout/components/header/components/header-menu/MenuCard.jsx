import React, { useEffect, useState } from 'react';
import { Divider, Grid, List, ListItemButton, ListItemText, Typography, Box, Link } from '@mui/material';
import { Link as RouteLink, useLocation, useNavigate } from 'react-router-dom';
import menus from 'config/menus';
import { useDispatch } from 'react-redux';

const MenuCard = props => {

  //当前菜单组ID
  const [curGroup, setCurGroup] = useState(menus[0]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //处理选中菜单组
  const selectedMenuGroup = (menu) => {
    setCurGroup(menu);
    if (menu.type === 'item' && menu.url) {
      navigate(menu.url);
    }
  };

  const location = useLocation();
  useEffect(() => {

    const findTitleByPath = (group, path) => {
      // 如果当前节点的url与path匹配，返回当前节点的title
      if (group.url === path) {
        return group.title;
      }

      // 如果当前节点是group类型且有子节点，继续递归搜索子节点
      if (group.type === 'group' && group.children) {
        for (const child of group.children) {
          const title = findTitleByPath(child, path);
          if (title) {
            return title;
          }
        }
      }

      // 没有找到匹配的title，返回null
      return null;
    };

    const title = findTitleByPath(curGroup, location.pathname);
    if (title) {
      console.log('当前路由对应的标题为:', title);
      dispatch({
        type: 'SET_ROUTE_NAME',
        data: title
      });
    } else {
      console.log('未找到匹配的标题');
    }
  }, [location.pathname, curGroup, dispatch]);


  return (
    <Grid container>
      <Grid item xs={4.5}>
        <List sx={{ py: 0, maxHeight: 420, overflowY: 'auto' }}>
          {menus.map((menu) => (
            <React.Fragment key={menu.id}>
              <ListItemButton selected={menu.id === curGroup.id} onClick={() => selectedMenuGroup(menu)}>
                <ListItemText
                  primary={menu.title}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: menu.type === 'group' ? 'black' : '#6289B1'
                  }}
                />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
      <Grid sx={{ borderLeft: 'solid 1px #ECEFF1' }} item xs={7.5}>
        <Box sx={{ maxHeight: 420, overflowY: 'auto', pr: 2 }}>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontSize: 16, mx: 2, my: 2 }}
          >
            {curGroup.title}
          </Typography>
          {curGroup.children && <Grid container>
            {curGroup.children.map((item) => (
              <Grid key={item.id} item xs={6}>
                <Link component={RouteLink} to={item.url || '/'} underline='none'>
                  <ListItemButton>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontSize: '14px',
                        color: '#336699'
                      }}
                    />
                  </ListItemButton>
                </Link>
              </Grid>
            ))}
          </Grid>}
        </Box>
      </Grid>
    </Grid>
  );

};

export default MenuCard;