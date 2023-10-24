import { QuizState } from '@coreTypes/quriesModels/QuizState';

export interface PlayingProps
  extends Pick<QuizState, 'currentQuestion' | 'role'> {}
