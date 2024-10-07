import './assets/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { route } from './routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
