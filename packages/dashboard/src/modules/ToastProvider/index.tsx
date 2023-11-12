import { FC } from 'react';
import { ToastProviderProps } from './interfaces';
import { ToastContext } from './ToastContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  return (
    <ToastContext.Provider value={{}}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
