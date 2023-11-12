import { FC, useState } from 'react';
import { StepsInfo } from './StepsInfo';
import { useHandlePDFFiles } from './hooks/useHandlePDFFiles';
import { useCreateQuizQuery } from './hooks/useCreateQuizQuery';
import RocketLaunchIcon from '@heroicons/react/24/outline/RocketLaunchIcon';

export const PDFQuizGeneration: FC = () => {
  const { fileInputRef, handlePDFFileChange, extractedText, PDFParseLoading } =
    useHandlePDFFiles();

  const [questionsCount, setQuestionsCount] = useState<string>();

  const {
    isLoading: generateQuizLoading,
    handleGenerateNewQuiz,
    // error: generateQuizError, todo toasts
  } = useCreateQuizQuery();

  const canGenerateQuiz =
    extractedText &&
    Number(questionsCount) > 0 &&
    Number(questionsCount) <= 20 &&
    !generateQuizLoading;
  return (
    <div className="h-full flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-4 items-center justify-center p-2 md:basis-1/2 bg-gradient-to-r from-violet-200 to-pink-200 rounded-md">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="file-input file-input-sm file-input-bordered w-full max-w-xs"
          onChange={handlePDFFileChange}
        />
        <StepsInfo />
      </div>
      <div className="md:basis-1/2 grow">
        {PDFParseLoading ? (
          <div className="flex justify-center items-center h-full">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        ) : (
          <div className="flex flex-col h-full gap-4">
            <div className="grow">
              <textarea
                className="textarea h-full textarea-bordered w-full resize-none focus:outline-none"
                placeholder="PDF text content"
                value={extractedText}
              ></textarea>
            </div>
            <div className="flex justify-end items-center gap-4">
              {extractedText && (
                <div className="badge badge-success gap-2">
                  {extractedText?.length}
                  <span className={'hidden sm:inline-block'}>symbols</span>
                </div>
              )}
              <input
                type="number"
                value={questionsCount}
                placeholder="Questions amount"
                onChange={(e) => setQuestionsCount(e.target.value)}
                className="input input-bordered input-primary w-36  input-xs focus:outline-none"
              />
              <button
                className={`btn btn-outline btn-neutral btn-sm ${
                  !canGenerateQuiz && 'btn-disabled'
                }`}
                onClick={() =>
                  handleGenerateNewQuiz(extractedText!, questionsCount!)
                }
              >
                {generateQuizLoading ? (
                  <span className="loading loading-ring loading-sm"></span>
                ) : (
                  <>
                    <span className="hidden sm:inline-block">
                      Generate quiz
                    </span>
                    <RocketLaunchIcon className="block sm:hidden w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
