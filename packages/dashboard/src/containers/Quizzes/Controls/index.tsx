import React, { FC } from 'react';
import { ControlsProps } from './interfaces';

export const Controls: FC<ControlsProps> = ({
  onCreateQuiz,
  quizCount,
  isLoading,
}) => {
  return (
    <>
      <button
        onClick={onCreateQuiz}
        className="btn btn-outline-secondary text-xs btn-sm"
      >
        Generate new Quiz
      </button>
      {isLoading ? (
        <div className="skeleton-pulse h-6 rounded-md bg-slate-100 w-24" />
      ) : (
        <div className="justify-self-end text-xs text-slate-500">
          You have {quizCount} Quizzes
        </div>
      )}
    </>
  );
};
