import { FC } from 'react';

export const Pending: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center w-screen bg-gradient-to-tr from-white from-50% via-purple-200 to-red-200">
      <div className="spinner-dot-intermittent [--spinner-color:var(--pink-8)]"></div>
    </div>
  );
};
