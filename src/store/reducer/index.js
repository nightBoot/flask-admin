const initState = {
  layoutMode: 'TNL',
  sidebarOpen: window.innerWidth > 900,
  isPc: window.innerWidth > 900,
  routeName: '主页 - 仪表盘'
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_LAYOUT_MODE':
      return { ...state, layoutMode: action.data, sidebarOpen: true };
    case 'SET_SIDEBAR_OPEN':
      return { ...state, sidebarOpen: action.data };
    case 'UPDATE_SCREEN_SIZE':
      return { ...state, isPc: action.data };
    case 'SET_ROUTE_NAME':
      return { ...state, routeName: action.data };
    default:
      return state;
  }
};

export default reducer;