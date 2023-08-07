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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (userDataRef == null && currentUser != null) {
                setUserDataRef(doc(db, 'users', currentUser.uid));
            }
            if (userDataRef != null) {
                updateForm1(userDataRef, formData);
                updateState();
            }
        } catch (error:any) {
            console.log('Error en paso 1', error.message);
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
            Round1Questions.map(data => {
                return (
                    data.prompts.map(question => {
                        return (
                            question['label-spanish'].length > 0 ? <Slider key={question['id']} id={question['id']} prompt={question['label-spanish']} translation={question['label-english']} value={formData[question['id'] as keyof typeof formData]} lowerBound={data['lower-bound']} higherBound={data['higher-bound']} round={1} updateFields={handleInputChange} /> : <></>
                        )
                    })
                )
            })
        }
        <div className='button-wrapper mt-3'>
            <button className='btn btn-primary' type='submit'>Siguiente</button>
        </div>
        </form>
        </>
    )
}