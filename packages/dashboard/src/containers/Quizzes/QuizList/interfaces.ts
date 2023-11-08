import { QuizPreview } from '@coreTypes/quriesModels/QuizPreview';

export interface QuizListProps {
  isLoading?: boolean;
  quizList?: QuizPreview[];
  onRemoveQuiz: (id: string) => void;
}
