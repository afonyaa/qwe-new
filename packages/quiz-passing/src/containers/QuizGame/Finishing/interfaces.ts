import { QuizState } from '@coreTypes/quriesModels/QuizState';

export interface FinishingProps extends Pick<QuizState, 'role' | 'players'> {}
