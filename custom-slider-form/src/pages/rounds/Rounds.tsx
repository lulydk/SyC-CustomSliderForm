import { RoundOne } from '../../pages/rounds/RoundOne';
import { RoundTwo } from '../../pages/rounds/RoundTwo';
import { RoundThree } from '../../pages/rounds/RoundThree';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import { End } from "../End";
import { Start } from "../Start";
import '../../App.css'

function Rounds() {
  
  const updateRound = () => {
    next();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
    
  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultistepForm([ <Start updateState={updateRound}/>, <RoundOne updateState={updateRound}/>, <RoundTwo updateState={updateRound}/>, <RoundThree updateState={updateRound}/>, <End/> ])
  
  return(
    <div>
        <div className='wrapper'>
            <p>{currentStepIdx + 1} / {steps.length}</p>
            {step}
        </div>
    </div>
  )
}
export default Rounds
