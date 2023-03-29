import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { QuestionsRoundOne } from './QuestionsRoundOne';
import { QuestionsRoundTwo } from './QuestionsRoundTwo';
import { useMultistepForm } from './useMultistepForm';

function App() {
  const {
    steps,
    currentStepIdx,
    step,
    isFirstStep,
    isLastStep,
    next,
    back
  } = useMultistepForm([
    <QuestionsRoundOne/>,
    <QuestionsRoundTwo/>,
    <div>Three</div>
  ])

  return (
    <div className="App">
      {/* <nav className="navbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="icon.png" alt="Logo" height="30"/>
            Sueño y Consciencia
          </a>
          <button className='btn'>Acerca de</button>
        </div>
      </nav> */}
      <div className='wrapper mt-5'>
        <p>{currentStepIdx + 1} / {steps.length}</p>
        {step}
        <div className='d-flex mt-5 gap-2 justify-content-end'>
          { !isFirstStep && <button className='btn btn-primary' onClick={back}>Anterior</button> }
          <button className='btn btn-primary' onClick={next}>
            { isLastStep ? "Finalizar":"Siguiente" }
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
