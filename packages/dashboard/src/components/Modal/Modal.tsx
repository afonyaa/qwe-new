import { FC, useEffect } from 'react';
import { ModalProps } from './interfaces';
import { ReactPortal } from '@components/ReactPortal';

/**
 * https://blog.logrocket.com/build-modal-with-react-portals/
 * */

const Modal: FC<ModalProps> = ({
  titleText,
  isOpen,
  handleCancel,
  handleOk,
  content,
  okText,
  cancelText,
  okDisabled = false,
  cancelDisabled = false,
  isLoading = false,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleCancel() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleCancel]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId={'react-portal-modal-container'}>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto">
            <div className="bg-base-100 p-6 rounded-md flex flex-col gap-5 w-[32rem]">
              <label
                onClick={handleCancel}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
              <h2 className="text-xl mt-4">{titleText}</h2>
              <div className="max-h-[32rem] overflow-y-auto">
                <div>{content}</div>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleCancel}
                  className={`btn btn-outline btn-ghost`}
                  disabled={cancelDisabled || isLoading}
                >
                  {isLoading && (
                    <span className="loading loading-spinner"></span>
                  )}
                  {cancelText}
                </button>
                <button
                  onClick={handleOk}
                  className={`btn btn-active btn-accent text-base-100`}
                  disabled={okDisabled || isLoading}
                >
                  {isLoading && (
                    <span className="loading loading-spinner"></span>
                  )}
                  {okText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
      </>
    </ReactPortal>
  );
};

export default Modal;
