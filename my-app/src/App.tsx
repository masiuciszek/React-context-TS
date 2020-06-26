import React from 'react';

import './App.css';
import { CountProvider } from './context/CountContext';
import Counter from './components/Counter';
import { UserProvider } from './context/UserContext';
import Users from './components/Users';

function App() {
  return (
    <CountProvider>
      <UserProvider>
        <div className='App'>
          <h1>React Context</h1>
          <Counter />
          <Users />
        </div>
      </UserProvider>
    </CountProvider>
  );
}

export default App;
