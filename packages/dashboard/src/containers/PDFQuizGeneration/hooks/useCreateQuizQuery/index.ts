import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RootPagesPaths } from '@pages/constants';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';
import { useMutation } from '@tanstack/react-query';
import { generateQuizFromPDF } from './queries/generateQuizFromPDF';
import { toast } from 'react-toastify';

export const useCreateQuizQuery = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ['generateQuizFromPdf'],
    mutationFn: generateQuizFromPDF,
    onSuccess: (data) => {
      redirectToQuiz(data.quizId);
    },
    onError: (e: any) => {
      toast.error(JSON.stringify(e.data.message), {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    },
  });
  const navigate = useNavigate();

  const redirectToQuiz = useCallback(
    (quizId: string) => {
      navigate(`${RootPagesPaths.quizzes}/${quizId}`);
    },
    [navigate],
  );

  const handleGenerateNewQuiz = useCallback(
    (topic: string, questionCount: string) => {
      const payload: CreateQuizPayload = {
        questionCount,
        topic,
      };
      mutate(payload);
    },
    [mutate],
  );

  return { handleGenerateNewQuiz, isLoading, error };
};
