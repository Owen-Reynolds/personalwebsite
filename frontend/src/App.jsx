import React from 'react'

import Header from './components/Header/Header';
import FirstSection from './sections/firstSection/FirstSection';
import SecondSection from './sections/secondSection/SecondSection';
import ThirdSection from './sections/thirdSection/ThirdSection'

import './App.css';

function App() {

  return (
    <>
    <div className="background">
      <Header />
      <div className="scroll">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      
    </div>
    
    </>
  )
}

export default App
