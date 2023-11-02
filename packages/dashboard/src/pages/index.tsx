import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@containers/Root';
import { RootPagesPaths } from '@pages/constants';
import React, { Suspense } from 'react';

const DashboardPage = React.lazy(() => import('./dashboard'));
const QuizzesPage = React.lazy(() => import('./quizzes'));
const QuizPage = React.lazy(() => import('./quiz'));
const ClassesPage = React.lazy(() => import('./classes'));
const ProfileSettingsPage = React.lazy(() => import('./profileSettings'));

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        path: RootPagesPaths.dashboard,
        element: (
          <Suspense>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: RootPagesPaths.quizzes,
        element: (
          <Suspense>
            <QuizzesPage />
          </Suspense>
        ),
      },
      {
        path: RootPagesPaths.quiz,
        element: (
          <Suspense>
            <QuizPage />
          </Suspense>
        ),
      },
      {
        path: RootPagesPaths.classes,
        element: (
          <Suspense>
            <ClassesPage />
          </Suspense>
        ),
      },
      {
        path: RootPagesPaths.profileSettings,
        element: (
          <Suspense>
            <ProfileSettingsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
