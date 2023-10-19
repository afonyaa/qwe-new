import { Dashboard } from './containers/Dashboard';
import { RedirectionProvider } from './modules/RedirectionProvider';
import { QueryProvider } from './modules/QueryProvider';

const App = () => {
  return (
    <QueryProvider>
      <RedirectionProvider>
        <Dashboard />
      </RedirectionProvider>
    </QueryProvider>
  );
};

export default App;
