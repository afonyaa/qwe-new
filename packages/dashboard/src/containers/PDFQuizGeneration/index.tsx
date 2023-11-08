// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { ChangeEventHandler, FC, useCallback, useRef, useState } from 'react';
import quizPictureCover from './assets/generate-quiz-cover.png';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?worker';
import { useMutation } from '@tanstack/react-query';
import { generateQuizFromPDF } from './queries/generateQuizFromPDF';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';
import { useNavigate } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';

window.pdfjsWorker = pdfjsWorker;
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFQuizGeneration: FC = () => {
  const {
    mutate,
    isLoading: quizGenerateLoading,
    error,
  } = useMutation({
    mutationKey: ['generateQuizFromPdf'],
    mutationFn: generateQuizFromPDF,
  });

  const navigate = useNavigate();

  const redirectToQuiz = useCallback(
    (quizId: string) => {
      navigate(`${RootPagesPaths.quizzes}/${quizId}`);
    },
    [navigate],
  );

  const [pdfText, setPdfText] = useState('');
  const [PDFParseLoading, setPDFParseLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onGenerateQuizFromPDF = useCallback(() => {
    const payload: CreateQuizPayload = {
      questionCount: '2',
      topic: pdfText,
    };
    mutate(payload, {
      onSuccess: (data) => {
        redirectToQuiz(data.quizId);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  }, [mutate, pdfText, redirectToQuiz]);

  const handlePDFFileChange: ChangeEventHandler<HTMLInputElement> = () => {
    setPDFParseLoading(true);
    if (fileInputRef?.current) {
      const file = fileInputRef.current.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (event: ProgressEvent<FileReader>) => {
          const arrayBuffer = event?.target?.result;
          if (arrayBuffer) {
            const pdfData = new Uint8Array(arrayBuffer as ArrayBuffer);
            extractText(pdfData)
              .then(
                function (text) {
                  setPdfText(text);
                },
                function (reason) {
                  console.error(reason);
                },
              )
              .finally(() => {
                setPDFParseLoading(false);
              });
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  function extractText(pdfUrl) {
    const pdf = pdfjs.getDocument(pdfUrl);
    return pdf.promise.then(function (pdf) {
      const totalPageCount = pdf.numPages;
      const countPromises = [];
      for (let currentPage = 1; currentPage <= totalPageCount; currentPage++) {
        const page = pdf.getPage(currentPage);
        countPromises.push(
          page.then(function (page) {
            const textContent = page.getTextContent();
            return textContent.then(function (text) {
              return text.items
                .map(function (s) {
                  return s.str;
                })
                .join('');
            });
          }),
        );
      }

      return Promise.all(countPromises).then(function (texts) {
        return texts.join('');
      });
    });
  }

  return (
    <div className="h-full flex flex-col">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={quizPictureCover}
            className="max-w-sm h-48 lg:block hidden"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Create quiz from your own source file
            </h1>
            <p className="py-6">
              Please Provide text/pdf file, we will parse it and make quiz for
              you
            </p>
            <div className="w-full max-w-xs">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handlePDFFileChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full px-5 bg-red overflow-y-auto">
        {PDFParseLoading && <progress className="progress w-56"></progress>}
        {pdfText && (
          <div tabIndex={0} className="bg-base-200 p-8 rounded-xl">
            <div className="collapse-title flex items-center flex-wrap gap-2 text-xl font-medium">
              PDF Content is ready
              <button
                onClick={onGenerateQuizFromPDF}
                className="btn btn-sm text-xs btn-active ml-4"
                disabled={quizGenerateLoading}
              >
                {quizGenerateLoading && (
                  <span className="loading loading-infinity loading-xs"></span>
                )}
                Generate quiz
              </button>
              <div className="badge badge-success gap-2">
                {pdfText.length} characters
              </div>
              {error?.data?.message && (
                <div className="badge badge-error gap-2">
                  {error?.data?.message}
                </div>
              )}
            </div>
            <div className="">
              <textarea
                onChange={(e) => {
                  setPdfText(e.target.value);
                }}
                className="textarea textarea-secondary w-full"
                value={pdfText}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
