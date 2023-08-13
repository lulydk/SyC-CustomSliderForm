import { useMultistepForm } from '../../hooks/useMultistepForm';
import { RoundOne } from './RoundOne';
import { RoundTwo } from './RoundTwo';
import { RoundThree } from './RoundThree';
import { End } from "../End";
import { Start } from "../Start";
import { Consent } from '../Consent';
import { Experience } from '../Experience';
import '../../App.css'

function Rounds() {
  
  const updateRound = () => {
    next();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
    
  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultistepForm([ <Consent updateState={updateRound}/>, <Start updateState={updateRound}/>, <Experience updateState={updateRound}/>, <RoundOne updateState={updateRound}/>, <RoundTwo updateState={updateRound}/>, <RoundThree updateState={updateRound}/>, <End/> ])
  
  return(
    <div>
        <div className='wrapper'>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={(currentStepIdx+1)/(steps.length) * 100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{"width": (currentStepIdx+1)/(steps.length)*100+"%"}}></div>
            </div>
            {step}
        </div>
    </div>
  )
}
export default Rounds
