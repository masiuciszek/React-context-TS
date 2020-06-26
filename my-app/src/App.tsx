import React from 'react';

import './App.css';
import { CountProvider } from './context/CountContext';
import Counter from './components/Counter';

function App() {
  return (
    <CountProvider>
      <div className='App'>
        <Counter />
      </div>
    </CountProvider>
  );
}

export default App;
