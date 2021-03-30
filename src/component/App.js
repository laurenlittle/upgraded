import './App.css';

import Results from './Sections/Results';

function App({jobs}) {
  return (
    <div className="App">
      Upgraded
      <Results jobs={jobs} />
    </div>
  );
}

export default App;
