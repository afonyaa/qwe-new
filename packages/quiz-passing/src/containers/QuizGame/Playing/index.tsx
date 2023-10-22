import { FC } from 'react';
import { PlayingProps } from './interfaces';
import { AnswerCard } from './AnswerCard';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitQuestion } from './queries/submitQuestion';
import { useParams } from 'react-router-dom';

export const Playing: FC<PlayingProps> = ({ currentQuestion, role }) => {
  const { id: lobbyId } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationKey: ['submitQuestion'],
    mutationFn: submitQuestion,
  });

  const handleAnswerClick = (answerId: number) => {
    if (role === UserRole.Player) {
      if (!currentQuestion.submitted && !isLoading) {
        mutate(
          {
            answerId: answerId,
            lobbyId: Number(lobbyId!),
            questionNumber: currentQuestion.questionNumber,
          },
          {
            onSuccess() {
              queryClient.invalidateQueries(['quizState']);
            },
          },
        );
      }
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-1/2">
        <div className="p-4 bg-slate-900 rounded-md text-center">
          <h1 className="text-2xl">{currentQuestion.text}</h1>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 mt-12 gap-3">
          {currentQuestion.answers.map((answer, idx) => (
            <AnswerCard
              order={idx}
              isSubmitted={
                answer.answerId === currentQuestion?.submittedAnswerId
              }
              disabled={currentQuestion.submitted}
              key={answer.text}
              answerId={answer.answerId}
              text={answer.text}
              onAnswerClick={handleAnswerClick}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="text-lg">
            <span className="text-slate-300">Time left:</span>
            <span className="bg-gray-600 ml-2 py-1 px-2 rounded-md">
              {currentQuestion.secondsLeft}
            </span>
          </div>
        </div>
        {isLoading && (
          <div className="absolute mt-4 right">
            <div className="spinner-dot-intermittent [--spinner-color:var(--green-10)]"></div>
          </div>
        )}
      </div>
    </div>
  );
};
