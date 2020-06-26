import React from 'react';

import './App.css';
import { CountProvider } from './context/CountContext';
import Counter from './components/Counter';

function App() {
  return (
    <CountProvider>
      <div className='App'>
        <h1>React Context</h1>
        <Counter />
      </div>
    </CountProvider>
  );
}

export default App;
