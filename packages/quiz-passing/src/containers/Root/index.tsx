import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Root: FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-bl from-gray-900 via-violet-400 to-rose-900">
      <Outlet />
    </div>
  );
};
