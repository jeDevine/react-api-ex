import React from 'react';
import './App.css';
import Quotes from './components/Quotes';
import Weather from './components/Weather';
import Reddit from './components/Reddit';

function App() {
  return (
    <div className="App">
      <Reddit />
      <Weather />
      <Quotes />
    </div>
  );
}

export default App;
