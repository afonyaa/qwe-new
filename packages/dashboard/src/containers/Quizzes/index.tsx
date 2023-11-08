import React, { FC, useCallback } from 'react';
import { QuizList } from './QuizList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getQuizListQuery } from './queries/getQuizListQuery';
import { Controls } from './Controls';
import { GenerateQuizModal } from './GenerateQuizModal';
import { useModal } from '@components/Modal';
import { generateQuizQuery } from './queries/generateQuizQuery';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';
import { useNavigate } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';
import { removeQuizQuery } from './queries/removeQuizQuery';

export const Quizzes: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: quizListData, isLoading: quizListLoading } = useQuery({
    queryKey: ['quizList'],
    queryFn: getQuizListQuery,
    refetchOnWindowFocus: false,
  });

  const { mutate: mutateRemoveQuiz } = useMutation({
    mutationKey: ['removeQuiz'],
    mutationFn: removeQuizQuery,
  });

  const { mutate: mutateGenerateQuiz, isLoading: quizGenerateLoading } =
    useMutation({
      mutationKey: ['generateQuiz'],
      mutationFn: generateQuizQuery,
    });

  const generateQuizModal = useModal({});

  const onSubmitNewQuizData = (quizPayload: CreateQuizPayload) => {
    mutateGenerateQuiz(quizPayload, {
      onSuccess: () => {
        queryClient.invalidateQueries(['quizList']);
        generateQuizModal.handleCancelButton();
      },
    });
  };

  const onRemoveQuiz = (id: string) => {
    mutateRemoveQuiz(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['quizList']);
        },
      },
    );
  };

  const redirectToPDFCreation = useCallback(() => {
    navigate(`${RootPagesPaths.quizFromPDF}`);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-x-3">
        <Controls
          onCreateQuizFromPDF={redirectToPDFCreation}
          onCreateQuiz={generateQuizModal.handleOpenModal}
          isLoading={quizListLoading}
          quizCount={quizListData?.length}
        />
      </div>
      <div className="flex-grow h-full py-4 pb-8">
        <QuizList
          onRemoveQuiz={onRemoveQuiz}
          isLoading={quizListLoading}
          quizList={quizListData}
        />
      </div>
      <GenerateQuizModal
        isOpen={generateQuizModal.isOpen}
        handleCancelButton={generateQuizModal.handleCancelButton}
        onSubmit={onSubmitNewQuizData}
        isLoading={quizGenerateLoading}
      />
    </div>
  );
};
