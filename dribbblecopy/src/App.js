import React from 'react';
import './App.css';
import Header from './components/header'
import Intro from './components/introduction'
import SubNav from './components/subNav'

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Intro/>
      </div>
      <div>
        <SubNav/>
      </div>
    </div>
  );
}

export default App;
