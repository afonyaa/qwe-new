export interface AnswerCardProps {
  order: number;
  text: string;
  onAnswerClick: (answerId: number) => void;
  answerId: number;
  isSubmitted: boolean;
  disabled: boolean;
}
