import { Dashboard } from './containers/Dashboard';
import { RedirectionProvider } from './modules/RedirectionProvider';

const App = () => {
  return (
    <RedirectionProvider>
      <Dashboard />
    </RedirectionProvider>
  );
};

export default App;
