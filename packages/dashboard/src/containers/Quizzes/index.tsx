import React, { FC, useCallback } from 'react';
import { QuizList } from './QuizList';
import { Controls } from './Controls';
import { GenerateQuizModal } from './GenerateQuizModal';
import { useModal } from '@components/Modal';
import { useNavigate } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';
import { useHandleQuizzesQueryOperations } from './hooks/useHandleQuizzesQueryOperations';

export const Quizzes: FC = () => {
  const navigate = useNavigate();
  const redirectToPDFCreation = useCallback(() => {
    navigate(`${RootPagesPaths.quizFromPDF}`);
  }, [navigate]);

  const {
    quizListLoading,
    quizGenerateLoading,
    quizListData,
    handleRemoveQuiz,
    handleSubmitQuizInfo,
  } = useHandleQuizzesQueryOperations();

  const generateQuizModal = useModal({});

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Controls
          onCreateQuizFromPDF={redirectToPDFCreation}
          onCreateQuiz={generateQuizModal.handleOpenModal}
          isLoading={quizListLoading}
          quizCount={quizListData?.length}
        />
      </div>
      <div className="flex-grow h-full py-4 pb-8">
        <QuizList
          onRemoveQuiz={handleRemoveQuiz}
          isLoading={quizListLoading}
          quizList={quizListData}
        />
      </div>
      <GenerateQuizModal
        isOpen={generateQuizModal.isOpen}
        handleCancelButton={generateQuizModal.handleCancelButton}
        onSubmit={(quizInfo) =>
          handleSubmitQuizInfo(quizInfo, () => {
            generateQuizModal.handleCancelButton;
          })
        }
        isLoading={quizGenerateLoading}
      />
    </div>
  );
};
