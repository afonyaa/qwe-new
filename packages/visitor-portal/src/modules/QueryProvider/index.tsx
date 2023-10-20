import { FC } from 'react';

import { QueryProviderProps } from './interfaces';
import {
  QueryClient as TanStackQueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new TanStackQueryClient();

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};
