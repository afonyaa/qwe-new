import { FC } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from '@containers/Root/Header';
import { Outlet } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <div className="flex h-screen bg-violet-50 py-4 overflow-hidden justify-between pb-4">
      <Sidebar />
      <div className="flex-1 overflow-y-auto mx-4 flex flex-col">
        <Header />
        <main className="bg-white overflow-hidden mt-4 rounded-lg p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
