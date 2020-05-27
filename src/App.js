import React from 'react';
import UserContextProvider from './contexts/UserContext';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Homepage />
      </UserContextProvider>
    </div>
  );
}

export default App;
