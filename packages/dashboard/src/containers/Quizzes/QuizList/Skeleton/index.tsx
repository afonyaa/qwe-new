import { FC } from 'react';

export const Skeleton: FC = () => {
  return (
    <div className="flex flex-col w-1/2 gap-y-4">
      {Array.from(new Array(8)).map(() => (
        <div className="skeleton-pulse h-8 rounded-md bg-slate-100" />
      ))}
    </div>
  );
};
