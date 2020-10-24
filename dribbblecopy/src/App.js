import React from 'react';
import './App.css';
import Header from './components/header'
import Intro from './components/introduction'
import SubNav from './components/subNav'
import MainContent from './components/mainContent'

function App() {
  return (
    <body className="wholeApp">
        <Header/>
        <Intro/>
        <SubNav/>
        <MainContent/>
    </body>
  );
}

export default App;
