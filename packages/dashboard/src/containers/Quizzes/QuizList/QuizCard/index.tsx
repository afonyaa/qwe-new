import previewImage from './mocks/assets/quiz-img-preview.png';
import ListBulletIcon from '@heroicons/react/24/outline/ListBulletIcon';
import { FC } from 'react';
import { QuizCardProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';

export const QuizCard: FC<QuizCardProps> = ({
  quizName,
  quizImage,
  questionsAmount,
  id,
}) => {
  const navigate = useNavigate();
  const redirectToQuiz = () => {
    navigate(`${RootPagesPaths.quizzes}/${id}`);
  };

  return (
    <div className="flex p-4 border rounded-md justify-between">
      <div className="flex gap-x-2">
        <img src={quizImage ?? previewImage} className="rounded-md w-16 h-16" />
        <div className="flex flex-col justify-between ml-2">
          <h1 className="font-semibold text-slate-500">{quizName}</h1>
          <span className="badge badge-square w-fit badge-xs bg-gray-100 text-slate-400 border-gray-200 mt-1">
            <ListBulletIcon height={16} />
            <span className="ml-1">{questionsAmount} questions</span>
          </span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <span
          className="badge badge-secondary badge-xs px-2 click cursor-pointer hover:bg-purple-800 transition-colors"
          onClick={redirectToQuiz}
        >
          Edit
        </span>
        <span className="badge badge-outline-error badge-xs px-2 cursor-pointer">
          Remove
        </span>
      </div>
    </div>
  );
};
