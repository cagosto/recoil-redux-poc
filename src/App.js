import { RecoilRoot } from 'recoil';
import './App.css';
import RecoilHolder from './components/Recoil/index.components';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <RecoilHolder />
      </div>
    </RecoilRoot>
  );
}

export default App;
