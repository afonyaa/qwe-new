import previewImage from './mocks/assets/quiz-img-preview.png';
import ListBulletIcon from '@heroicons/react/24/outline/ListBulletIcon';
import { FC } from 'react';
import { QuizCardProps } from './interfaces';

export const QuizCard: FC<QuizCardProps> = ({
  quizName,
  quizImage,
  questionsAmount,
}) => {
  return (
    <div className="flex w-3/5 p-4 border rounded-md justify-between">
      <div className="flex gap-x-2">
        <img
          src={quizImage ?? previewImage}
          width={60}
          height={60}
          className="rounded-md"
        />
        <div className="flex flex-col justify-between ml-2">
          <h1 className="font-semibold">{quizName}</h1>
          <div className="text-xs bg-gray-100 text-slate-600 p-1 flex gap-x-1 px-2">
            <ListBulletIcon height={16} />
            <span>{questionsAmount} question</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xs px-3 py-1 text-slate-200 rounded-sm bg-purple-900 opacity-80">
          Edit
        </div>
      </div>
    </div>
  );
};
