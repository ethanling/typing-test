import React from 'react';
import KeyProvider from './context/KeyProvider';
import Display from './components/Display';

function App() {
  return (
      <div className="App">
          <KeyProvider>
              <Display />
          </KeyProvider>
      </div>
  );
}

export default App;
