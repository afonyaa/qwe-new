export interface QuizCardProps {
  quizImage?: string;
  quizName: string;
  questionsAmount: number;
  id: number;
  onRemoveQuiz: (id: string) => void;
}
