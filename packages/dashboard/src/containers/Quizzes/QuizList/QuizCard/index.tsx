import previewImage from './mocks/assets/quiz-img-preview.png';
import ListBulletIcon from '@heroicons/react/24/outline/ListBulletIcon';
import { FC } from 'react';
import { QuizCardProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';
import { useMutation } from '@tanstack/react-query';
import { startQuizQuery } from './queries/startQuizQuery';

export const QuizCard: FC<QuizCardProps> = ({
  quizName,
  quizImage,
  questionsAmount,
  id,
}) => {
  const navigate = useNavigate();

  const { mutate: startMutate, isLoading: isStartLoading } = useMutation({
    mutationKey: ['startQuiz'],
    mutationFn: startQuizQuery,
  });

  const startQuiz = () => {
    startMutate(
      { quizId: id },
      {
        onSuccess: (lobbyId) => {
          redirectToLobbyById(lobbyId);
        },
      },
    );
  };

  const redirectToLobbyById = (lobbyId: string) => {
    window.location.href = `${
      import.meta.env.VITE_QUIZ_PASSING_HOST_PORT
    }/game/${lobbyId}`;
  };

  const redirectToQuiz = () => {
    navigate(`${RootPagesPaths.quizzes}/${id}`);
  };

  return (
    <div className="flex p-4 border rounded-md justify-between">
      <div className="flex gap-x-2">
        <img src={quizImage ?? previewImage} className="rounded-md w-16 h-16" />
        <div className="flex flex-col justify-between ml-2">
          <h1
            className="font-semibold max-w-[24rem] text-slate-500 cursor-pointer hover:text-slate-600 transition-colors"
            onClick={redirectToQuiz}
          >
            {quizName}
          </h1>
          <span className="badge p-2 w-fit badge-xs mt-1">
            <ListBulletIcon height={16} />
            <span className="ml-1">{questionsAmount} questions</span>
          </span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        {isStartLoading ? (
          <progress className="progress progress-flat-secondary w-12"></progress>
        ) : (
          <span
            onClick={startQuiz}
            className="badge badge-secondary p-2 badge-xs click cursor-pointer hover:bg-purple-800 transition-colors"
          >
            Start Quiz
          </span>
        )}
        <span className="badge p-2 badge-xs bg-error/50 text-base-100 cursor-pointer">
          Remove
        </span>
      </div>
    </div>
  );
};
