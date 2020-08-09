import React from 'react';

import Calculator from './components/Calculator';
import Header from './components/Header';

import './assets/styles/app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
