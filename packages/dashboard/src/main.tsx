import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages';
import { QueryProvider } from '@/modules/QueryProvider';
import { AuthProvider } from '@/modules/AuthProvider';
import { ToastProvider } from '@modules/ToastProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <AuthProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </AuthProvider>
  </QueryProvider>,
);
