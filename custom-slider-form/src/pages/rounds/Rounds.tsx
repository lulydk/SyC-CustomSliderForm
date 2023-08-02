
import { FormEvent, useContext, useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { RoundOne } from '../../pages/rounds/RoundOne';
import { RoundTwo } from '../../pages/rounds/RoundTwo';
import { RoundThree } from '../../pages/rounds/RoundThree';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import { AuthContext } from "../../context/authContext";
import { db } from "../../firebase/firebase";
import { updateForm1, INITIAL_DATA_R1, updateForm2, INITIAL_DATA_R2, updateForm3, INITIAL_DATA_R3, FormDataFields } from "./FormDataFields";
import '../../App.css'

function Rounds() {

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);
  
  const [data1, setData1] = useState(INITIAL_DATA_R1);
  const [data2, setData2] = useState(INITIAL_DATA_R2);
  const [data3, setData3] = useState(INITIAL_DATA_R3);
  
  function updateFields1(fields: Partial<FormDataFields>) {
    setData1(prev => {
        return { ...prev, ...fields }
    })
  }

  function updateFields2(fields: Partial<FormDataFields>) {
    setData2(prev => {
        return { ...prev, ...fields }
    })
  }

  function updateFields3(fields: Partial<FormDataFields>) {
    setData3(prev => {
        return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, next, back } = useMultistepForm([ <RoundOne {...data1} updateFields={updateFields1}/>, <RoundTwo {...data2} updateFields={updateFields2}/>, <RoundThree {...data3} updateFields={updateFields3}/> ])
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (userDataRef != null) {
        if (currentStepIdx == 0) {
          updateForm1(userDataRef, data1);
        } else if (currentStepIdx == 1) {
          updateForm2(userDataRef, data2);
        } else if (currentStepIdx == 2) {
          updateForm3(userDataRef, data3);
        }
      } else {
        alert("Error guardando datos. Intente nuevamente");
        if (currentUser != null) {
          setUserDataRef(doc(db, 'users', currentUser.uid));
        }
      }
    } catch (error:any) {
        console.log('Error en paso '+currentStepIdx, error.message);
    }
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
