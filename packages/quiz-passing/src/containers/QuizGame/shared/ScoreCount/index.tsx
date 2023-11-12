import { FC } from 'react';
import { ScoreCountProps } from './interfaces';

export const ScoreCount: FC<ScoreCountProps> = ({ count }) => {
  return (
    <div className="absolute left-4 top-4 text-secondary-content text-xl">
      Your current score: <b>{count}</b>
    </div>
  );
};
