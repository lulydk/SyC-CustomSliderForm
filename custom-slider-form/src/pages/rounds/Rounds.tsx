
import { RoundOne } from '../../pages/rounds/RoundOne';
import { RoundTwo } from '../../pages/rounds/RoundTwo';
import { RoundThree } from '../../pages/rounds/RoundThree';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import '../../App.css'

function Rounds() {

    const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultistepForm([ <RoundOne/>, <RoundTwo/>, <RoundThree/> ])
  
  return(
    <div>
        <div className='wrapper'>
            <p>{currentStepIdx + 1} / {steps.length}</p>
            {step}
            <div className='buttonWrapper mt-3'>
                { !isFirstStep && <button className='btn btn-primary' onClick={back}>Anterior</button> }
                { !isLastStep && <button className='btn btn-primary' onClick={next}>Siguiente</button> }
                { isLastStep && <button className='btn btn-send' onClick={next}>Finalizar</button> }
            </div>
        </div>
    </div>
  )
}
export default Rounds
