import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages';
import { QueryProvider } from '@/modules/QueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <RouterProvider router={router} />
  </QueryProvider>,
);
