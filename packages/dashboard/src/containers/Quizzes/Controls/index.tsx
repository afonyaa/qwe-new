import React, { FC } from 'react';
import { ControlsProps } from './interfaces';
import BoltIcon from '@heroicons/react/24/solid/BoltIcon';

export const Controls: FC<ControlsProps> = ({
  onCreateQuiz,
  quizCount,
  isLoading,
  onCreateQuizFromPDF,
}) => {
  return (
    <>
      <button
        onClick={onCreateQuiz}
        className="btn btn-outline-secondary text-xs btn-sm"
      >
        Generate new Quiz
      </button>
      <button
        onClick={onCreateQuizFromPDF}
        className="btn btn-outline btn-sm text-xs btn-ghost"
      >
        Generate Quiz from pdf <BoltIcon width={20} />
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
