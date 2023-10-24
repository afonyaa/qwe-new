import { QuizState } from '@coreTypes/quriesModels/QuizState';

export interface StartingProps
  extends Pick<QuizState, 'pinCode' | 'role' | 'players' | 'playerName'> {}
