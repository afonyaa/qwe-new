import React, { FC, useEffect } from 'react';
import axios from '@/modules/QueryProvider/axios';

export const Quizzes: FC = () => {
  const generateQuiz = () => {
    axios
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
