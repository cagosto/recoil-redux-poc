import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import './App.css';
import ErrorFallback from './components/ErrorFallback';
import Users from './components/Users/Users';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Users />
        </ErrorBoundary>
      </div>
    </RecoilRoot>
  );
}

export default App;
