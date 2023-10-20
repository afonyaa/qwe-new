import { UseModalResult } from '@components/Modal';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export interface GenerateQuizModalProps
  extends Omit<UseModalResult, 'handleOpenModal' | 'handleOkButton'> {
  isLoading: boolean;
  onSubmit: (data: CreateQuizPayload) => void;
}
