import React, { FC, useEffect } from 'react';
import instance from '@/modules/QueryProvider/axios';

export const Quizzes: FC = () => {
  const generateQuiz = () => {
    instance
      .post(`quiz/generate`, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    generateQuiz();
  }, []);
  return <div></div>;
};
