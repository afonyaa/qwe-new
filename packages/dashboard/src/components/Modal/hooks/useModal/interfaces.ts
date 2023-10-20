export interface UseModalProps {
  handleSubmit?: () => void;
}

export interface UseModalResult {
  handleOkButton: () => void;
  isOpen: boolean;
  handleCancelButton: () => void;
  handleOpenModal: () => void;
}
