import { FC, useState } from 'react';
import { AnswerCardProps } from './interfaces';

export const AnswerCard: FC<AnswerCardProps> = ({
  order,
  text,
  onAnswerClick,
  answerId,
  isSubmitted,
  disabled,
}) => {
  const [isSubmittedWaitFetch, setIsSubmittedWaitFetch] = useState(false);

  const orderTWColorMap: Record<number, string> = {
    0: 'bg-gradient-to-r from-red-700 from-10% via-amber-600 via-30% to-fuchsia-800 to-90%',
    1: 'bg-gradient-to-r from-purple-800 from-10% via-cyan-300 via-30% to-red-800 to-90%',
    2: 'bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%',
    3: 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
  };

  return (
    <div
      onClick={() => {
        onAnswerClick(answerId);
        if (!disabled) setIsSubmittedWaitFetch(true);
      }}
      className={`bg-slate-800 p-4 rounded-md text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer ${
        disabled && 'cursor-not-allowed bg-slate-4'
      } ${
        (isSubmittedWaitFetch || isSubmitted) &&
        'cursor-not-allowed bg-purple-5'
      }`}
    >
      {text}
      <div className={`${orderTWColorMap[order]} h-1 mt-4`}></div>
    </div>
  );
};
