import React, { FC } from 'react';
import { QuizList } from './QuizList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getQuizListQuery } from './queries/getQuizListQuery';
import { Controls } from './Controls';
import { GenerateQuizModal } from './GenerateQuizModal';
import { useModal } from '@components/Modal';
import { generateQuizQuery } from './queries/generateQuizQuery';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export const Quizzes: FC = () => {
  const queryClient = useQueryClient();
  const { data: quizListData, isLoading: quizListLoading } = useQuery({
    queryKey: ['quizList'],
    queryFn: getQuizListQuery,
    refetchOnWindowFocus: false,
  });

  const { mutate, isLoading: quizGenerateLoading } = useMutation({
    mutationKey: ['generateQuiz'],
    mutationFn: generateQuizQuery,
  });

  const generateQuizModal = useModal({});

  const onSubmitNewQuizData = (quizPayload: CreateQuizPayload) => {
    mutate(quizPayload, {
      onSuccess: () => {
        queryClient.invalidateQueries(['quizList']);
        generateQuizModal.handleCancelButton();
      },
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-x-3">
        <Controls
          onCreateQuiz={generateQuizModal.handleOpenModal}
          isLoading={quizListLoading}
          quizCount={quizListData?.length}
        />
      </div>
      <div className="flex-grow h-full w-1/2 py-4">
        <QuizList isLoading={quizListLoading} quizList={quizListData} />
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
