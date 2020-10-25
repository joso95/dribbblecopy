import React from 'react';
import './App.css';
import Header from './components/js/header.jsx'
import Intro from './components/js/introduction.jsx'
import SubNav from './components/js/subNav.jsx'
import MainContent from './components/js/mainContent.jsx'

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
