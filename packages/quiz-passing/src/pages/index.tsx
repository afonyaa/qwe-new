import { createBrowserRouter } from 'react-router-dom';
import { RootPagesPaths } from '@pages/constants';
import { Root } from '@containers/Root';
import { GamePage } from '@pages/game';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        path: RootPagesPaths.game,
        element: <GamePage />,
      },
    ],
  },
]);
