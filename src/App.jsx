import React, { useEffect } from "react";
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import web from "config/web";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isPc = window.innerWidth > 900;
      dispatch({
        type: 'UPDATE_SCREEN_SIZE',
        data: isPc
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <BrowserRouter basename={web.basename}>
      <Routes />
    </BrowserRouter>
  )

};

export default App;