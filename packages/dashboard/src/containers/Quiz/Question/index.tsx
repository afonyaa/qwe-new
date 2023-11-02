import { FC } from 'react';
import { QuestionProps } from './interfaces';

export const Question: FC<QuestionProps> = ({ data }) => {
  return (
    <div>
      <h1 className={'text-slate-500 text-lg'}>{data.text}</h1>
      <div>
        {data.answers.map((answer) => (
          <div className="text-slate-700 flex items-center gap-2">
            <span
              className={`${
                answer.rightAnswer ? 'text-success' : 'text-error'
              }`}
            >
              {answer.answerText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
