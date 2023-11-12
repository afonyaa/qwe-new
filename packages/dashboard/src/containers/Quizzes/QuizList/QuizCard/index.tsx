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
  questionsAmount,
  onRemoveQuiz,
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
    <div className="card card-side w-full md:min-w-96 bg-base-100 shadow-md">
      <figure>
        <img src={previewImage} alt="Quiz image" className="w-24 h-full" />
      </figure>
      <div className="card-body px-4 py-2">
        <div className="card-title max-w-sm">
          <h2
            onClick={redirectToQuiz}
            className="cursor-pointer hover:text-primary-focus transition-colors text-sm sm:text-base"
          >
            {quizName}
          </h2>
        </div>
        <div className="card-actions justify-end mt-4">
          <span className="badge p-2 w-fit badge-xs mt-1">
            <ListBulletIcon height={16} />
            <span className="ml-1 text-[0.5rem] sm:text-xs">
              {questionsAmount}{' '}
              <span className="hidden sm:inline">questions</span>
            </span>
          </span>
          <button
            onClick={startQuiz}
            className="btn btn-active btn-neutral btn-xs text-[0.5rem] sm:text-xs"
          >
            {isStartLoading ? (
              <progress className="progress bg-secondary-focus progress-flat-secondary w-12"></progress>
            ) : (
              'Start quiz'
            )}
          </button>
          <button
            onClick={() => {
              onRemoveQuiz(String(id));
            }}
            className="btn btn-outline btn-error btn-xs text-[0.5rem] sm:text-xs"
          >
            Remove quiz
          </button>
        </div>
      </div>
    </div>
  );
};
