import { ReactNode } from 'react';

export interface ModalProps {
  handleCancel: () => void;
  handleOk: () => void;
  isOpen: boolean;
  titleText: string;
  okText: string;
  cancelText: string;
  okDisabled?: boolean;
  cancelDisabled?: boolean;
  isLoading?: boolean;
  content: ReactNode;
}
