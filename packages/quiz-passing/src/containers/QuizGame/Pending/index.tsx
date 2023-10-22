import { FC } from 'react';
import { PendingProps } from './interfaces';

export const Pending: FC<PendingProps> = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-2xl">Please wait</div>
      <progress className="mt-8 progress progress-flat-secondary"></progress>
    </div>
  );
};
