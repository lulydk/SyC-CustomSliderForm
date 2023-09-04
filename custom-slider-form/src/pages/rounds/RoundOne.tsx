import Round1Questions from '../../data/round1.json'
import { Slider } from '../../components/form/slider/Slider'
import { FormEvent, useContext, useEffect, useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { updateForm1, INITIAL_DATA_R1, FormDataFields } from "./FormDataFields";
import { AuthContext } from '../../context/authContext';
import './Rounds.css'

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

export function RoundOne({ updateState }: RoundProps) {
    
    const [ formData, setFormData ] = useState(INITIAL_DATA_R1);
    const { currentUser, userDataRef, setUserDataRef } = useContext(AuthContext);
    const [ currentRound, setCurrentRound ] = useState(1);
    const [ disableButton, setDisableButton ] = useState(false);

    const totalRounds = 3;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currentRound < totalRounds) {
            setCurrentRound(currentRound + 1); // move to the next round
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {
            setDisableButton(true);
            try {
                if (userDataRef == null && currentUser != null) {
                    setUserDataRef(doc(db, 'users', currentUser.uid));
                }
                if (userDataRef != null) {
                    console.log("updating doc round1");
                    updateForm1(userDataRef, formData);
                    updateState();
                }
            } catch (error:any) {
                console.log('Error en paso 1', error.message);
            }
        }
    };

    const getCurrentRoundQuestions = () => {
        switch (currentRound) {
          case 1:
            return Round1Questions.prompts_group1;
          case 2:
            return Round1Questions.prompts_group2;
          case 3:
            return Round1Questions.prompts_group3;
          default:
            return [];
        }
      };
    
    return (
    <>
        <div className='wrapper-title'>
            <span className='title row'>5D-ASC</span>
            <span className='description mb-4 row'>Ahora vamos a hacerte algunas preguntas sobre esa experiencia en particular.</span>
        </div>
        <form onSubmit={handleSubmit}>
            {
                getCurrentRoundQuestions().map(question => {
                    return (
                        question['label-spanish'].length > 0 ? <Slider key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} value={formData[question['id'] as keyof typeof formData]} lowerBound={Round1Questions['lower-bound']} higherBound={Round1Questions['higher-bound']} round={1} updateFields={handleInputChange} /> : <></>
                    )
                })
            }
            <div className='button-wrapper mt-3'>
                <button className='btn btn-primary' type='submit' disabled={disableButton}>{ disableButton ? 'Guardando...':'Siguiente' }</button>
            </div>
        </form>
        </>
    )
}