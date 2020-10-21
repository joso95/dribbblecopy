import React from 'react';
import './App.css';
import Header from './components/header'
import Intro from './components/introduction'

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
