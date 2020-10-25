import React from 'react';
import './App.css';
import Header from './components/js/header'
import Intro from './components/js/introduction'
import SubNav from './components/js/subNav'
import MainContent from './components/js/mainContent'

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
