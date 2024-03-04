import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import RootError from '../pages/RootError';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />
  }
]);
