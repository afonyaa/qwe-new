// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useState } from 'react';
import axios from 'axios';

export const Quizzes: FC = () => {
  const [loading, setLoading] = useState(false);
  const [quizName, setQuizName] = useState('');
  const [questionsCount, setQuestionsCount] = useState(0);

  const [quizNameReceived, setQuizNameReceived] = useState();
  const [questionsReceived, setQuestionsReceived] = useState();

  const getQuizById = (id: string) => {
    const promises = [];
    axios
      .get(`https://quiz-web-engine-7ffab586accc.herokuapp.com/${id}`)
      .then((res) => {
        setQuizNameReceived(res.data.name);
        for (const question of res.data.questions) {
          promises.push(
            new Promise((resolve) => {
              axios
                .get(
                  `https://quiz-web-engine-7ffab586accc.herokuapp.com/question/${question.questionId}`,
                )
                .then((res) => {
                  resolve(res.data);
                });
            }),
          );
        }
        Promise.all(promises).then((res) => {
          setQuestionsReceived(res);
        });
      });
  };

  const generateQuiz = () => {
    setLoading(true);
    axios
      .post(
        `https://quiz-web-engine-7ffab586accc.herokuapp.com/quiz/generate`,
        {
          topic: quizName,
          questionsCount: questionsCount,
        },
        {},
      )
      .then((res) => {
        setLoading(false);
        getQuizById(res.data.quizId);
      });
  };

  return (
    <div>
      <input
        value={quizName}
        onChange={(e) => setQuizName(e.target.value)}
        placeholder="Enter Quiz Name"
        className="w-1/2 sm:text-xs border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-800"
      />
      <input
        value={questionsCount}
        onChange={(e) => setQuestionsCount(Number(e.target.value))}
        placeholder="Enter Questions Count"
        type="number"
        className="w-1/3 ml-2 sm:text-xs border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-800"
      />
      <button
        onClick={generateQuiz}
        className="mt-2 bg-violet-800 text-slate-100 p-2 rounded-md text-xs ml-2"
      >
        {loading ? 'Wait' : 'Generate Quiz'}
      </button>
      <div className="mt-4">
        <h1 className="text-lg mb-4">{quizNameReceived}</h1>
        {questionsReceived?.length > 0 && (
          <div>
            {questionsReceived.map((question) => (
              <div className="mt-6">
                <div>{question.question}</div>
                <div>
                  {question.answer.map((answer) => (
                    <div>
                      <span
                        className={`${
                          question.rightAnswerId === answer.answerId
                            ? 'text-green-600'
                            : 'text-slate-600'
                        }`}
                      >
                        {answer.answerText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
