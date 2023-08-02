
import { RoundOne } from '../../pages/rounds/RoundOne';
import { RoundTwo } from '../../pages/rounds/RoundTwo';
import { RoundThree } from '../../pages/rounds/RoundThree';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import '../../App.css'

function Rounds() {

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
};
  return(
    <div>
        <div className='wrapper'>
            <p>{currentStepIdx + 1} / {steps.length}</p>
            <form onSubmit={handleSubmit}>
              {step}
            </form>
            <div className='button-wrapper mt-3'>
                { !isFirstStep && <button className='btn btn-primary' onClick={() => {back(); scrollToTop();}}>Anterior</button> }
                { !isLastStep && <button className='btn btn-primary' onClick={() => {next(); scrollToTop();}}>Siguiente</button> }
                { isLastStep && <button className='btn btn-send' onClick={() => {next(); scrollToTop();}}>Finalizar</button> }
            </div>
        </div>
    </div>
  )
}
export default Rounds
