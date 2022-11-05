import React from 'react';
import Markdown from './components/Markdown.jsx';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>Markdown Previewer</h1>
      </div>
      <Markdown />
    </div>
  );
}

export default App;
