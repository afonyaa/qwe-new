import { QuizState } from '@coreTypes/quriesModels/QuizState';

export interface LeaderBoardProps
  extends Pick<QuizState, 'currentQuestion' | 'players' | 'role'> {}

export type PrizePlaceIdx = 0 | 1 | 2;
