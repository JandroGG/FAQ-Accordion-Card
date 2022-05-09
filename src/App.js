import React from 'react';
import './App.css';
import Images from './components/Images.js'
import Faq from './components/Faq.js'


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='images-container'>
          <Images />
        </div>
        <div className='faq-container'>
          <Faq />
        </div>
      </div>

    </div>
  );
}


export default App;
