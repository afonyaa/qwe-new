import { FC, useRef, useState } from 'react';
import axios from '@quiz-web-engine/fetcher';
import { toast } from 'react-toastify';
import { RootPagesPaths } from '@pages/constants';
import { useNavigate } from 'react-router-dom';

export const InstantGeneration: FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [questionsCount, setQuestionsCount] = useState<string>();
  const [loading, setLoading] = useState(false);
  const redirectToQuiz = (id: string) => {
    navigate(`${RootPagesPaths.quizzes}/${id}`);
  };
  const canGenerateQuiz =
    Number(questionsCount) > 0 && Number(questionsCount) <= 20;

  const handlePDFFileChange = () => {
    if (fileInputRef?.current) {
      const file = fileInputRef.current.files![0];
      const formData = new FormData();
      setLoading(true);

      formData.append('file', file);
      axios
        .post('quiz/generate/pdf', formData, {
          params: {
            questionNumber: questionsCount,
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res: any) => {
          redirectToQuiz(res.data.quizId);
        })
        .catch((e) => {
          toast.error(JSON.stringify(e.data.message), {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="card md:w-1/2 w-full bg-base-100 shadow-xl">
      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="card-body">
          <p className="text-sm text-center">Or Generate With ChatGPT4</p>
          <input
            ref={fileInputRef}
            disabled={!canGenerateQuiz}
            type="file"
            accept=".pdf"
            className="file-input file-input-xs file-input-error file-input-bordered max-w-xs"
            onChange={handlePDFFileChange}
          />
          <input
            type="number"
            value={questionsCount}
            placeholder="Questions amount"
            onChange={(e) => setQuestionsCount(e.target.value)}
            className="input input-bordered input-primary max-w-xs  input-xs focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};
