import { styled } from "@mui/material/styles";
import web from "config/web";

const width = `-${web.drawerWidth}px`;

const MainPack = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: width,
    background: '#EEF2F6',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0, //main内容左边距
    },
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default MainPack;