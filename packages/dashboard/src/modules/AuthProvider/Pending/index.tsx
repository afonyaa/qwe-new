import { FC } from 'react';

export const Pending: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center w-screen bg-gradient-to-tr from-white from-50% via-purple-200 to-red-200">
      <span className="loading loading-infinity loading-lg text-primary"></span>
    </div>
  );
};
