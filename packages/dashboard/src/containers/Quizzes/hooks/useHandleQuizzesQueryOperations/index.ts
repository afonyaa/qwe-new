import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getQuizListQuery } from './queries/getQuizListQuery';
import { removeQuizQuery } from './queries/removeQuizQuery';
import { generateQuizQuery } from './queries/generateQuizQuery';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';
import { toast } from 'react-toastify';

export const useHandleQuizzesQueryOperations = () => {
  const queryClient = useQueryClient();
  const { data: quizListData, isLoading: quizListLoading } = useQuery({
    queryKey: ['quizList'],
    queryFn: getQuizListQuery,
    refetchOnWindowFocus: false,
  });

  const { mutate: mutateRemoveQuiz } = useMutation({
    mutationKey: ['removeQuiz'],
    mutationFn: removeQuizQuery,
    onSuccess: () => {
      toast.success('Quiz removed', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    },
  });

  const { mutate: mutateGenerateQuiz, isLoading: quizGenerateLoading } =
    useMutation({
      mutationKey: ['generateQuiz'],
      mutationFn: generateQuizQuery,
      onSuccess: () => {
        toast.success('Quiz ready', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
      onError: (e: { data: { message: string } }) => {
        toast.error(JSON.stringify(e.data.message), {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
    });

  const handleSubmitQuizInfo = (
    quizPayload: CreateQuizPayload,
    onSuccess: () => void,
  ) => {
    mutateGenerateQuiz(quizPayload, {
      onSuccess: () => {
        queryClient.invalidateQueries(['quizList']);
        onSuccess();
      },
    });
  };

  const handleRemoveQuiz = (id: string) => {
    mutateRemoveQuiz(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['quizList']);
        },
      },
    );
  };

  return {
    quizListData,
    quizListLoading,
    handleSubmitQuizInfo,
    handleRemoveQuiz,
    quizGenerateLoading,
  };
};
