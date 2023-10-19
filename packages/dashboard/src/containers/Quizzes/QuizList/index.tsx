import { QuizCard } from '@containers/Quizzes/QuizList/QuizCard';

export const QuizList = () => {
  return (
    <div className="flex flex-col h-full gap-y-2 overflow-y-auto pr-4">
      <QuizCard quizName={'React'} questionsAmount={4} id={'3'} />
      <QuizCard quizName={'Angular'} questionsAmount={5} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
      <QuizCard quizName={'Svelte'} questionsAmount={6} id={'3'} />
    </div>
  );
};
