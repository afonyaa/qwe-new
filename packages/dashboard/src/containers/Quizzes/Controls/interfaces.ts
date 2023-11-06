export interface ControlsProps {
  onCreateQuiz: () => void;
  onCreateQuizFromPDF: () => void;
  quizCount?: number;
  isLoading: boolean;
}
