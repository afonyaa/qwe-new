import { FC } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from '@containers/Root/Header';
import { Outlet } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <div className="flex h-screen bg-violet-50 overflow-hidden justify-between">
      <Sidebar />
      <div className="flex-1 overflow-y-auto flex flex-col mb-4">
        <Header />
        <main className="bg-white overflow-hidden mr-4 rounded-lg p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
