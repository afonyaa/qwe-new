import { FC } from 'react';
import { QuestionProps } from './interfaces';

export const Question: FC<QuestionProps> = ({ data }) => {
  return (
    <div>
      <h1 className={'text-slate-500 text-lg'}>{data.text}</h1>
      <div>
        <div className="text-slate-700 flex items-center gap-2">
          <span className="dot dot-error" />
          <span>Answer 1</span>
        </div>
        <div className="text-slate-700 flex items-center gap-2">
          <span className="dot dot-success" />
          <span>Answer 2</span>
        </div>
        <div className="text-slate-700 flex items-center gap-2">
          <span className="dot dot-error" />
          <span>Answer 3</span>
        </div>
        <div className="text-slate-700 flex items-center gap-2">
          <span className="dot dot-error" />
          <span>Answer 4</span>
        </div>
      </div>
    </div>
  );
};
