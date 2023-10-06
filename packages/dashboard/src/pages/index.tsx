import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@containers/Root';
import { ClassesPage } from '@/pages/classes';
import { RootPagesPaths } from '@/pages/constants';
import { QuizzesPage } from '@/pages/quizzes';
import { DashboardPage } from '@/pages/dashboard';
import { ProfileSettingsPage } from '@/pages/profileSettings';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        path: RootPagesPaths.dashboard,
        element: <DashboardPage />,
      },
      {
        path: RootPagesPaths.quizzes,
        element: <QuizzesPage />,
      },
      {
        path: RootPagesPaths.classes,
        element: <ClassesPage />,
      },
      {
        path: RootPagesPaths.profileSettings,
        element: <ProfileSettingsPage />,
      },
    ],
  },
]);
