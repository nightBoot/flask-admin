import { lazy } from "react";
import Loadable from "layout/components/loadable";

import Layout from "layout";
const Home = Loadable(lazy(() => import('pages/home')));
const NotFound = Loadable(lazy(() => import('pages/error/not-found')));
const Test = Loadable(lazy(() => import('pages/test')));
const BookList = Loadable(lazy(() => import('pages/book/list')));

const MainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'book/list',
      element: <BookList />
    },
    {
      path: 'order/test',
      element: <Test />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
};

export default MainRoutes;