import { FC } from 'react';
import { QuestionResultProps } from '@containers/QuizGame/shared/QuestionResult/interfaces';

export const QuestionResult: FC<QuestionResultProps> = ({
  currentQuestion,
  onNextQuestion,
  isLastQuestion,
  onLeaderboard,
}) => {
  const rightAnswer = currentQuestion?.answers.find(
    (answer) => answer.isRightAnswer,
  );

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-xl text-primary-content">
        Question: <span className="font-bold">{currentQuestion?.text}</span>
      </h1>
      <h2 className="text-3xl font-bold mt-4 text-accent-content">
        Correct answer:
        <span className="text-green-400 ml-4">{rightAnswer?.text}</span>
      </h2>
      <div>
        {!isLastQuestion
          ? onNextQuestion && (
              <button onClick={onNextQuestion} className="btn">
                Go to next question
              </button>
            )
          : onLeaderboard && (
              <button onClick={onLeaderboard} className="btn">
                Leaderboard
              </button>
            )}
      </div>
    </div>
  );
};
