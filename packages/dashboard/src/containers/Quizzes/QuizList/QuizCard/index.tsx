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
    <div className="card card-side w-full md:w-96 bg-base-100 shadow-md">
      <figure>
        <img src={previewImage} alt="Quiz image" className="w-24 h-full" />
      </figure>
      <div className="card-body px-4 py-2">
        <div className="card-title">
          <h2
            onClick={redirectToQuiz}
            className="cursor-pointer hover:text-primary-focus transition-colors"
          >
            {quizName}
          </h2>
          <span className="badge p-2 w-fit badge-xs mt-1">
            <ListBulletIcon height={16} />
            <span className="ml-1">{questionsAmount} questions</span>
          </span>
        </div>
        <div></div>
        <div className="card-actions justify-end">
          <button
            onClick={startQuiz}
            className="btn btn-active btn-neutral btn-xs"
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
            className="btn btn-outline btn-error btn-xs"
          >
            Remove quiz
          </button>
        </div>
      </div>
    </div>
    // <div className="flex p-4 border rounded-md justify-between">
    //   <div className="flex gap-x-2">
    //     <img src={quizImage ?? previewImage} className="rounded-md w-16 h-16" />
    //     <div className="flex flex-col justify-between ml-2">
    //       <h1
    //         className="font-semibold max-w-[24rem] text-slate-500 cursor-pointer hover:text-slate-600 transition-colors"
    //         onClick={redirectToQuiz}
    //       >
    //         {quizName}
    //       </h1>
    //       <span className="badge p-2 w-fit badge-xs mt-1">
    //         <ListBulletIcon height={16} />
    //         <span className="ml-1">{questionsAmount} questions</span>
    //       </span>
    //     </div>
    //   </div>
    //   <div className="flex items-start gap-2">
    //     {isStartLoading ? (
    //       <progress className="progress progress-flat-secondary w-12"></progress>
    //     ) : (
    //       <span
    //         onClick={startQuiz}
    //         className="badge badge-secondary p-2 badge-xs click cursor-pointer hover:bg-purple-800 transition-colors"
    //       >
    //         Start Quiz
    //       </span>
    //     )}
    //     <span
    //       onClick={() => {
    //         onRemoveQuiz(String(id));
    //       }}
    //       className="badge p-2 badge-xs bg-error/50 text-base-100 cursor-pointer"
    //     >
    //       Remove
    //     </span>
    //   </div>
    // </div>
  );
};
