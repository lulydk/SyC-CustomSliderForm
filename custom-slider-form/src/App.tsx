import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { RoundOne } from './pages/roundOne/RoundOne';
import { RoundTwo } from './pages/roundTwo/RoundTwo';
import { RoundThree } from './pages/roundThree/RoundThree';
import { useMultistepForm } from './hooks/useMultistepForm';
import { Navbar } from './components/ui/navbar/Navbar';
import { Auth } from './pages/auth/Auth';

function App() {

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultistepForm([ <RoundOne/>, <RoundTwo/>, <RoundThree/> ])

  return (
    <div className="App">
      <Navbar/>
      <div className='wrapper'>
        {/* <Auth/> */}
        <p>{currentStepIdx + 1} / {steps.length}</p>
        {step}
        <div className='buttonWrapper'>
          { !isFirstStep && <button className='btn btn-primary' onClick={back}>Anterior</button> }
          { !isLastStep && <button className='btn btn-primary' onClick={next}>Siguiente</button> }
          { isLastStep && <button className='btn btn-send' onClick={next}>Finalizar</button> }
        </div>
      </div>
    </div>
  )
}

export default App
