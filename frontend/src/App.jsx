import React from 'react'

import Header from './components/Header/Header';
import FirstSection from './sections/firstSection/FirstSection';
import SecondSection from './sections/secondSection/SecondSection';

import './App.css';

function App() {

  return (
    <>
    <div className="background">
      <Header />
      <div className="scroll">
        <FirstSection />
        <SecondSection />
      </div>
      
    </div>
    
    </>
  )
}

export default App
