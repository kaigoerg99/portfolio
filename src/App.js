import React from 'react';
import './App.css';
import Background from './img/pexels-jimmy-chan-2076189.jpg'
import MainContainer from './components/MainContainer/MainContainer.js';
import { DarkModeProvider } from './context/themeContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div
      className="App"
      style={{backgroundImage: `url(${Background})`}}
    >
      <DarkModeProvider>
        <BrowserRouter>
          <MainContainer/>
        </BrowserRouter>
      </DarkModeProvider>
    </div>
  );
}

export default App;
