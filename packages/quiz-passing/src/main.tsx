import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryProvider } from '@modules/QueryProvider';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <RouterProvider router={router} />
  </QueryProvider>,
);
