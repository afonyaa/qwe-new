import { useCallback, useState } from 'react';
import { UseModalResult, UseModalProps } from './interfaces';

export const useModal = (props: UseModalProps): UseModalResult => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSubmit } = props;

  const handleOkButton = useCallback(() => {
    handleSubmit?.();
    setIsOpen(false);
  }, [handleSubmit, setIsOpen]);

  const handleCancelButton = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return {
    isOpen,
    handleOpenModal,
    handleOkButton,
    handleCancelButton,
  };
};
