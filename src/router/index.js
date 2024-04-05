import Login from '../page/login';
import Article from '../page/article';
import NotFound from '../page/NotFound';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import About from '../page/about';
import Board from '../page/board';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Board />
      },
      {
        path: '/about',
        element: <About />
      },
    
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id',
    element: <Article />
  },
  {
    path: '*',
    element: <NotFound />
  },

]);

export default router;