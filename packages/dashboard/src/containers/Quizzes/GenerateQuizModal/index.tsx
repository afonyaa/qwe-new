import { Modal } from '@components/Modal';
import { FC, useEffect, useState } from 'react';
import { GenerateQuizModalProps } from './interfaces';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';
import { CREATE_QUIZ_PAYLOAD_INITIAL_VALUES } from '@containers/Quizzes/GenerateQuizModal/constants';

export const GenerateQuizModal: FC<GenerateQuizModalProps> = ({
  isOpen,
  handleCancelButton,
  isLoading,
  onSubmit,
}) => {
  const [createQuizPayload, setCreateQuizPayload] = useState<CreateQuizPayload>(
    CREATE_QUIZ_PAYLOAD_INITIAL_VALUES,
  );

  useEffect(() => {
    if (!isOpen) {
      cleanup();
    }
  }, [isOpen]);

  const cleanup = () => {
    setCreateQuizPayload(CREATE_QUIZ_PAYLOAD_INITIAL_VALUES);
  };

  const handleChangeQuizTopicText = (text: string) => {
    setCreateQuizPayload((prev) => ({
      ...prev,
      topic: text,
    }));
  };

  const handleChangeQuizTopicQuestionsNumber = (text: number) => {
    setCreateQuizPayload((prev) => ({
      ...prev,
      questionCount: text,
    }));
  };

  const canCreate =
    createQuizPayload?.questionCount &&
    createQuizPayload?.questionCount > 0 &&
    createQuizPayload.topic;

  const handleOkButton = () => {
    onSubmit(createQuizPayload);
  };

  return (
    <Modal
      handleCancel={handleCancelButton}
      handleOk={handleOkButton}
      isOpen={isOpen}
      isLoading={isLoading}
      titleText={'You are going to create new Quiz'}
      content={
        <div>
          <div className="flex flex-col gap-y-4">
            <textarea
              className="textarea textarea-solid textarea-block"
              placeholder="What will be the quiz about?"
              onChange={(event) => {
                handleChangeQuizTopicText(event.target.value);
              }}
              value={createQuizPayload.topic}
            />
            <input
              type="number"
              className="input input-solid w-64"
              placeholder="Number of questions?"
              onChange={(event) => {
                handleChangeQuizTopicQuestionsNumber(
                  event.target.value as unknown as number,
                );
              }}
              value={createQuizPayload.questionCount}
            />
          </div>
        </div>
      }
      okText={'Yes, create'}
      cancelText={'Cancel'}
      okDisabled={!canCreate}
    />
  );
};
